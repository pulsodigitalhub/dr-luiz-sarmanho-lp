import { pageMarkup as baseMarkup } from "./MetaApp.jsx";
import { useLandingEffects } from "./useLandingEffects.js";

const pageMarkup = baseMarkup
  .replaceAll('src="../assets/', 'src="../../assets/')
  .replace("Ortopedia, quadril", "Ortopedia, cuidado geral")
  .replace(
    'Ortopedia, <span class="hero-title-accent">quadril</span> e procedimentos <span class="hero-title-accent">para dor</span>',
    'Ortopedia, <span class="hero-title-accent">trauma</span> e cuidado <span class="hero-title-accent">para sua mobilidade</span>'
  )
  .replace(
    "Agende uma avaliação com o Dr. Luiz Sarmanho para queixas ortopédicas, dor no quadril, artrose, artroplastia total e procedimentos ortopédicos relacionados ao controle da dor.",
    "Agende uma avaliação com o Dr. Luiz Sarmanho para dores articulares, lesões, limitações de movimento, artrose e outras queixas ortopédicas."
  )
  .replace(
    "Da dor no quadril aos procedimentos, a conduta começa por um diagnóstico bem feito.",
    "Da dor no joelho ao ombro, do quadril à coluna, a conduta começa por um diagnóstico bem feito."
  )
  .replace("<h3>Ortopedia</h3>", "<h3>Ortopedia geral</h3>")
  .replace(
    "<h3>Quadril e artroplastia</h3>",
    "<h3>Joelho, ombro e quadril</h3>"
  )
  .replace(
    "Avaliação de dor no quadril, artrose, fraturas e casos em que a artroplastia total pode ser discutida.",
    "Avaliação de dores articulares, desgaste, lesões e casos em que um procedimento cirúrgico pode ser discutido."
  )
  .replace(
    "<h3>Dor musculoesquelética</h3>",
    "<h3>Lesões e trauma ortopédico</h3>"
  )
  .replace(
    "Avaliação de dores persistentes, limitações funcionais e sintomas que impactam a rotina.",
    "Avaliação de entorses, traumas, fraturas, contusões e outras lesões que exigem cuidado ortopédico."
  )
  .replace(
    "Procedimentos voltados ao alívio da dor e à melhora funcional podem ser avaliados conforme a indicação clínica.",
    "Procedimentos voltados ao alívio da dor e à melhora da função podem ser avaliados conforme a necessidade de cada caso."
  )
  .replace(
    "Infiltrações e outros procedimentos podem ser avaliados quando houver indicação clínica.",
    "Avaliação de dor persistente, inflamação e limitações que pedem uma conduta mais direcionada."
  )
  .replace(
    "Quando marcar uma consulta",
    "Quando vale procurar um ortopedista"
  )
  .replace("<h3>Dor no quadril</h3>", "<h3>Dor articular persistente</h3>")
  .replace(
    "Para quem sente dor ao caminhar, levantar da cadeira, subir escadas ou permanecer muito tempo em pé.",
    "Para quem sente dor em articulações ou músculos e já percebe impacto na rotina, no trabalho ou no sono."
  )
  .replace("<h3>Artrose e desgaste articular</h3>", "<h3>Dor na coluna, ombro ou joelho</h3>")
  .replace(
    "Avaliação do grau de desgaste, impacto na rotina e possibilidades de tratamento conforme o caso.",
    "Quando a dor aparece ao se movimentar, carregar peso, treinar ou permanecer muito tempo na mesma posição."
  )
  .replace("<h3>Lesões ortopédicas</h3>", "<h3>Lesões, torções e entorses</h3>")
  .replace(
    "Avaliação de lesões, limitações de movimento e quadros que exigem acompanhamento ortopédico.",
    "Para lesões esportivas, torções, pancadas e outras situações que precisam de avaliação ortopédica."
  )
  .replace(
    "<h3>Quedas ou piora após esforço</h3>",
    "<h3>Quedas, impacto ou trauma</h3>"
  )
  .replace(
    "Casos em que a dor começa ou piora depois de queda, torção, impacto ou aumento de carga.",
    "Quando a dor começou depois de queda, esforço, acidente, impacto ou sobrecarga repetitiva."
  )
  .replace(
    "Um ortopedista com vivência em consultório, hospital e centro cirúrgico.",
    "Um ortopedista com atuação ampla em consultório, hospital e centro cirúrgico."
  )
  .replace(
    "Dr. Luiz Henrique Corrêa da Costa Sarmanho é médico ortopedista com atuação voltada ao quadril, artroplastia total e procedimentos ortopédicos relacionados ao controle da dor.",
    "Dr. Luiz Henrique Corrêa da Costa Sarmanho é médico ortopedista com atuação em ortopedia geral, trauma, cirurgia do quadril e procedimentos voltados ao alívio da dor."
  )
  .replace(
    "Vivência em ortopedia, quadril e procedimentos relacionados à dor",
    "Vivência em ortopedia, trauma e condutas voltadas ao alívio da dor"
  )
  .replace(
    "<strong>Quadril</strong>",
    "<strong>Ortopedia</strong>"
  )
  .replace(
    "artroplastia total, artrose e reconstrução articular",
    "atendimento para dores, lesões, limitações e desgaste articular"
  )
  .replace(
    "<strong>Dor</strong>",
    "<strong>Trauma</strong>"
  )
  .replace(
    "formação complementar em intervenção em dor",
    "experiência no acompanhamento de lesões e recuperação funcional"
  )
  .replace(
    "Quer entender o melhor caminho para o seu caso?",
    "Quer avaliar sua dor ou limitação com mais clareza?"
  )
  .replace(
    "Fale com a equipe para verificar disponibilidade, convênio e agendar uma avaliação com o Dr. Luiz.",
    "Fale com a equipe para verificar disponibilidade, convênio e agendar sua avaliação ortopédica."
  )
  .replace(
    "O Dr. Luiz atende quais problemas?",
    "Quais problemas ortopédicos o Dr. Luiz atende?"
  )
  .replace(
    "Atende queixas ortopédicas como dores articulares, lesões, artrose, problemas no quadril e casos que podem precisar de procedimentos ou cirurgia.",
    "Atende dores articulares e musculares, lesões, artrose, traumas, limitações de movimento e outros quadros ortopédicos que pedem avaliação especializada."
  )
  .replace(
    "Ele realiza cirurgia de quadril?",
    "Nem toda dor ortopédica precisa de cirurgia?"
  )
  .replace(
    "Sim. A atuação inclui avaliação de casos de artroplastia total do quadril, artrose, dor persistente e outras condições que afetam essa articulação.",
    "Não. Em muitos casos, o tratamento pode começar com medidas conservadoras, investigação adequada e acompanhamento clínico."
  )
  .replace(
    "Toda dor no quadril precisa de cirurgia?",
    "Quando devo procurar um ortopedista?"
  )
  .replace(
    "Não. A indicação depende do diagnóstico, da intensidade dos sintomas, do grau de limitação e da resposta a tratamentos anteriores.",
    "Quando a dor persiste, volta com frequência, limita movimentos, aparece após trauma ou atrapalha atividades simples do dia a dia."
  );

export default function MetaOrtopediaGeralApp() {
  useLandingEffects();

  return <div dangerouslySetInnerHTML={{ __html: pageMarkup }} />;
}
