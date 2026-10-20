// Gera um pacote SCORM 1.2 (.zip) por categoria a partir do build em
// dist-scorm/conteudo (`vite build --mode scorm`).
//
// Uso: node scripts/empacotar-scorm.mjs [slug-da-categoria ...]
// Sem argumentos, empacota todas as categorias de secoesCategorias.
import { cpSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { execFileSync } from "node:child_process";
import { secoesCategorias } from "../src/app/data/secoesCategorias.ts";

const raiz = "dist-scorm";
const conteudo = join(raiz, "conteudo");
const temporario = join(raiz, "pacotes");

// Mesma regra de src/app/scorm.ts.
const slugCategoria = (titulo) =>
  titulo
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const escaparXml = (texto) =>
  texto.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const listarArquivos = (pasta) =>
  readdirSync(pasta).flatMap((nome) => {
    const caminho = join(pasta, nome);
    return statSync(caminho).isDirectory() ? listarArquivos(caminho) : [caminho];
  });

const manifesto = (slug, titulo, arquivos) => `<?xml version="1.0" encoding="UTF-8"?>
<manifest identifier="dpsp-treinamento-${slug}" version="1.0"
  xmlns="http://www.imsproject.org/xsd/imscp_rootv1p1p2"
  xmlns:adlcp="http://www.adlnet.org/xsd/adlcp_rootv1p2"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.imsproject.org/xsd/imscp_rootv1p1p2 imscp_rootv1p1p2.xsd http://www.imsglobal.org/xsd/imsmd_rootv1p2p1 imsmd_rootv1p2p1.xsd http://www.adlnet.org/xsd/adlcp_rootv1p2 adlcp_rootv1p2.xsd">
  <metadata>
    <schema>ADL SCORM</schema>
    <schemaversion>1.2</schemaversion>
  </metadata>
  <organizations default="org-${slug}">
    <organization identifier="org-${slug}">
      <title>${escaparXml(titulo)}</title>
      <item identifier="item-${slug}" identifierref="sco-${slug}" isvisible="true">
        <title>${escaparXml(titulo)}</title>
      </item>
    </organization>
  </organizations>
  <resources>
    <resource identifier="sco-${slug}" type="webcontent" adlcp:scormtype="sco" href="index.html">
${arquivos.map((a) => `      <file href="${escaparXml(a)}"/>`).join("\n")}
    </resource>
  </resources>
</manifest>
`;

const pedidas = process.argv.slice(2);
const categorias = secoesCategorias
  .map((secao, i) => ({ secao, slug: slugCategoria(secao.titulo), ordem: String(i + 1).padStart(2, "0") }))
  .filter(({ slug }) => pedidas.length === 0 || pedidas.includes(slug));

const desconhecidas = pedidas.filter((p) => !categorias.some((c) => c.slug === p));
if (desconhecidas.length > 0) {
  console.error(`Categoria(s) desconhecida(s): ${desconhecidas.join(", ")}`);
  console.error(`Disponíveis: ${secoesCategorias.map((s) => slugCategoria(s.titulo)).join(", ")}`);
  process.exit(1);
}

rmSync(temporario, { recursive: true, force: true });

for (const { secao, slug, ordem } of categorias) {
  const pasta = join(temporario, slug);
  cpSync(conteudo, pasta, { recursive: true });

  // A categoria do pacote é lida por src/app/scorm.ts.
  const index = join(pasta, "index.html");
  const html = readFileSync(index, "utf8");
  writeFileSync(index, html.replace("<head>", `<head>\n    <script>window.__CATEGORIA_SCORM__ = ${JSON.stringify(slug)};</script>`));

  const titulo = `Treinamento PDV - ${secao.titulo}`;
  const arquivos = listarArquivos(pasta).map((a) => relative(pasta, a).split(sep).join("/"));
  writeFileSync(join(pasta, "imsmanifest.xml"), manifesto(slug, titulo, arquivos));

  const zip = `${ordem}-${slug}.zip`;
  rmSync(join(raiz, zip), { force: true });
  execFileSync("zip", ["-qr", join("..", "..", zip), "."], { cwd: pasta });
  console.log(`dist-scorm/${zip}`);
}

rmSync(temporario, { recursive: true, force: true });
