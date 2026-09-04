<div align="center">

# Pedro Paulo Daris — Portfólio

### Do componente à experiência. Da API ao produto.

Portfólio profissional criado para apresentar minha trajetória, minhas competências e a forma como transformo problemas em produtos digitais completos.

[![React](https://img.shields.io/badge/React-19-151512?style=for-the-badge&logo=react&logoColor=4D7CFE)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-151512?style=for-the-badge&logo=typescript&logoColor=4D7CFE)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8-151512?style=for-the-badge&logo=vite&logoColor=4D7CFE)](https://vite.dev/)

[Projetos](#-projetos-em-destaque) · [Tecnologias](#-tecnologias) · [Como executar](#-como-executar) · [Estrutura](#-estrutura-do-projeto)

</div>

---

## Sobre o projeto

Este portfólio foi pensado como uma experiência editorial e técnica, não apenas como uma lista de tecnologias. Ele reúne projetos selecionados, experiência profissional em produtos de grande escala e os princípios que orientam meu trabalho como desenvolvedor.

Minha especialidade é **Front-end Engineering**, com experiência profissional em **React, Vue.js e TypeScript**, além de atuação Full Stack com **Node.js e NestJS**.

O projeto prioriza:

- identidade visual marcante e responsiva;
- conteúdo direto e orientado a resultados;
- acessibilidade e navegação semântica;
- componentes reutilizáveis;
- dados, apresentação e lógica separados;
- código preparado para manutenção e evolução.

## Projetos em destaque

### Meu Visto Fácil

Plataforma criada para transformar processos de imigração complexos em checklists claros e personalizados. O projeto utiliza uma arquitetura híbrida, combinando IA generativa com validações determinísticas e priorização de fontes oficiais.

**Tecnologias:** React, TypeScript, Firebase, Serverless Functions e Gemini API.

[Acessar repositório](https://github.com/Dariszz/meu-visto-facil)

### Seu Sonho em Linhas

Experiência digital editorial desenvolvida para um escritório de arquitetura. O projeto traduz o processo criativo — do primeiro traço ao espaço construído — por meio de narrativa visual, movimento e componentes reutilizáveis.

**Tecnologias:** React, Vite, CSS responsivo e Lucide React.

[Acessar repositório](https://github.com/Dariszz/projeto-seu-sonho-em-linhas)

## Experiência apresentada

O portfólio reúne parte da minha trajetória em aplicações corporativas para:

- **Vivo:** produtos B2C e B2B, e-commerce, serviços financeiros, perfil e autenticação;
- **Porto:** soluções digitais relacionadas a produtos residenciais;
- **Compass UOL:** início da trajetória profissional com Vue.js e Adobe Experience Manager.

Por questões de confidencialidade, os trabalhos corporativos são descritos sem telas, código, métricas internas ou informações proprietárias.

## Tecnologias

| Área | Tecnologias e práticas |
| --- | --- |
| Front-end | React, Vue.js, TypeScript, JavaScript, HTML, CSS e SCSS |
| Backend | Node.js, NestJS, APIs REST e BFFs |
| Estado e dados | React Query, Vuex, Axios, Firebase e Firestore |
| Arquitetura | Componentização, microfrontends, serverless e feature flags |
| Qualidade | Jest, Cypress, React Testing Library, Vue Test Utils e Stryker |
| Experiência | Responsividade, i18n, WCAG, ARIA, Storybook e design systems |
| Ferramentas | Git, GitHub, Docker, Postman, Vite, Webpack e AEM |

> Java e Python fazem parte do meu repertório acadêmico e de projetos pessoais. Minha experiência profissional em backend está concentrada em Node.js e NestJS.

## Arquitetura do portfólio

O código foi organizado para manter responsabilidades claras:

```text
app/                    Página, layout, metadados e estilos globais
components/
├── layout/             Cabeçalho e rodapé
├── projects/           Apresentação dos projetos
├── sections/           Seções principais da página
└── ui/                 Elementos reutilizáveis de interface
data/                   Conteúdo estruturado do portfólio
hooks/                  Comportamentos e lógica reutilizável
public/                 Imagens e arquivos estáticos
```

As informações recorrentes ficam centralizadas em `data/portfolio.ts`, evitando conteúdo duplicado dentro dos componentes. A lógica de navegação ativa também foi extraída para um hook dedicado.

## Como executar

### Pré-requisitos

- Node.js 22.13 ou superior;
- npm 10 ou superior.

### Instalação

```bash
git clone https://github.com/Dariszz/meu-portfolio.git
cd meu-portfolio
npm install
npm run dev
```

Depois, acesse `http://localhost:3000` no navegador.

### Versão de produção

```bash
npm run build
```

## Direção visual

A identidade combina uma base editorial clara com cores de alto contraste:

- **Ink:** `#151512`
- **Paper:** `#F2F0E9`
- **Brand blue:** `#2458D6`
- **Violet:** `#6D5DFC`

A tipografia expressiva, os grandes espaços e as mudanças de contraste ajudam a separar narrativa, projetos, experiência e contato sem depender de excesso de elementos decorativos.

## Próximos passos

- adicionar links das versões publicadas dos projetos;
- aprofundar os estudos de caso;
- incluir um canal de contato definitivo;
- revisar metadados sociais e SEO;
- publicar o portfólio na Vercel.

---

<div align="center">

Desenvolvido por **Pedro Paulo Daris**.

[GitHub](https://github.com/Dariszz)

</div>
