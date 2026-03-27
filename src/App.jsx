import React, { useEffect, useMemo, useState } from "react";
import {
  AlarmClock,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  CircleAlert,
  Filter,
  LayoutGrid,
  Printer,
  RotateCcw,
  Search,
  Target
} from "lucide-react";

const scheduleData = [
  {
    "week": 1,
    "start": "2026-03-30",
    "end": "2026-04-05",
    "days": [
      {
        "date": "2026-03-30",
        "dayName": "Segunda",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Seguridade Social: conceito, organização e princípios constitucionais",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Língua Portuguesa",
            "topic": "Compreensão e interpretação de textos",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Direito Administrativo",
            "topic": "Organização administrativa da União; administração direta e indireta",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-03-31",
        "dayName": "Terça",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Constitucional",
            "topic": "Direitos e garantias fundamentais",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Origem e evolução legislativa da Seguridade Social no Brasil",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Informática",
            "topic": "Conceitos de Internet e intranet",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-04-01",
        "dayName": "Quarta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Língua Portuguesa",
            "topic": "Acentuação gráfica",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Administrativo",
            "topic": "Agentes públicos: espécies, classificação, poderes, deveres e prerrogativas",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Raciocínio Lógico-Matemático",
            "topic": "Proposições, valores lógicos, sentenças abertas e conectivos",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-04-02",
        "dayName": "Quinta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Direito Previdenciário: conceito, fontes e autonomia",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Constitucional",
            "topic": "Garantias constitucionais individuais",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Ética no Serviço Público",
            "topic": "Código de Ética Profissional do Servidor Público Civil do Poder Executivo Federal",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-04-03",
        "dayName": "Sexta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Administrativo",
            "topic": "Lei nº 8.112/1990: provimento, vacância, remoção, redistribuição e substituição",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Língua Portuguesa",
            "topic": "Pontuação",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Aplicação das normas previdenciárias",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-04-04",
        "dayName": "Sábado",
        "type": "review",
        "items": [
          "Revisão de toda a semana com flash cards e anotações particulares",
          "Resolver no mínimo 200 questões dos assuntos estudados na semana",
          "Corrigir os erros e atualizar o caderno de erros",
          "Marcar os assuntos com mais dificuldade para reforço na próxima semana"
        ]
      },
      {
        "date": "2026-04-05",
        "dayName": "Domingo",
        "type": "errors",
        "items": [
          "Mapeamento de erros da semana",
          "Punição: 10 questões por erro cometido"
        ]
      }
    ]
  },
  {
    "week": 2,
    "start": "2026-04-06",
    "end": "2026-04-12",
    "days": [
      {
        "date": "2026-04-06",
        "dayName": "Segunda",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "RGPS: visão geral e estrutura",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Língua Portuguesa",
            "topic": "Concordância nominal e verbal",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Direito Administrativo",
            "topic": "Lei nº 8.112/1990: direitos e vantagens",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-04-07",
        "dayName": "Terça",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Constitucional",
            "topic": "Garantias dos direitos coletivos, sociais e políticos",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Segurados obrigatórios",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Informática",
            "topic": "Windows 7 e 10",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-04-08",
        "dayName": "Quarta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Língua Portuguesa",
            "topic": "Redação de correspondências oficiais",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Administrativo",
            "topic": "Lei nº 8.112/1990: regime disciplinar e responsabilidades",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Raciocínio Lógico-Matemático",
            "topic": "Proposições simples e compostas",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-04-09",
        "dayName": "Quinta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Filiação e inscrição",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Constitucional",
            "topic": "Administração pública (arts. 37 a 41)",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Ética no Serviço Público",
            "topic": "Decreto nº 1.171/1994",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-04-10",
        "dayName": "Sexta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Administrativo",
            "topic": "Poderes administrativos",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Língua Portuguesa",
            "topic": "Tipologia textual",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Empregado, doméstico, contribuinte individual, avulso e segurado especial",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-04-11",
        "dayName": "Sábado",
        "type": "review",
        "items": [
          "Revisão de toda a semana com flash cards e anotações particulares",
          "Resolver no mínimo 200 questões dos assuntos estudados na semana",
          "Corrigir os erros e atualizar o caderno de erros",
          "Marcar os assuntos com mais dificuldade para reforço na próxima semana"
        ]
      },
      {
        "date": "2026-04-12",
        "dayName": "Domingo",
        "type": "errors",
        "items": [
          "Mapeamento de erros da semana",
          "Punição: 10 questões por erro cometido"
        ]
      }
    ]
  },
  {
    "week": 3,
    "start": "2026-04-13",
    "end": "2026-04-19",
    "days": [
      {
        "date": "2026-04-13",
        "dayName": "Segunda",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Segurado facultativo",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Língua Portuguesa",
            "topic": "Emprego das classes de palavras",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Direito Administrativo",
            "topic": "Ato administrativo",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-04-14",
        "dayName": "Terça",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Constitucional",
            "topic": "Direitos sociais",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Trabalhadores excluídos do RGPS",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Informática",
            "topic": "LibreOffice: edição de textos, planilhas e apresentações",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-04-15",
        "dayName": "Quarta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Língua Portuguesa",
            "topic": "Emprego do sinal indicativo de crase",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Administrativo",
            "topic": "Serviços públicos",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Raciocínio Lógico-Matemático",
            "topic": "Número de linhas da tabela-verdade",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-04-16",
        "dayName": "Quinta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Empresa e empregador doméstico: conceito previdenciário",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Constitucional",
            "topic": "Nacionalidade",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Ética no Serviço Público",
            "topic": "Decreto nº 6.029/2007",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-04-17",
        "dayName": "Sexta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Administrativo",
            "topic": "Controle e responsabilização da administração",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Língua Portuguesa",
            "topic": "Ortografia oficial",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Financiamento da Seguridade Social",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-04-18",
        "dayName": "Sábado",
        "type": "review",
        "items": [
          "Revisão de toda a semana com flash cards e anotações particulares",
          "Resolver no mínimo 200 questões dos assuntos estudados na semana",
          "Corrigir os erros e atualizar o caderno de erros",
          "Marcar os assuntos com mais dificuldade para reforço na próxima semana"
        ]
      },
      {
        "date": "2026-04-19",
        "dayName": "Domingo",
        "type": "errors",
        "items": [
          "Mapeamento de erros da semana",
          "Punição: 10 questões por erro cometido"
        ]
      }
    ]
  },
  {
    "week": 4,
    "start": "2026-04-20",
    "end": "2026-04-26",
    "days": [
      {
        "date": "2026-04-20",
        "dayName": "Segunda",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Receitas da União",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Língua Portuguesa",
            "topic": "Sintaxe da oração e do período",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Direito Administrativo",
            "topic": "Lei nº 8.429/1992",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-04-21",
        "dayName": "Terça",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Constitucional",
            "topic": "Cidadania",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Receitas das contribuições sociais",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Informática",
            "topic": "Segurança da informação: vírus, worms e derivados",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-04-22",
        "dayName": "Quarta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Língua Portuguesa",
            "topic": "Regência nominal e verbal",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Administrativo",
            "topic": "Estado, governo e administração pública",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Raciocínio Lógico-Matemático",
            "topic": "Tautologia",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-04-23",
        "dayName": "Quinta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Salário de contribuição: conceito",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Constitucional",
            "topic": "Direito à vida, liberdade, igualdade, segurança e propriedade",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Ética no Serviço Público",
            "topic": "Código de Ética Profissional do Servidor Público Civil do Poder Executivo Federal",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-04-24",
        "dayName": "Sexta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Administrativo",
            "topic": "Direito administrativo: conceito, fontes e princípios",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Língua Portuguesa",
            "topic": "Significação das palavras",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Parcelas integrantes e não integrantes",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-04-25",
        "dayName": "Sábado",
        "type": "review",
        "items": [
          "Revisão de toda a semana com flash cards e anotações particulares",
          "Resolver no mínimo 200 questões dos assuntos estudados na semana",
          "Corrigir os erros e atualizar o caderno de erros",
          "Marcar os assuntos com mais dificuldade para reforço na próxima semana"
        ]
      },
      {
        "date": "2026-04-26",
        "dayName": "Domingo",
        "type": "errors",
        "items": [
          "Mapeamento de erros da semana",
          "Punição: 10 questões por erro cometido"
        ]
      }
    ]
  },
  {
    "week": 5,
    "start": "2026-04-27",
    "end": "2026-05-03",
    "days": [
      {
        "date": "2026-04-27",
        "dayName": "Segunda",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Limites mínimo e máximo",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Língua Portuguesa",
            "topic": "Compreensão e interpretação de textos",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Direito Administrativo",
            "topic": "Lei nº 9.784/1999",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-04-28",
        "dayName": "Terça",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Constitucional",
            "topic": "Direitos e garantias fundamentais",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Contribuições inferiores ao salário mínimo e complementação",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Informática",
            "topic": "Conceitos básicos de informática",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-04-29",
        "dayName": "Quarta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Língua Portuguesa",
            "topic": "Acentuação gráfica",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Administrativo",
            "topic": "Organização administrativa da União; administração direta e indireta",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Raciocínio Lógico-Matemático",
            "topic": "Operação com conjuntos",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-04-30",
        "dayName": "Quinta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Reajustamento do salário de contribuição",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Constitucional",
            "topic": "Garantias constitucionais individuais",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Ética no Serviço Público",
            "topic": "Decreto nº 1.171/1994",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-05-01",
        "dayName": "Sexta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Administrativo",
            "topic": "Agentes públicos: espécies, classificação, poderes, deveres e prerrogativas",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Língua Portuguesa",
            "topic": "Pontuação",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Arrecadação e recolhimento das contribuições",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-05-02",
        "dayName": "Sábado",
        "type": "review",
        "items": [
          "Revisão de toda a semana com flash cards e anotações particulares",
          "Resolver no mínimo 200 questões dos assuntos estudados na semana",
          "Corrigir os erros e atualizar o caderno de erros",
          "Marcar os assuntos com mais dificuldade para reforço na próxima semana"
        ]
      },
      {
        "date": "2026-05-03",
        "dayName": "Domingo",
        "type": "errors",
        "items": [
          "Mapeamento de erros da semana",
          "Punição: 10 questões por erro cometido"
        ]
      }
    ]
  },
  {
    "week": 6,
    "start": "2026-05-04",
    "end": "2026-05-10",
    "days": [
      {
        "date": "2026-05-04",
        "dayName": "Segunda",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Competência do INSS e da Receita Federal",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Língua Portuguesa",
            "topic": "Concordância nominal e verbal",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Direito Administrativo",
            "topic": "Lei nº 8.112/1990: provimento, vacância, remoção, redistribuição e substituição",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-05-05",
        "dayName": "Terça",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Constitucional",
            "topic": "Garantias dos direitos coletivos, sociais e políticos",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Obrigações da empresa e demais contribuintes",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Informática",
            "topic": "Navegação e correio eletrônico",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-05-06",
        "dayName": "Quarta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Língua Portuguesa",
            "topic": "Redação de correspondências oficiais",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Administrativo",
            "topic": "Lei nº 8.112/1990: direitos e vantagens",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Raciocínio Lógico-Matemático",
            "topic": "Cálculos com porcentagens",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-05-07",
        "dayName": "Quinta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Prazo de recolhimento",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Constitucional",
            "topic": "Administração pública (arts. 37 a 41)",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Ética no Serviço Público",
            "topic": "Decreto nº 6.029/2007",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-05-08",
        "dayName": "Sexta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Administrativo",
            "topic": "Lei nº 8.112/1990: regime disciplinar e responsabilidades",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Língua Portuguesa",
            "topic": "Tipologia textual",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Recolhimento fora do prazo: juros, multa e atualização",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-05-09",
        "dayName": "Sábado",
        "type": "review",
        "items": [
          "Revisão de toda a semana com flash cards e anotações particulares",
          "Resolver no mínimo 200 questões dos assuntos estudados na semana",
          "Corrigir os erros e atualizar o caderno de erros",
          "Marcar os assuntos com mais dificuldade para reforço na próxima semana"
        ]
      },
      {
        "date": "2026-05-10",
        "dayName": "Domingo",
        "type": "errors",
        "items": [
          "Mapeamento de erros da semana",
          "Punição: 10 questões por erro cometido"
        ]
      }
    ]
  },
  {
    "week": 7,
    "start": "2026-05-11",
    "end": "2026-05-17",
    "days": [
      {
        "date": "2026-05-11",
        "dayName": "Segunda",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Decadência e prescrição",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Língua Portuguesa",
            "topic": "Emprego das classes de palavras",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Direito Administrativo",
            "topic": "Poderes administrativos",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-05-12",
        "dayName": "Terça",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Constitucional",
            "topic": "Direitos sociais",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Crimes contra a seguridade social",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Informática",
            "topic": "Conceitos de Internet e intranet",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-05-13",
        "dayName": "Quarta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Língua Portuguesa",
            "topic": "Emprego do sinal indicativo de crase",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Administrativo",
            "topic": "Ato administrativo",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Raciocínio Lógico-Matemático",
            "topic": "Proposições, valores lógicos, sentenças abertas e conectivos",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-05-14",
        "dayName": "Quinta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Recurso das decisões administrativas",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Constitucional",
            "topic": "Nacionalidade",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Ética no Serviço Público",
            "topic": "Código de Ética Profissional do Servidor Público Civil do Poder Executivo Federal",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-05-15",
        "dayName": "Sexta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Administrativo",
            "topic": "Serviços públicos",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Língua Portuguesa",
            "topic": "Ortografia oficial",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Plano de Benefícios da Previdência Social",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-05-16",
        "dayName": "Sábado",
        "type": "review",
        "items": [
          "Revisão de toda a semana com flash cards e anotações particulares",
          "Resolver no mínimo 200 questões dos assuntos estudados na semana",
          "Corrigir os erros e atualizar o caderno de erros",
          "Marcar os assuntos com mais dificuldade para reforço na próxima semana"
        ]
      },
      {
        "date": "2026-05-17",
        "dayName": "Domingo",
        "type": "errors",
        "items": [
          "Mapeamento de erros da semana",
          "Punição: 10 questões por erro cometido"
        ]
      }
    ]
  },
  {
    "week": 8,
    "start": "2026-05-18",
    "end": "2026-05-24",
    "days": [
      {
        "date": "2026-05-18",
        "dayName": "Segunda",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Carência, salário de benefício e renda mensal",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Língua Portuguesa",
            "topic": "Sintaxe da oração e do período",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Direito Administrativo",
            "topic": "Controle e responsabilização da administração",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-05-19",
        "dayName": "Terça",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Constitucional",
            "topic": "Cidadania",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Reajustamento do valor dos benefícios",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Informática",
            "topic": "Windows 7 e 10",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-05-20",
        "dayName": "Quarta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Língua Portuguesa",
            "topic": "Regência nominal e verbal",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Administrativo",
            "topic": "Lei nº 8.429/1992",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Raciocínio Lógico-Matemático",
            "topic": "Proposições simples e compostas",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-05-21",
        "dayName": "Quinta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Manutenção, perda e restabelecimento da qualidade de segurado",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Constitucional",
            "topic": "Direito à vida, liberdade, igualdade, segurança e propriedade",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Ética no Serviço Público",
            "topic": "Decreto nº 1.171/1994",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-05-22",
        "dayName": "Sexta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Administrativo",
            "topic": "Estado, governo e administração pública",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Língua Portuguesa",
            "topic": "Significação das palavras",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Serviços previdenciários: serviço social",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-05-23",
        "dayName": "Sábado",
        "type": "review",
        "items": [
          "Revisão de toda a semana com flash cards e anotações particulares",
          "Resolver no mínimo 200 questões dos assuntos estudados na semana",
          "Corrigir os erros e atualizar o caderno de erros",
          "Marcar os assuntos com mais dificuldade para reforço na próxima semana"
        ]
      },
      {
        "date": "2026-05-24",
        "dayName": "Domingo",
        "type": "errors",
        "items": [
          "Mapeamento de erros da semana",
          "Punição: 10 questões por erro cometido"
        ]
      }
    ]
  },
  {
    "week": 9,
    "start": "2026-05-25",
    "end": "2026-05-31",
    "days": [
      {
        "date": "2026-05-25",
        "dayName": "Segunda",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Reabilitação profissional",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Língua Portuguesa",
            "topic": "Compreensão e interpretação de textos",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Direito Administrativo",
            "topic": "Direito administrativo: conceito, fontes e princípios",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-05-26",
        "dayName": "Terça",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Constitucional",
            "topic": "Direitos e garantias fundamentais",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Benefícios de legislações especiais: Talidomida",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Informática",
            "topic": "LibreOffice: edição de textos, planilhas e apresentações",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-05-27",
        "dayName": "Quarta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Língua Portuguesa",
            "topic": "Acentuação gráfica",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Administrativo",
            "topic": "Lei nº 9.784/1999",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Raciocínio Lógico-Matemático",
            "topic": "Número de linhas da tabela-verdade",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-05-28",
        "dayName": "Quinta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Benefícios de legislações especiais: Seringueiros",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Constitucional",
            "topic": "Garantias constitucionais individuais",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Ética no Serviço Público",
            "topic": "Decreto nº 6.029/2007",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-05-29",
        "dayName": "Sexta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Administrativo",
            "topic": "Organização administrativa da União; administração direta e indireta",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Língua Portuguesa",
            "topic": "Pontuação",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Benefícios de legislações especiais: Ex-combatente",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-05-30",
        "dayName": "Sábado",
        "type": "review",
        "items": [
          "Revisão de toda a semana com flash cards e anotações particulares",
          "Resolver no mínimo 200 questões dos assuntos estudados na semana",
          "Corrigir os erros e atualizar o caderno de erros",
          "Marcar os assuntos com mais dificuldade para reforço na próxima semana"
        ]
      },
      {
        "date": "2026-05-31",
        "dayName": "Domingo",
        "type": "errors",
        "items": [
          "Mapeamento de erros da semana",
          "Punição: 10 questões por erro cometido"
        ]
      }
    ]
  },
  {
    "week": 10,
    "start": "2026-06-01",
    "end": "2026-06-07",
    "days": [
      {
        "date": "2026-06-01",
        "dayName": "Segunda",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Benefícios de legislações especiais: Hemodiálise de Caruaru",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Língua Portuguesa",
            "topic": "Concordância nominal e verbal",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Direito Administrativo",
            "topic": "Agentes públicos: espécies, classificação, poderes, deveres e prerrogativas",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-06-02",
        "dayName": "Terça",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Constitucional",
            "topic": "Garantias dos direitos coletivos, sociais e políticos",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Benefícios de legislações especiais: Césio 137",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Informática",
            "topic": "Segurança da informação: vírus, worms e derivados",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-06-03",
        "dayName": "Quarta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Língua Portuguesa",
            "topic": "Redação de correspondências oficiais",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Administrativo",
            "topic": "Lei nº 8.112/1990: provimento, vacância, remoção, redistribuição e substituição",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Raciocínio Lógico-Matemático",
            "topic": "Tautologia",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-06-04",
        "dayName": "Quinta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Benefícios de legislações especiais: Anistiado político",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Constitucional",
            "topic": "Administração pública (arts. 37 a 41)",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Ética no Serviço Público",
            "topic": "Código de Ética Profissional do Servidor Público Civil do Poder Executivo Federal",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-06-05",
        "dayName": "Sexta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Administrativo",
            "topic": "Lei nº 8.112/1990: direitos e vantagens",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Língua Portuguesa",
            "topic": "Tipologia textual",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Benefícios de legislações especiais: Hanseníase",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-06-06",
        "dayName": "Sábado",
        "type": "review",
        "items": [
          "Revisão de toda a semana com flash cards e anotações particulares",
          "Resolver no mínimo 200 questões dos assuntos estudados na semana",
          "Corrigir os erros e atualizar o caderno de erros",
          "Marcar os assuntos com mais dificuldade para reforço na próxima semana"
        ]
      },
      {
        "date": "2026-06-07",
        "dayName": "Domingo",
        "type": "errors",
        "items": [
          "Mapeamento de erros da semana",
          "Punição: 10 questões por erro cometido"
        ]
      }
    ]
  },
  {
    "week": 11,
    "start": "2026-06-08",
    "end": "2026-06-14",
    "days": [
      {
        "date": "2026-06-08",
        "dayName": "Segunda",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Benefícios de legislações especiais: Síndrome Congênita do Zika Vírus",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Língua Portuguesa",
            "topic": "Emprego das classes de palavras",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Direito Administrativo",
            "topic": "Lei nº 8.112/1990: regime disciplinar e responsabilidades",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-06-09",
        "dayName": "Terça",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Constitucional",
            "topic": "Direitos sociais",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Seguro-defeso do pescador artesanal",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Informática",
            "topic": "Conceitos básicos de informática",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-06-10",
        "dayName": "Quarta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Língua Portuguesa",
            "topic": "Emprego do sinal indicativo de crase",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Administrativo",
            "topic": "Poderes administrativos",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Raciocínio Lógico-Matemático",
            "topic": "Operação com conjuntos",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-06-11",
        "dayName": "Quinta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "LOAS: visão geral",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Constitucional",
            "topic": "Nacionalidade",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Ética no Serviço Público",
            "topic": "Decreto nº 1.171/1994",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-06-12",
        "dayName": "Sexta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Administrativo",
            "topic": "Ato administrativo",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Língua Portuguesa",
            "topic": "Ortografia oficial",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "BPC/LOAS",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-06-13",
        "dayName": "Sábado",
        "type": "review",
        "items": [
          "Revisão de toda a semana com flash cards e anotações particulares",
          "Resolver no mínimo 200 questões dos assuntos estudados na semana",
          "Corrigir os erros e atualizar o caderno de erros",
          "Marcar os assuntos com mais dificuldade para reforço na próxima semana"
        ]
      },
      {
        "date": "2026-06-14",
        "dayName": "Domingo",
        "type": "errors",
        "items": [
          "Mapeamento de erros da semana",
          "Punição: 10 questões por erro cometido"
        ]
      }
    ]
  },
  {
    "week": 12,
    "start": "2026-06-15",
    "end": "2026-06-21",
    "days": [
      {
        "date": "2026-06-15",
        "dayName": "Segunda",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Auxílio-Inclusão",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Língua Portuguesa",
            "topic": "Sintaxe da oração e do período",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Direito Administrativo",
            "topic": "Serviços públicos",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-06-16",
        "dayName": "Terça",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Constitucional",
            "topic": "Cidadania",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Lei nº 8.742/1993",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Informática",
            "topic": "Navegação e correio eletrônico",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-06-17",
        "dayName": "Quarta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Língua Portuguesa",
            "topic": "Regência nominal e verbal",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Administrativo",
            "topic": "Controle e responsabilização da administração",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Raciocínio Lógico-Matemático",
            "topic": "Cálculos com porcentagens",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-06-18",
        "dayName": "Quinta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Lei nº 14.176/2021",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Constitucional",
            "topic": "Direito à vida, liberdade, igualdade, segurança e propriedade",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Ética no Serviço Público",
            "topic": "Decreto nº 6.029/2007",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-06-19",
        "dayName": "Sexta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Administrativo",
            "topic": "Lei nº 8.429/1992",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Língua Portuguesa",
            "topic": "Significação das palavras",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Decreto nº 6.214/2007",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-06-20",
        "dayName": "Sábado",
        "type": "review",
        "items": [
          "Revisão de toda a semana com flash cards e anotações particulares",
          "Resolver no mínimo 200 questões dos assuntos estudados na semana",
          "Corrigir os erros e atualizar o caderno de erros",
          "Marcar os assuntos com mais dificuldade para reforço na próxima semana"
        ]
      },
      {
        "date": "2026-06-21",
        "dayName": "Domingo",
        "type": "errors",
        "items": [
          "Mapeamento de erros da semana",
          "Punição: 10 questões por erro cometido"
        ]
      }
    ]
  },
  {
    "week": 13,
    "start": "2026-06-22",
    "end": "2026-06-28",
    "days": [
      {
        "date": "2026-06-22",
        "dayName": "Segunda",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "RPPS: visão geral",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Língua Portuguesa",
            "topic": "Compreensão e interpretação de textos",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Direito Administrativo",
            "topic": "Estado, governo e administração pública",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-06-23",
        "dayName": "Terça",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Constitucional",
            "topic": "Direitos e garantias fundamentais",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Certidão de Tempo de Contribuição",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Informática",
            "topic": "Conceitos de Internet e intranet",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-06-24",
        "dayName": "Quarta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Língua Portuguesa",
            "topic": "Acentuação gráfica",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Administrativo",
            "topic": "Direito administrativo: conceito, fontes e princípios",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Raciocínio Lógico-Matemático",
            "topic": "Proposições, valores lógicos, sentenças abertas e conectivos",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-06-25",
        "dayName": "Quinta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Contagem recíproca",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Constitucional",
            "topic": "Garantias constitucionais individuais",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Ética no Serviço Público",
            "topic": "Código de Ética Profissional do Servidor Público Civil do Poder Executivo Federal",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-06-26",
        "dayName": "Sexta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Administrativo",
            "topic": "Lei nº 9.784/1999",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Língua Portuguesa",
            "topic": "Pontuação",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Compensação previdenciária",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-06-27",
        "dayName": "Sábado",
        "type": "review",
        "items": [
          "Revisão de toda a semana com flash cards e anotações particulares",
          "Resolver no mínimo 200 questões dos assuntos estudados na semana",
          "Corrigir os erros e atualizar o caderno de erros",
          "Marcar os assuntos com mais dificuldade para reforço na próxima semana"
        ]
      },
      {
        "date": "2026-06-28",
        "dayName": "Domingo",
        "type": "errors",
        "items": [
          "Mapeamento de erros da semana",
          "Punição: 10 questões por erro cometido"
        ]
      }
    ]
  },
  {
    "week": 14,
    "start": "2026-06-29",
    "end": "2026-07-05",
    "days": [
      {
        "date": "2026-06-29",
        "dayName": "Segunda",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Lei nº 9.796/1999",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Língua Portuguesa",
            "topic": "Concordância nominal e verbal",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Direito Administrativo",
            "topic": "Organização administrativa da União; administração direta e indireta",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-06-30",
        "dayName": "Terça",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Constitucional",
            "topic": "Garantias dos direitos coletivos, sociais e políticos",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Decreto nº 10.188/2019",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Informática",
            "topic": "Windows 7 e 10",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-07-01",
        "dayName": "Quarta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Língua Portuguesa",
            "topic": "Redação de correspondências oficiais",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Administrativo",
            "topic": "Agentes públicos: espécies, classificação, poderes, deveres e prerrogativas",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Raciocínio Lógico-Matemático",
            "topic": "Proposições simples e compostas",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-07-02",
        "dayName": "Quinta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "EC nº 103/2019",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Constitucional",
            "topic": "Administração pública (arts. 37 a 41)",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Ética no Serviço Público",
            "topic": "Decreto nº 1.171/1994",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-07-03",
        "dayName": "Sexta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Administrativo",
            "topic": "Lei nº 8.112/1990: provimento, vacância, remoção, redistribuição e substituição",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Língua Portuguesa",
            "topic": "Tipologia textual",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "LC nº 142/2013",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-07-04",
        "dayName": "Sábado",
        "type": "review",
        "items": [
          "Revisão de toda a semana com flash cards e anotações particulares",
          "Resolver no mínimo 200 questões dos assuntos estudados na semana",
          "Corrigir os erros e atualizar o caderno de erros",
          "Marcar os assuntos com mais dificuldade para reforço na próxima semana"
        ]
      },
      {
        "date": "2026-07-05",
        "dayName": "Domingo",
        "type": "errors",
        "items": [
          "Mapeamento de erros da semana",
          "Punição: 10 questões por erro cometido"
        ]
      }
    ]
  },
  {
    "week": 15,
    "start": "2026-07-06",
    "end": "2026-07-12",
    "days": [
      {
        "date": "2026-07-06",
        "dayName": "Segunda",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Lei nº 8.212/1991",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Língua Portuguesa",
            "topic": "Emprego das classes de palavras",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Direito Administrativo",
            "topic": "Lei nº 8.112/1990: direitos e vantagens",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-07-07",
        "dayName": "Terça",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Constitucional",
            "topic": "Direitos sociais",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Lei nº 8.213/1991",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Informática",
            "topic": "LibreOffice: edição de textos, planilhas e apresentações",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-07-08",
        "dayName": "Quarta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Língua Portuguesa",
            "topic": "Emprego do sinal indicativo de crase",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Administrativo",
            "topic": "Lei nº 8.112/1990: regime disciplinar e responsabilidades",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Raciocínio Lógico-Matemático",
            "topic": "Número de linhas da tabela-verdade",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-07-09",
        "dayName": "Quinta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Decreto nº 3.048/1999",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Constitucional",
            "topic": "Nacionalidade",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Ética no Serviço Público",
            "topic": "Decreto nº 6.029/2007",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-07-10",
        "dayName": "Sexta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Administrativo",
            "topic": "Poderes administrativos",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Língua Portuguesa",
            "topic": "Ortografia oficial",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "IN PRES/INSS nº 128/2022",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-07-11",
        "dayName": "Sábado",
        "type": "review",
        "items": [
          "Revisão de toda a semana com flash cards e anotações particulares",
          "Resolver no mínimo 200 questões dos assuntos estudados na semana",
          "Corrigir os erros e atualizar o caderno de erros",
          "Marcar os assuntos com mais dificuldade para reforço na próxima semana"
        ]
      },
      {
        "date": "2026-07-12",
        "dayName": "Domingo",
        "type": "errors",
        "items": [
          "Mapeamento de erros da semana",
          "Punição: 10 questões por erro cometido"
        ]
      }
    ]
  },
  {
    "week": 16,
    "start": "2026-07-13",
    "end": "2026-07-19",
    "days": [
      {
        "date": "2026-07-13",
        "dayName": "Segunda",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Servidor público como agente de desenvolvimento social",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Língua Portuguesa",
            "topic": "Sintaxe da oração e do período",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Direito Administrativo",
            "topic": "Ato administrativo",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-07-14",
        "dayName": "Terça",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Constitucional",
            "topic": "Cidadania",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Saúde e qualidade de vida no serviço público",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Informática",
            "topic": "Segurança da informação: vírus, worms e derivados",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-07-15",
        "dayName": "Quarta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Língua Portuguesa",
            "topic": "Regência nominal e verbal",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Administrativo",
            "topic": "Serviços públicos",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Raciocínio Lógico-Matemático",
            "topic": "Tautologia",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-07-16",
        "dayName": "Quinta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Seguridade Social: conceito, organização e princípios constitucionais",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Constitucional",
            "topic": "Direito à vida, liberdade, igualdade, segurança e propriedade",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Ética no Serviço Público",
            "topic": "Código de Ética Profissional do Servidor Público Civil do Poder Executivo Federal",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-07-17",
        "dayName": "Sexta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Administrativo",
            "topic": "Controle e responsabilização da administração",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Língua Portuguesa",
            "topic": "Significação das palavras",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Origem e evolução legislativa da Seguridade Social no Brasil",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-07-18",
        "dayName": "Sábado",
        "type": "review",
        "items": [
          "Revisão de toda a semana com flash cards e anotações particulares",
          "Resolver no mínimo 200 questões dos assuntos estudados na semana",
          "Corrigir os erros e atualizar o caderno de erros",
          "Marcar os assuntos com mais dificuldade para reforço na próxima semana"
        ]
      },
      {
        "date": "2026-07-19",
        "dayName": "Domingo",
        "type": "errors",
        "items": [
          "Mapeamento de erros da semana",
          "Punição: 10 questões por erro cometido"
        ]
      }
    ]
  },
  {
    "week": 17,
    "start": "2026-07-20",
    "end": "2026-07-26",
    "days": [
      {
        "date": "2026-07-20",
        "dayName": "Segunda",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Direito Previdenciário: conceito, fontes e autonomia",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Língua Portuguesa",
            "topic": "Compreensão e interpretação de textos",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Direito Administrativo",
            "topic": "Lei nº 8.429/1992",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-07-21",
        "dayName": "Terça",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Constitucional",
            "topic": "Direitos e garantias fundamentais",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Aplicação das normas previdenciárias",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Informática",
            "topic": "Conceitos básicos de informática",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-07-22",
        "dayName": "Quarta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Língua Portuguesa",
            "topic": "Acentuação gráfica",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Administrativo",
            "topic": "Estado, governo e administração pública",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Raciocínio Lógico-Matemático",
            "topic": "Operação com conjuntos",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-07-23",
        "dayName": "Quinta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "RGPS: visão geral e estrutura",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Constitucional",
            "topic": "Garantias constitucionais individuais",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Ética no Serviço Público",
            "topic": "Decreto nº 1.171/1994",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-07-24",
        "dayName": "Sexta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Administrativo",
            "topic": "Direito administrativo: conceito, fontes e princípios",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Língua Portuguesa",
            "topic": "Pontuação",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Segurados obrigatórios",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-07-25",
        "dayName": "Sábado",
        "type": "review",
        "items": [
          "Revisão de toda a semana com flash cards e anotações particulares",
          "Resolver no mínimo 200 questões dos assuntos estudados na semana",
          "Corrigir os erros e atualizar o caderno de erros",
          "Marcar os assuntos com mais dificuldade para reforço na próxima semana"
        ]
      },
      {
        "date": "2026-07-26",
        "dayName": "Domingo",
        "type": "errors",
        "items": [
          "Mapeamento de erros da semana",
          "Punição: 10 questões por erro cometido"
        ]
      }
    ]
  },
  {
    "week": 18,
    "start": "2026-07-27",
    "end": "2026-08-02",
    "days": [
      {
        "date": "2026-07-27",
        "dayName": "Segunda",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Filiação e inscrição",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Língua Portuguesa",
            "topic": "Concordância nominal e verbal",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Direito Administrativo",
            "topic": "Lei nº 9.784/1999",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-07-28",
        "dayName": "Terça",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Constitucional",
            "topic": "Garantias dos direitos coletivos, sociais e políticos",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Empregado, doméstico, contribuinte individual, avulso e segurado especial",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Informática",
            "topic": "Navegação e correio eletrônico",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-07-29",
        "dayName": "Quarta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Língua Portuguesa",
            "topic": "Redação de correspondências oficiais",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Administrativo",
            "topic": "Organização administrativa da União; administração direta e indireta",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Raciocínio Lógico-Matemático",
            "topic": "Cálculos com porcentagens",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-07-30",
        "dayName": "Quinta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Segurado facultativo",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Constitucional",
            "topic": "Administração pública (arts. 37 a 41)",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Ética no Serviço Público",
            "topic": "Decreto nº 6.029/2007",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-07-31",
        "dayName": "Sexta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Administrativo",
            "topic": "Agentes públicos: espécies, classificação, poderes, deveres e prerrogativas",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Língua Portuguesa",
            "topic": "Tipologia textual",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Trabalhadores excluídos do RGPS",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-08-01",
        "dayName": "Sábado",
        "type": "review",
        "items": [
          "Revisão de toda a semana com flash cards e anotações particulares",
          "Resolver no mínimo 200 questões dos assuntos estudados na semana",
          "Corrigir os erros e atualizar o caderno de erros",
          "Marcar os assuntos com mais dificuldade para reforço na próxima semana"
        ]
      },
      {
        "date": "2026-08-02",
        "dayName": "Domingo",
        "type": "errors",
        "items": [
          "Mapeamento de erros da semana",
          "Punição: 10 questões por erro cometido"
        ]
      }
    ]
  },
  {
    "week": 19,
    "start": "2026-08-03",
    "end": "2026-08-09",
    "days": [
      {
        "date": "2026-08-03",
        "dayName": "Segunda",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Empresa e empregador doméstico: conceito previdenciário",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Língua Portuguesa",
            "topic": "Emprego das classes de palavras",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Direito Administrativo",
            "topic": "Lei nº 8.112/1990: provimento, vacância, remoção, redistribuição e substituição",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-08-04",
        "dayName": "Terça",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Constitucional",
            "topic": "Direitos sociais",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Financiamento da Seguridade Social",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Informática",
            "topic": "Conceitos de Internet e intranet",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-08-05",
        "dayName": "Quarta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Língua Portuguesa",
            "topic": "Emprego do sinal indicativo de crase",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Administrativo",
            "topic": "Lei nº 8.112/1990: direitos e vantagens",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Raciocínio Lógico-Matemático",
            "topic": "Proposições, valores lógicos, sentenças abertas e conectivos",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-08-06",
        "dayName": "Quinta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Receitas da União",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Constitucional",
            "topic": "Nacionalidade",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Ética no Serviço Público",
            "topic": "Código de Ética Profissional do Servidor Público Civil do Poder Executivo Federal",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-08-07",
        "dayName": "Sexta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Administrativo",
            "topic": "Lei nº 8.112/1990: regime disciplinar e responsabilidades",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Língua Portuguesa",
            "topic": "Ortografia oficial",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Receitas das contribuições sociais",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-08-08",
        "dayName": "Sábado",
        "type": "review",
        "items": [
          "Revisão de toda a semana com flash cards e anotações particulares",
          "Resolver no mínimo 200 questões dos assuntos estudados na semana",
          "Corrigir os erros e atualizar o caderno de erros",
          "Marcar os assuntos com mais dificuldade para reforço na próxima semana"
        ]
      },
      {
        "date": "2026-08-09",
        "dayName": "Domingo",
        "type": "errors",
        "items": [
          "Mapeamento de erros da semana",
          "Punição: 10 questões por erro cometido"
        ]
      }
    ]
  },
  {
    "week": 20,
    "start": "2026-08-10",
    "end": "2026-08-16",
    "days": [
      {
        "date": "2026-08-10",
        "dayName": "Segunda",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Salário de contribuição: conceito",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Língua Portuguesa",
            "topic": "Sintaxe da oração e do período",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Direito Administrativo",
            "topic": "Poderes administrativos",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-08-11",
        "dayName": "Terça",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Constitucional",
            "topic": "Cidadania",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Parcelas integrantes e não integrantes",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Informática",
            "topic": "Windows 7 e 10",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-08-12",
        "dayName": "Quarta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Língua Portuguesa",
            "topic": "Regência nominal e verbal",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Administrativo",
            "topic": "Ato administrativo",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Raciocínio Lógico-Matemático",
            "topic": "Proposições simples e compostas",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-08-13",
        "dayName": "Quinta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Limites mínimo e máximo",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Constitucional",
            "topic": "Direito à vida, liberdade, igualdade, segurança e propriedade",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Ética no Serviço Público",
            "topic": "Decreto nº 1.171/1994",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-08-14",
        "dayName": "Sexta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Administrativo",
            "topic": "Serviços públicos",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Língua Portuguesa",
            "topic": "Significação das palavras",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Contribuições inferiores ao salário mínimo e complementação",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-08-15",
        "dayName": "Sábado",
        "type": "review",
        "items": [
          "Revisão de toda a semana com flash cards e anotações particulares",
          "Resolver no mínimo 200 questões dos assuntos estudados na semana",
          "Corrigir os erros e atualizar o caderno de erros",
          "Marcar os assuntos com mais dificuldade para reforço na próxima semana"
        ]
      },
      {
        "date": "2026-08-16",
        "dayName": "Domingo",
        "type": "errors",
        "items": [
          "Mapeamento de erros da semana",
          "Punição: 10 questões por erro cometido"
        ]
      }
    ]
  },
  {
    "week": 21,
    "start": "2026-08-17",
    "end": "2026-08-23",
    "days": [
      {
        "date": "2026-08-17",
        "dayName": "Segunda",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Reajustamento do salário de contribuição",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Língua Portuguesa",
            "topic": "Compreensão e interpretação de textos",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Direito Administrativo",
            "topic": "Controle e responsabilização da administração",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-08-18",
        "dayName": "Terça",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Constitucional",
            "topic": "Direitos e garantias fundamentais",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Arrecadação e recolhimento das contribuições",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Informática",
            "topic": "LibreOffice: edição de textos, planilhas e apresentações",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-08-19",
        "dayName": "Quarta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Língua Portuguesa",
            "topic": "Acentuação gráfica",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Administrativo",
            "topic": "Lei nº 8.429/1992",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Raciocínio Lógico-Matemático",
            "topic": "Número de linhas da tabela-verdade",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-08-20",
        "dayName": "Quinta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Competência do INSS e da Receita Federal",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Constitucional",
            "topic": "Garantias constitucionais individuais",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Ética no Serviço Público",
            "topic": "Decreto nº 6.029/2007",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-08-21",
        "dayName": "Sexta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Administrativo",
            "topic": "Estado, governo e administração pública",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Língua Portuguesa",
            "topic": "Pontuação",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Obrigações da empresa e demais contribuintes",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-08-22",
        "dayName": "Sábado",
        "type": "review",
        "items": [
          "Revisão de toda a semana com flash cards e anotações particulares",
          "Resolver no mínimo 200 questões dos assuntos estudados na semana",
          "Corrigir os erros e atualizar o caderno de erros",
          "Marcar os assuntos com mais dificuldade para reforço na próxima semana"
        ]
      },
      {
        "date": "2026-08-23",
        "dayName": "Domingo",
        "type": "errors",
        "items": [
          "Mapeamento de erros da semana",
          "Punição: 10 questões por erro cometido"
        ]
      }
    ]
  },
  {
    "week": 22,
    "start": "2026-08-24",
    "end": "2026-08-30",
    "days": [
      {
        "date": "2026-08-24",
        "dayName": "Segunda",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Prazo de recolhimento",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Língua Portuguesa",
            "topic": "Concordância nominal e verbal",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Direito Administrativo",
            "topic": "Direito administrativo: conceito, fontes e princípios",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-08-25",
        "dayName": "Terça",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Constitucional",
            "topic": "Garantias dos direitos coletivos, sociais e políticos",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Recolhimento fora do prazo: juros, multa e atualização",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Informática",
            "topic": "Segurança da informação: vírus, worms e derivados",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-08-26",
        "dayName": "Quarta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Língua Portuguesa",
            "topic": "Redação de correspondências oficiais",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Administrativo",
            "topic": "Lei nº 9.784/1999",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Raciocínio Lógico-Matemático",
            "topic": "Tautologia",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-08-27",
        "dayName": "Quinta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Decadência e prescrição",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Constitucional",
            "topic": "Administração pública (arts. 37 a 41)",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Ética no Serviço Público",
            "topic": "Código de Ética Profissional do Servidor Público Civil do Poder Executivo Federal",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-08-28",
        "dayName": "Sexta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Administrativo",
            "topic": "Organização administrativa da União; administração direta e indireta",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Língua Portuguesa",
            "topic": "Tipologia textual",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Crimes contra a seguridade social",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-08-29",
        "dayName": "Sábado",
        "type": "review",
        "items": [
          "Revisão de toda a semana com flash cards e anotações particulares",
          "Resolver no mínimo 200 questões dos assuntos estudados na semana",
          "Corrigir os erros e atualizar o caderno de erros",
          "Marcar os assuntos com mais dificuldade para reforço na próxima semana"
        ]
      },
      {
        "date": "2026-08-30",
        "dayName": "Domingo",
        "type": "errors",
        "items": [
          "Mapeamento de erros da semana",
          "Punição: 10 questões por erro cometido"
        ]
      }
    ]
  },
  {
    "week": 23,
    "start": "2026-08-31",
    "end": "2026-09-06",
    "days": [
      {
        "date": "2026-08-31",
        "dayName": "Segunda",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Recurso das decisões administrativas",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Língua Portuguesa",
            "topic": "Emprego das classes de palavras",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Direito Administrativo",
            "topic": "Agentes públicos: espécies, classificação, poderes, deveres e prerrogativas",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-09-01",
        "dayName": "Terça",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Constitucional",
            "topic": "Direitos sociais",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Plano de Benefícios da Previdência Social",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Informática",
            "topic": "Conceitos básicos de informática",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-09-02",
        "dayName": "Quarta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Língua Portuguesa",
            "topic": "Emprego do sinal indicativo de crase",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Administrativo",
            "topic": "Lei nº 8.112/1990: provimento, vacância, remoção, redistribuição e substituição",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Raciocínio Lógico-Matemático",
            "topic": "Operação com conjuntos",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-09-03",
        "dayName": "Quinta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Carência, salário de benefício e renda mensal",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Constitucional",
            "topic": "Nacionalidade",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Ética no Serviço Público",
            "topic": "Decreto nº 1.171/1994",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-09-04",
        "dayName": "Sexta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Administrativo",
            "topic": "Lei nº 8.112/1990: direitos e vantagens",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Língua Portuguesa",
            "topic": "Ortografia oficial",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Reajustamento do valor dos benefícios",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-09-05",
        "dayName": "Sábado",
        "type": "review",
        "items": [
          "Revisão de toda a semana com flash cards e anotações particulares",
          "Resolver no mínimo 200 questões dos assuntos estudados na semana",
          "Corrigir os erros e atualizar o caderno de erros",
          "Marcar os assuntos com mais dificuldade para reforço na próxima semana"
        ]
      },
      {
        "date": "2026-09-06",
        "dayName": "Domingo",
        "type": "errors",
        "items": [
          "Mapeamento de erros da semana",
          "Punição: 10 questões por erro cometido"
        ]
      }
    ]
  },
  {
    "week": 24,
    "start": "2026-09-07",
    "end": "2026-09-13",
    "days": [
      {
        "date": "2026-09-07",
        "dayName": "Segunda",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Manutenção, perda e restabelecimento da qualidade de segurado",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Língua Portuguesa",
            "topic": "Sintaxe da oração e do período",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Direito Administrativo",
            "topic": "Lei nº 8.112/1990: regime disciplinar e responsabilidades",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-09-08",
        "dayName": "Terça",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Constitucional",
            "topic": "Cidadania",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Serviços previdenciários: serviço social",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Informática",
            "topic": "Navegação e correio eletrônico",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-09-09",
        "dayName": "Quarta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Língua Portuguesa",
            "topic": "Regência nominal e verbal",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Administrativo",
            "topic": "Poderes administrativos",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Raciocínio Lógico-Matemático",
            "topic": "Cálculos com porcentagens",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-09-10",
        "dayName": "Quinta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Reabilitação profissional",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Constitucional",
            "topic": "Direito à vida, liberdade, igualdade, segurança e propriedade",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Ética no Serviço Público",
            "topic": "Decreto nº 6.029/2007",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-09-11",
        "dayName": "Sexta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Administrativo",
            "topic": "Ato administrativo",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Língua Portuguesa",
            "topic": "Significação das palavras",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Benefícios de legislações especiais: Talidomida",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-09-12",
        "dayName": "Sábado",
        "type": "review",
        "items": [
          "Revisão de toda a semana com flash cards e anotações particulares",
          "Resolver no mínimo 200 questões dos assuntos estudados na semana",
          "Corrigir os erros e atualizar o caderno de erros",
          "Marcar os assuntos com mais dificuldade para reforço na próxima semana"
        ]
      },
      {
        "date": "2026-09-13",
        "dayName": "Domingo",
        "type": "errors",
        "items": [
          "Mapeamento de erros da semana",
          "Punição: 10 questões por erro cometido"
        ]
      }
    ]
  },
  {
    "week": 25,
    "start": "2026-09-14",
    "end": "2026-09-20",
    "days": [
      {
        "date": "2026-09-14",
        "dayName": "Segunda",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Benefícios de legislações especiais: Seringueiros",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Língua Portuguesa",
            "topic": "Compreensão e interpretação de textos",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Direito Administrativo",
            "topic": "Serviços públicos",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-09-15",
        "dayName": "Terça",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Constitucional",
            "topic": "Direitos e garantias fundamentais",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Benefícios de legislações especiais: Ex-combatente",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Informática",
            "topic": "Conceitos de Internet e intranet",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-09-16",
        "dayName": "Quarta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Língua Portuguesa",
            "topic": "Acentuação gráfica",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Administrativo",
            "topic": "Controle e responsabilização da administração",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Raciocínio Lógico-Matemático",
            "topic": "Proposições, valores lógicos, sentenças abertas e conectivos",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-09-17",
        "dayName": "Quinta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Benefícios de legislações especiais: Hemodiálise de Caruaru",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Constitucional",
            "topic": "Garantias constitucionais individuais",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Ética no Serviço Público",
            "topic": "Código de Ética Profissional do Servidor Público Civil do Poder Executivo Federal",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-09-18",
        "dayName": "Sexta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Administrativo",
            "topic": "Lei nº 8.429/1992",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Língua Portuguesa",
            "topic": "Pontuação",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Benefícios de legislações especiais: Césio 137",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-09-19",
        "dayName": "Sábado",
        "type": "review",
        "items": [
          "Revisão de toda a semana com flash cards e anotações particulares",
          "Resolver no mínimo 200 questões dos assuntos estudados na semana",
          "Corrigir os erros e atualizar o caderno de erros",
          "Marcar os assuntos com mais dificuldade para reforço na próxima semana"
        ]
      },
      {
        "date": "2026-09-20",
        "dayName": "Domingo",
        "type": "errors",
        "items": [
          "Mapeamento de erros da semana",
          "Punição: 10 questões por erro cometido"
        ]
      }
    ]
  },
  {
    "week": 26,
    "start": "2026-09-21",
    "end": "2026-09-27",
    "days": [
      {
        "date": "2026-09-21",
        "dayName": "Segunda",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Benefícios de legislações especiais: Anistiado político",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Língua Portuguesa",
            "topic": "Concordância nominal e verbal",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Direito Administrativo",
            "topic": "Estado, governo e administração pública",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-09-22",
        "dayName": "Terça",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Constitucional",
            "topic": "Garantias dos direitos coletivos, sociais e políticos",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Benefícios de legislações especiais: Hanseníase",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Informática",
            "topic": "Windows 7 e 10",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-09-23",
        "dayName": "Quarta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Língua Portuguesa",
            "topic": "Redação de correspondências oficiais",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Administrativo",
            "topic": "Direito administrativo: conceito, fontes e princípios",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Raciocínio Lógico-Matemático",
            "topic": "Proposições simples e compostas",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-09-24",
        "dayName": "Quinta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Benefícios de legislações especiais: Síndrome Congênita do Zika Vírus",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Direito Constitucional",
            "topic": "Administração pública (arts. 37 a 41)",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Ética no Serviço Público",
            "topic": "Decreto nº 1.171/1994",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-09-25",
        "dayName": "Sexta",
        "type": "study",
        "blocks": [
          {
            "time": "13:00–14:40",
            "discipline": "Direito Administrativo",
            "topic": "Lei nº 9.784/1999",
            "urgency": "ONU 1",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "14:40–16:20",
            "discipline": "Língua Portuguesa",
            "topic": "Tipologia textual",
            "urgency": "ONU 2",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          },
          {
            "time": "16:20–18:00",
            "discipline": "Direito Previdenciário / Seguridade Social",
            "topic": "Seguro-defeso do pescador artesanal",
            "urgency": "ONU 3",
            "theory": "75 min teoria",
            "practice": "25 min questões"
          }
        ]
      },
      {
        "date": "2026-09-26",
        "dayName": "Sábado",
        "type": "review",
        "items": [
          "Revisão de toda a semana com flash cards e anotações particulares",
          "Resolver no mínimo 200 questões dos assuntos estudados na semana",
          "Corrigir os erros e atualizar o caderno de erros",
          "Marcar os assuntos com mais dificuldade para reforço na próxima semana"
        ]
      },
      {
        "date": "2026-09-27",
        "dayName": "Domingo",
        "type": "errors",
        "items": [
          "Mapeamento de erros da semana",
          "Punição: 10 questões por erro cometido"
        ]
      }
    ]
  }
];

const STORAGE_KEY = "cronograma-inss-prd-react-v1";
const cx = (...classes) => classes.filter(Boolean).join(" ");

const formatDate = (dateStr) => {
  const [y, m, d] = dateStr.split("-");
  return `${d}/${m}/${y}`;
};

const getToday = () => new Date().toISOString().slice(0, 10);

function usePersistentState() {
  const [state, setState] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  return [state, setState];
}

function Metric({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-3">
      <span className="block text-xs font-medium text-slate-400">{label}</span>
      <strong className="mt-2 block text-lg font-black text-white">{value}</strong>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label className="mb-3 block">
      <span className="mb-2 block text-sm font-medium text-slate-300">{label}</span>
      {children}
    </label>
  );
}

export default function App() {
  const [store, setStore] = usePersistentState();
  const [selectedWeek, setSelectedWeek] = useState(1);
  const [disciplineFilter, setDisciplineFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [showPending, setShowPending] = useState(false);

  const disciplines = useMemo(() => {
    const set = new Set();
    scheduleData.forEach((week) => {
      week.days.forEach((day) => {
        if (day.blocks) day.blocks.forEach((block) => set.add(block.discipline));
      });
    });
    return Array.from(set).sort((a, b) => a.localeCompare(b, "pt-BR"));
  }, []);

  const currentWeek = scheduleData.find((week) => week.week === selectedWeek);

  const getCheck = (date, index) => Boolean(store?.checks?.[date]?.[String(index)]);
  const getText = (bucket, key, fallback = "") => store?.[bucket]?.[key] ?? fallback;
  const getWrong = (date) => store?.wrongCount?.[date] ?? "";
  const getSpecial = (date) => Boolean(store?.special?.[date]);

  const updateNested = (bucket, key, value, nestedKey = null) => {
    setStore((prev) => {
      const next = { ...prev };
      if (!next[bucket]) next[bucket] = {};
      if (nestedKey !== null) {
        if (!next[bucket][key]) next[bucket][key] = {};
        next[bucket][key][nestedKey] = value;
      } else {
        next[bucket][key] = value;
      }
      return next;
    });
  };

  const filteredDays = useMemo(() => {
    if (!currentWeek) return [];
    return currentWeek.days.filter((day) => {
      if (!day.blocks) return true;
      const term = searchTerm.trim().toLowerCase();
      const disciplineMatches =
        disciplineFilter === "all" ||
        day.blocks.some((block) => block.discipline === disciplineFilter);
      const termMatches =
        !term ||
        day.blocks.some(
          (block) =>
            block.discipline.toLowerCase().includes(term) ||
            block.topic.toLowerCase().includes(term)
        );
      return disciplineMatches && termMatches;
    });
  }, [currentWeek, disciplineFilter, searchTerm]);

  const summary = useMemo(() => {
    const studyDays = scheduleData.flatMap((week) => week.days).filter((day) => day.type === "study");
    const totalBlocks = studyDays.reduce((acc, day) => acc + day.blocks.length, 0);
    const completedBlocks = studyDays.reduce(
      (acc, day) => acc + day.blocks.filter((_, index) => getCheck(day.date, index)).length,
      0
    );
    const completedDays = studyDays.filter((day) => day.blocks.every((_, index) => getCheck(day.date, index))).length;
    const progress = totalBlocks ? Math.round((completedBlocks / totalBlocks) * 100) : 0;
    return { totalBlocks, completedBlocks, completedDays, progress };
  }, [store]);

  const pendingItems = useMemo(() => {
    const today = getToday();
    const pending = [];
    scheduleData.forEach((week) => {
      week.days.forEach((day) => {
        if (day.type !== "study" || day.date >= today) return;
        day.blocks.forEach((block, index) => {
          if (!getCheck(day.date, index)) {
            pending.push({
              date: day.date,
              dayName: day.dayName,
              discipline: block.discipline,
              topic: block.topic,
              urgency: block.urgency
            });
          }
        });
      });
    });
    return pending;
  }, [store]);

  const currentWeekProgress = useMemo(() => {
    if (!currentWeek) return 0;
    const weekBlocks = currentWeek.days
      .filter((day) => day.blocks)
      .flatMap((day) => day.blocks.map((_, index) => [day.date, index]));
    if (!weekBlocks.length) return 0;
    const done = weekBlocks.filter(([date, index]) => getCheck(date, index)).length;
    return Math.round((done / weekBlocks.length) * 100);
  }, [currentWeek, store]);

  const resetProgress = () => {
    const ok = window.confirm("Isso vai apagar os checkboxes, as anotações e o progresso salvo no navegador. Continuar?");
    if (ok) {
      localStorage.removeItem(STORAGE_KEY);
      window.location.reload();
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto grid min-h-screen max-w-[1700px] grid-cols-1 xl:grid-cols-[360px_minmax(0,1fr)]">
        <aside className="border-b border-white/10 bg-slate-950/80 p-4 backdrop-blur xl:sticky xl:top-0 xl:h-screen xl:overflow-y-auto xl:border-b-0 xl:border-r">
          <div className="mb-4 rounded-3xl border border-indigo-400/20 bg-gradient-to-br from-indigo-500/20 via-violet-500/10 to-slate-900 p-5 shadow-2xl shadow-black/30">
            <div className="mb-4 flex items-center gap-4">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 text-lg font-extrabold tracking-[0.2em] text-white">
                INSS
              </div>
              <div>
                <h1 className="text-xl font-extrabold">Cronograma PRD</h1>
                <p className="text-sm text-slate-300">6 meses · 30/03/2026 a 27/09/2026</p>
              </div>
            </div>
            <p className="text-sm leading-6 text-slate-300">
              Versão React + Tailwind com foco em clareza visual, seleção legível e acompanhamento real do progresso.
            </p>
          </div>

          <section className="mb-4 rounded-3xl border border-white/10 bg-white/5 p-4 shadow-xl shadow-black/20">
            <div className="mb-3 flex items-center gap-2">
              <Target className="h-4 w-4 text-indigo-300" />
              <h2 className="font-semibold">Resumo</h2>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Metric label="Semanas" value={String(scheduleData.length)} />
              <Metric label="Dias concluídos" value={String(summary.completedDays)} />
              <Metric label="Blocos concluídos" value={String(summary.completedBlocks)} />
              <Metric label="Progresso geral" value={`${summary.progress}%`} />
            </div>
          </section>

          <section className="mb-4 rounded-3xl border border-white/10 bg-white/5 p-4 shadow-xl shadow-black/20">
            <div className="mb-3 flex items-center gap-2">
              <Filter className="h-4 w-4 text-indigo-300" />
              <h2 className="font-semibold">Filtros</h2>
            </div>

            <Field label="Semana">
              <div className="relative">
                <CalendarDays className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <select
                  value={selectedWeek}
                  onChange={(e) => setSelectedWeek(Number(e.target.value))}
                  className="w-full appearance-none rounded-2xl border border-slate-700 bg-slate-900 px-10 py-3 text-slate-100 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/40"
                >
                  {scheduleData.map((week) => (
                    <option key={week.week} value={week.week} className="bg-slate-900 text-slate-100">
                      {`Semana ${week.week} · ${formatDate(week.start)} a ${formatDate(week.end)}`}
                    </option>
                  ))}
                </select>
              </div>
            </Field>

            <Field label="Disciplina">
              <div className="relative">
                <BookOpen className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <select
                  value={disciplineFilter}
                  onChange={(e) => setDisciplineFilter(e.target.value)}
                  className="w-full appearance-none rounded-2xl border border-slate-700 bg-slate-900 px-10 py-3 text-slate-100 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/40"
                >
                  <option value="all" className="bg-slate-900 text-slate-100">Todas</option>
                  {disciplines.map((discipline) => (
                    <option key={discipline} value={discipline} className="bg-slate-900 text-slate-100">
                      {discipline}
                    </option>
                  ))}
                </select>
              </div>
            </Field>

            <Field label="Buscar assunto">
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Ex.: benefícios, pontuação..."
                  className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-10 py-3 text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/40"
                />
              </div>
            </Field>

            <div className="mt-4 grid gap-2">
              <button
                onClick={() => setShowPending((v) => !v)}
                className="rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-800"
              >
                {showPending ? "Ocultar pendências" : "Mostrar pendências"}
              </button>
              <button
                onClick={() => {
                  setDisciplineFilter("all");
                  setSearchTerm("");
                }}
                className="rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-950/40 transition hover:translate-y-[-1px]"
              >
                Limpar filtros
              </button>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-xl shadow-black/20">
            <div className="mb-3 flex items-center gap-2">
              <LayoutGrid className="h-4 w-4 text-indigo-300" />
              <h2 className="font-semibold">Estrutura do dia</h2>
            </div>
            <div className="space-y-3 text-sm text-slate-300">
              <p><strong className="text-white">13:00–14:40</strong> · bloco mais urgente (ONU 1)</p>
              <p><strong className="text-white">14:40–16:20</strong> · segundo bloco (ONU 2)</p>
              <p><strong className="text-white">16:20–18:00</strong> · terceiro bloco (ONU 3)</p>
              <p>Distribuição fixa: <strong className="text-white">75% teoria</strong> e <strong className="text-white">25% questões</strong>.</p>
            </div>
          </section>
        </aside>

        <main className="p-4 md:p-6">
          <section className="mb-5 rounded-[28px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 shadow-2xl shadow-black/20">
            <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
              <div>
                <span className="inline-flex rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-1 text-xs font-extrabold tracking-[0.18em] text-indigo-200">
                  PLANEJAMENTO EM REACT
                </span>
                <h2 className="mt-3 text-3xl font-black tracking-tight">Bonito, responsivo e mais claro de usar</h2>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300 md:text-base">
                  Corrigi o problema visual dos campos de seleção usando contraste forte, estado de foco visível,
                  ícones, labels claras e fundo escuro consistente para evitar dropdown branco com texto invisível.
                </p>
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                <button
                  onClick={() => window.print()}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-3 font-bold text-white shadow-lg shadow-indigo-950/40"
                >
                  <Printer className="h-4 w-4" />
                  Imprimir / PDF
                </button>
                <button
                  onClick={resetProgress}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-rose-400/30 bg-rose-500/10 px-4 py-3 font-semibold text-rose-200"
                >
                  <RotateCcw className="h-4 w-4" />
                  Limpar progresso
                </button>
              </div>
            </div>
          </section>

          {showPending && (
            <section className="mb-5 rounded-[28px] border border-amber-400/20 bg-amber-500/5 p-5 shadow-xl shadow-black/20">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <CircleAlert className="h-5 w-5 text-amber-300" />
                  <h3 className="text-lg font-bold">Pendências acumuladas</h3>
                </div>
                <span className="rounded-full border border-amber-300/20 bg-amber-400/10 px-3 py-1 text-sm font-bold text-amber-200">
                  {pendingItems.length} item(ns)
                </span>
              </div>
              <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                {pendingItems.length === 0 ? (
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-4 text-slate-300">
                    Nada pendente. Continue marcando seus blocos concluídos.
                  </div>
                ) : (
                  pendingItems.map((item, idx) => (
                    <article key={`${item.date}-${idx}`} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                      <h4 className="font-bold text-white">{item.discipline}</h4>
                      <p className="mt-1 text-sm text-slate-400">{item.dayName} · {formatDate(item.date)}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{item.topic}</p>
                      <span className="mt-3 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold text-slate-100">
                        {item.urgency}
                      </span>
                    </article>
                  ))
                )}
              </div>
            </section>
          )}

          <section className="mb-5 rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-xl shadow-black/20">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-black">Semana {selectedWeek}</h3>
                <p className="mt-1 text-slate-300">
                  {currentWeek ? `${formatDate(currentWeek.start)} a ${formatDate(currentWeek.end)}` : ""}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-3 w-40 overflow-hidden rounded-full bg-slate-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-indigo-400"
                    style={{ width: `${currentWeekProgress}%` }}
                  />
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-bold text-slate-100">
                  {currentWeekProgress}%
                </span>
              </div>
            </div>
          </section>

          <section className="grid gap-4 lg:grid-cols-2 2xl:grid-cols-3">
            {filteredDays.map((day) => (
              <article key={day.date} className="rounded-[28px] border border-white/10 bg-white/5 p-4 shadow-xl shadow-black/20">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div>
                    <h4 className="text-lg font-bold">{day.dayName}</h4>
                    <p className="text-sm text-slate-400">{formatDate(day.date)}</p>
                  </div>
                  <span
                    className={cx(
                      "rounded-full px-3 py-1 text-xs font-extrabold uppercase tracking-wide",
                      day.type === "study" && "bg-indigo-500/15 text-indigo-200 ring-1 ring-indigo-400/20",
                      day.type === "review" && "bg-amber-500/15 text-amber-200 ring-1 ring-amber-400/20",
                      day.type === "errors" && "bg-rose-500/15 text-rose-200 ring-1 ring-rose-400/20"
                    )}
                  >
                    {day.type === "study" ? "Estudo" : day.type === "review" ? "Revisão" : "Erros"}
                  </span>
                </div>

                {day.type === "study" && (
                  <div className="space-y-4">
                    {day.blocks.map((block, index) => (
                      <div key={index} className="rounded-3xl border border-white/10 bg-slate-900/70 p-4">
                        <div className="mb-3 flex items-center justify-between gap-3">
                          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-bold text-slate-100 ring-1 ring-white/10">
                            <AlarmClock className="h-3.5 w-3.5" />
                            {block.time}
                          </span>
                          <span className="rounded-full bg-indigo-500/15 px-3 py-1 text-xs font-extrabold text-indigo-200 ring-1 ring-indigo-400/20">
                            {block.urgency}
                          </span>
                        </div>
                        <h5 className="text-base font-bold text-white">{block.discipline}</h5>
                        <p className="mt-2 text-sm leading-6 text-slate-300">{block.topic}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-100">
                            {block.theory}
                          </span>
                          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-100">
                            {block.practice}
                          </span>
                        </div>

                        <label className="mt-4 flex cursor-pointer items-start gap-3 rounded-2xl border border-emerald-400/10 bg-emerald-500/5 p-3">
                          <input
                            type="checkbox"
                            checked={getCheck(day.date, index)}
                            onChange={(e) => updateNested("checks", day.date, e.target.checked, String(index))}
                            className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-800 text-emerald-400 focus:ring-emerald-400"
                          />
                          <span className="text-sm leading-6 text-slate-200">
                            Concluir este bloco. Se ficar desmarcado, ele aparece nas pendências.
                          </span>
                        </label>

                        <textarea
                          value={getText("notes", `${day.date}_${index}`)}
                          onChange={(e) => updateNested("notes", `${day.date}_${index}`, e.target.value)}
                          placeholder="Anotações, dúvidas, links e observações..."
                          className="mt-3 min-h-[92px] w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/40"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {day.type === "review" && (
                  <div className="space-y-3">
                    {day.items.map((item, idx) => (
                      <div key={idx} className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 text-sm leading-6 text-slate-200">
                        {item}
                      </div>
                    ))}
                    <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-amber-400/10 bg-amber-500/5 p-3">
                      <input
                        type="checkbox"
                        checked={getSpecial(day.date)}
                        onChange={(e) => updateNested("special", day.date, e.target.checked)}
                        className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-800 text-amber-400 focus:ring-amber-400"
                      />
                      <span className="text-sm leading-6 text-slate-200">Concluir a rotina completa de sábado</span>
                    </label>
                    <textarea
                      value={getText("weeklyNotes", day.date)}
                      onChange={(e) => updateNested("weeklyNotes", day.date, e.target.value)}
                      placeholder="Resumo da revisão, cards criados, principais dificuldades..."
                      className="min-h-[110px] w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/40"
                    />
                  </div>
                )}

                {day.type === "errors" && (
                  <div className="space-y-3">
                    {day.items.map((item, idx) => (
                      <div key={idx} className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 text-sm leading-6 text-slate-200">
                        {item}
                      </div>
                    ))}
                    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                      <label className="mb-2 block text-sm font-semibold text-slate-200">Quantidade de questões erradas</label>
                      <input
                        type="number"
                        min="0"
                        value={getWrong(day.date)}
                        onChange={(e) => updateNested("wrongCount", day.date, e.target.value)}
                        placeholder="Ex.: 12"
                        className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-rose-400 focus:ring-2 focus:ring-rose-500/40"
                      />
                    </div>
                    <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-rose-400/10 bg-rose-500/5 p-3">
                      <input
                        type="checkbox"
                        checked={getSpecial(day.date)}
                        onChange={(e) => updateNested("special", day.date, e.target.checked)}
                        className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-800 text-rose-400 focus:ring-rose-400"
                      />
                      <span className="text-sm leading-6 text-slate-200">Concluir mapeamento de erros e punição</span>
                    </label>
                    <textarea
                      value={getText("errorNotes", day.date)}
                      onChange={(e) => updateNested("errorNotes", day.date, e.target.value)}
                      placeholder="Erros recorrentes, tópicos críticos, plano de reforço..."
                      className="min-h-[110px] w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/40"
                    />
                  </div>
                )}
              </article>
            ))}
          </section>

          <footer className="mt-6 flex items-center gap-2 text-sm text-slate-400">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            Dados salvos no navegador com localStorage.
          </footer>
        </main>
      </div>
    </div>
  );
}