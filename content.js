// ─────────────────────────────────────────────────────────────────────────────
// OpenSense Giveth — bilingual content + campaign stats
// Edit this file to update copy, stats, and the donation link.
// ─────────────────────────────────────────────────────────────────────────────

window.OS_CONTENT = {
  // Donation link — update if the round/project URL changes.
  donationUrl: "https://qf.giveth.io/project/opensense-open-web3-security?roundId=16",
  links: {
    youtube: "https://www.youtube.com/@opensensepw",
    youtubeVideos: "https://www.youtube.com/@opensensepw",
    twitter: "https://x.com/opensensepw",
  },

  // Featured videos — order = display order in carousel
  videos: [
    { slug: "milotruck",  image: "milotruck",      title: "Web3 Security Contests with Milotruck",          views: "21k", duration: "1:24:05", url: "https://www.youtube.com/watch?v=DySpPB3079k" },
    { slug: "dacian",     image: "dacian_f",       title: "How To Effectively Learn Smart-Contract Auditing", views: "15k", duration: "58:45",   url: "https://www.youtube.com/watch?v=5a2sEGWi7c4" },
    { slug: "0xweiss",    image: "0xweiss_f",      title: "Smart Contract Auditing with 0xWeiss",            views: "11k", duration: "1:14:20", url: "https://www.youtube.com/@opensensepw/videos" },
    { slug: "vnmartinez", image: "vnmartinez_f",   title: "EVM Low Level Vulnerabilities",                   views: "1.4k",duration: "46:11",   url: "https://www.youtube.com/watch?v=13YQZ9E05tQ" },
    { slug: "0x52",       image: "0x52_f",         title: "Ask Me Anything with 0x52",                       views: "1.5k",duration: "9:02",    url: "https://www.youtube.com/watch?v=9UVN4hnh9cc" },
    { slug: "pwning",     image: "pwning_f",       title: "Ask Me Anything with Pwning.eth",                 views: "1k",  duration: "7:22",    url: "https://www.youtube.com/watch?v=wPNW91jftIE" },
    { slug: "austin",     image: "austin_f",       title: "Mis4nthr0pic Interviews Austin Griffith",         views: "306", duration: "43:32",   url: "https://www.youtube.com/watch?v=xG9K6h9Re58" },
  ],

  // Campaign stats — update these numbers manually as the campaign progresses.
  stats: {
    raisedUsd: 245,             // displayed as "$245+"
    contributors: 32,           // displayed as "32+"
    goalDonors: 100,
    youtubeSubscribers: 36851,
    watchHours: 11000,
    suggestedRange: "$1–$10",
  },

  // ───────────────────────── EN ─────────────────────────
  en: {
    nav: {
      home: "Home",
      guide: "How to donate",
      lang: "PT-BR",
    },
    hero: {
      eyebrow: "Ethereum Security Fund · Giveth Round",
      title: "Help OpenSense Get Matched",
      subtitle:
        "A verified $1-$10 donation already helps support free Web3 security education. If you feel like giving more, thank you — but checking eligibility first matters most.",
      ctaPrimary: "Donate on Giveth",
      ctaSecondary: "See the guide",
      checkFirst: "Check eligibility before donating",
    },
    status: {
      title: "Where we are right now",
      raised: "raised so far",
      contributors: "contributors",
      goal: "verified donors goal",
      suggested: "easy donation range",
      suggestedHint: "$1-$10 is great — more is optional",
      manualNote: "These numbers are updated manually during the campaign.",
    },
    why: {
      kicker: "Why this matters",
      title: "Free Web3 security education, made openly.",
      body:
        "OpenSense produces free Web3 security education for auditors, developers, researchers, and builders. Funding helps continue producing content, improve editing and distribution, and create more hands-on security education and community experiences.",
      author: "By Alexandre Melo",
      stats: [
        { n: "36,851", l: "YouTube subscribers" },
        { n: "11,000+", l: "lifetime watch hours" },
        { n: "Free", l: "to watch, forever" },
      ],
      topicsLabel: "Topics covered",
      topics: [
        "Smart contract auditing",
        "Exploit analysis",
        "EVM internals",
        "Fuzzing",
        "Formal verification",
        "ZK",
        "Account abstraction",
        "MEV",
        "Vaults",
        "Oracles",
        "Protocol design",
      ],
    },
    videos: {
      kicker: "Some of our work",
      title: "Free education from the people building Web3.",
      sub: "A small selection of conversations and lessons from the OpenSense channel. Audits, exploits, EVM internals, and more.",
      cta: "Watch on YouTube",
      ctaSub: "all videos · @opensensepw",
      views: "views",
    },
    qf: {
      kicker: "Why $1 matters",
      title: "Quadratic Funding rewards real people, not big wallets.",
      body:
        "This round uses Quadratic Funding. Projects supported by many real people can receive more matching from the pool. A $1 donation from a verified wallet can matter much more than it looks.",
      emphasis:
        "It is not only about the amount. It is about real people proving the project has community support.",
      caveat:
        "Matching is not guaranteed. Final matching depends on Giveth's calculation, Passport eligibility, sybil checks, cluster analysis, and round caps.",
      diagram: {
        without: "Without Passport",
        withTitle: "With verified wallet",
        you: "You give $1",
        match: "Round may match more",
      },
    },
    round: {
      kicker: "About the round",
      title: "Where the matching pool comes from",
      lede: "OpenSense is in the Ethereum Security Fund round on Giveth — a quadratic-funding round backed by TheDAO Security Fund.",
      body: "TheDAO Security Fund reactivates 75,000+ ETH of unclaimed assets from the original 2016 DAO recovery and stakes them to generate yield (~$8M/year) that funds Ethereum security work — audits, tooling, vulnerability research, and rapid response. Yield is distributed via community-driven QF rounds like this one.",
      stats: [
        { n: "75,000+", l: "ETH endowment" },
        { n: "~$8M", l: "projected annual yield" },
        { n: "QF + RPGF", l: "allocation mechanisms" },
      ],
      curatorsLabel: "Curators",
      curators: "Vitalik Buterin · Taylor Monahan · Jordi Baylina · pcaversaccio · Alex Van de Sande · Griff Green · Pol Lanski",
      footnote: "Your verified $1 helps OpenSense earn a slice of that pool. Real donors signal real community.",
      cta: "Read about TheDAO Security Fund",
      ctaUrl: "https://www.thedao.fund/",
    },
    steps: {
      kicker: "Step-by-step",
      title: "How to make your donation count",
      subtitle:
        "Following the order matters. The eligibility check has to happen before you donate.",
      list: [
        {
          title: "Check eligibility first",
          text: "Open the OpenSense Giveth page and **click Check eligibility** before donating.",
          caption: "Click Check eligibility before donating.",
          image: "check-eligibility",
          highlight: "Check eligibility",
        },
        {
          title: "Go to Passport",
          text: "**Click Go to Passport** to start the wallet verification.",
          caption: "Go to Passport to verify your wallet.",
          image: "go-to-passport",
          highlight: "Go to Passport",
        },
        {
          title: "Connect your real wallet",
          text: "Use a wallet you actually use. A wallet with real transaction history is better than a new empty wallet.",
          caption: "Connect a wallet you actually use.",
          image: "passport-wallet",
          highlight: "Connect wallet",
        },
        {
          title: "Return and refresh your score",
          text: "After completing Passport, return to Giveth. **Click Refresh Score** until you see the green badge: *\"Your donations are eligible to be matched!\"*",
          caption: "Wait for the green eligibility badge.",
          image: "refresh-score",
          highlight: "Refresh Score",
        },
        {
          title: "Choose amount and add to cart",
          text: "Choose $1, $2, $5, or $10. You can enter more only if you want. Then **click Add to Cart**.",
          caption: "Choose your amount and click Add to Cart.",
          image: "add-to-cart",
          highlight: "Add to Cart",
        },
        {
          title: "Finish donation from cart",
          text: "Open the cart, review the donation, and **click Donate Now** to confirm in your wallet.",
          caption: "Confirm the donation in your wallet.",
          image: "checkout",
          highlight: "Donate Now",
        },
        {
          title: "You're a giver now!",
          text: "You'll see a confirmation page with your donation summary. **Thank you for supporting OpenSense.**",
          caption: "Donation successful — thank you!",
          image: "success",
          highlight: "Success",
        },
      ],
      shareTip: "Optional: share with one friend after you donate.",
    },
    warning: {
      title: "Read this before you donate",
      points: [
        "If you skip Check eligibility, Passport, or Refresh score, your donation may not count for matching.",
        "Do not create fake wallets or split donations across wallets. The round has sybil and cluster checks.",
        "Use a wallet you actually use, ideally one with real transaction history.",
      ],
    },
    faq: {
      kicker: "FAQ",
      title: "Common questions",
      items: [
        {
          q: "Do I need to donate a lot?",
          a: "No. $1, $2, $5, or $10 already helps. More is welcome, but unique verified donors matter a lot.",
        },
        {
          q: "What is Giveth Passport?",
          a: "It is the eligibility check used by Giveth to verify that your wallet looks like a real human wallet. This helps the donation count for matching.",
        },
        {
          q: "Should I check eligibility before or after donating?",
          a: "Before donating. Click Check eligibility, then Go to Passport, complete the check, refresh your score if needed, then donate.",
        },
        {
          q: "Why do I need to refresh my score?",
          a: "After Passport, Giveth may need to update your eligibility status. Clicking Refresh score helps the page recognize that your wallet is eligible.",
        },
        {
          q: "What is Add to Cart?",
          a: "On Giveth, donations are added to a cart before checkout. After choosing the amount, click Add to Cart, then open the cart and complete the donation.",
        },
        {
          q: "Can I donate from a new wallet?",
          a: "It is better to use a wallet you actually use, with real transaction history. New empty wallets are more likely to fail anti-sybil checks.",
        },
        {
          q: "Is matching guaranteed?",
          a: "No. Matching estimates can change. Final matching is calculated after the round ends and after eligibility and anti-sybil checks.",
        },
        {
          q: "What does OpenSense do?",
          a: "OpenSense creates free Web3 security education covering smart contract auditing, exploits, EVM internals, ZK, MEV, account abstraction, formal verification, fuzzing, and protocol security.",
        },
        {
          q: "What is the Ethereum Security Fund round?",
          a: "It's a Giveth quadratic-funding round backed by TheDAO Security Fund — a 75,000+ ETH endowment built from unclaimed assets of the original 2016 DAO recovery. Staking yield (~$8M/year) is distributed to projects that improve Ethereum security. Curators include Vitalik Buterin, Taylor Monahan, Griff Green, Alex Van de Sande, Jordi Baylina, pcaversaccio, and Pol Lanski.",
        },
      ],
    },
    share: {
      kicker: "Share",
      title: "Your $1 helps. One friend helps even more.",
      body:
        "Quadratic Funding rewards breadth. After you donate, sending this to one person can matter more than increasing your own amount.",
      message:
        "OpenSense is participating in the Ethereum Security Fund round on Giveth. Even $1 helps if you check eligibility first. Please support here: https://qf.giveth.io/project/opensense-open-web3-security?roundId=16",
      copy: "Copy message",
      copied: "Copied!",
      twitter: "Share on X",
      telegram: "Telegram",
      whatsapp: "WhatsApp",
      discord: "Copy for Discord",
    },
    footer: {
      mission:
        "OpenSense exists to make Web3 security knowledge more open and accessible.",
      builtBy: "Built by Alexandre Melo",
      donateNow: "Donate now",
    },
    guide: {
      eyebrow: "Donation Guide",
      title: "How to donate to OpenSense the right way",
      subtitle:
        "A detailed walkthrough. If you only have a minute, jump to the steps.",
      back: "← Back home",
      jumpTo: "Jump to steps",
      tldr: {
        title: "TL;DR",
        items: [
          "Open the Giveth page.",
          "Click Check eligibility, then Go to Passport.",
          "Connect a wallet you actually use, complete Passport.",
          "Return to Giveth, click Refresh score.",
          "Choose $1–$10, Add to Cart, finish checkout.",
        ],
      },
      stepsTitle: "Detailed steps",
      stillStuck: {
        title: "Still stuck?",
        body:
          "Try a different browser, disable wallet extensions you do not use, and make sure you are using the wallet that has your real transaction history.",
      },
    },
  },

  // ───────────────────────── PT-BR ─────────────────────────
  pt: {
    nav: {
      home: "Início",
      guide: "Como doar",
      lang: "EN",
    },
    hero: {
      eyebrow: "Ethereum Security Fund · Rodada no Giveth",
      title: "Ajude o OpenSense a Receber Matching",
      subtitle:
        "Uma doação verificada de $1-$10 já ajuda a apoiar educação gratuita de segurança Web3. Se quiser doar mais, obrigado — mas verificar a elegibilidade primeiro é o mais importante.",
      ctaPrimary: "Doar no Giveth",
      ctaSecondary: "Ver o guia",
      checkFirst: "Verifique a elegibilidade antes de doar",
    },
    status: {
      title: "Onde estamos agora",
      raised: "arrecadados",
      contributors: "contribuidores",
      goal: "meta de doadores verificados",
      suggested: "faixa tranquila",
      suggestedHint: "$1-$10 já é ótimo — mais é opcional",
      manualNote:
        "Esses números são atualizados manualmente durante a campanha.",
    },
    why: {
      kicker: "Por que isso importa",
      title: "Educação gratuita de segurança Web3, feita de forma aberta.",
      body:
        "O OpenSense produz educação gratuita sobre segurança Web3 para auditores, desenvolvedores, pesquisadores e builders. O financiamento ajuda a continuar produzindo conteúdo, melhorar edição e distribuição, e criar experiências mais práticas de educação e comunidade.",
      author: "Por Alexandre Melo",
      stats: [
        { n: "36.851", l: "inscritos no YouTube" },
        { n: "11.000+", l: "horas assistidas" },
        { n: "Grátis", l: "para sempre" },
      ],
      topicsLabel: "Tópicos cobertos",
      topics: [
        "Auditoria de smart contracts",
        "Análise de exploits",
        "EVM internals",
        "Fuzzing",
        "Formal verification",
        "ZK",
        "Account abstraction",
        "MEV",
        "Vaults",
        "Oráculos",
        "Design de protocolos",
      ],
    },
    videos: {
      kicker: "Alguns dos nossos trabalhos",
      title: "Educação gratuita feita por quem constrói Web3.",
      sub: "Uma pequena seleção de conversas e aulas do canal OpenSense. Auditorias, exploits, internals da EVM, e mais.",
      cta: "Assistir no YouTube",
      ctaSub: "todos os vídeos · @opensensepw",
      views: "visualizações",
    },
    qf: {
      kicker: "Por que $1 importa",
      title: "Quadratic Funding recompensa pessoas reais, não wallets grandes.",
      body:
        "Essa rodada usa Quadratic Funding. Projetos apoiados por muitas pessoas reais podem receber mais matching do pool. Uma doação de $1 feita por uma wallet verificada pode valer muito mais do que parece.",
      emphasis:
        "Não é só sobre o valor. É sobre pessoas reais mostrando que o projeto tem apoio da comunidade.",
      caveat:
        "O matching não é garantido. O cálculo final depende do Giveth, da elegibilidade no Passport, checagens anti-sybil, análise de clusters e limites da rodada.",
      diagram: {
        without: "Sem Passport",
        withTitle: "Com wallet verificada",
        you: "Você dá $1",
        match: "A rodada pode somar mais",
      },
    },
    round: {
      kicker: "Sobre a rodada",
      title: "De onde vem o pool de matching",
      lede: "O OpenSense está na rodada Ethereum Security Fund no Giveth — uma rodada de quadratic funding bancada pelo TheDAO Security Fund.",
      body: "O TheDAO Security Fund reativa 75.000+ ETH de ativos não reclamados da recuperação original do DAO de 2016 e os deixa em staking para gerar yield (~$8M por ano) que financia segurança em Ethereum — auditorias, ferramentas, pesquisa de vulnerabilidades e resposta rápida. O yield é distribuído via rodadas QF dirigidas pela comunidade, como esta.",
      stats: [
        { n: "75.000+", l: "ETH no endowment" },
        { n: "~$8M", l: "yield anual projetado" },
        { n: "QF + RPGF", l: "mecanismos de alocação" },
      ],
      curatorsLabel: "Curadores",
      curators: "Vitalik Buterin · Taylor Monahan · Jordi Baylina · pcaversaccio · Alex Van de Sande · Griff Green · Pol Lanski",
      footnote: "Seu $1 verificado ajuda o OpenSense a conquistar uma fatia desse pool. Doadores reais sinalizam comunidade real.",
      cta: "Saiba mais sobre o TheDAO Security Fund",
      ctaUrl: "https://www.thedao.fund/",
    },
    steps: {
      kicker: "Passo a passo",
      title: "Como fazer sua doação contar",
      subtitle:
        "A ordem importa. A verificação de elegibilidade precisa acontecer antes da doação.",
      list: [
        {
          title: "Verifique a elegibilidade primeiro",
          text: "Abra a página do OpenSense no Giveth e **clique em Check eligibility** antes de doar.",
          caption: "Clique em Check eligibility antes de doar.",
          image: "check-eligibility",
          highlight: "Check eligibility",
        },
        {
          title: "Vá para o Passport",
          text: "**Clique em Go to Passport** para começar a verificação da wallet.",
          caption: "Vá para o Passport para verificar sua wallet.",
          image: "go-to-passport",
          highlight: "Go to Passport",
        },
        {
          title: "Conecte sua wallet real",
          text: "Use uma wallet que você realmente usa. Uma wallet com histórico real de transações é melhor do que uma wallet nova e vazia.",
          caption: "Conecte uma wallet que você realmente usa.",
          image: "passport-wallet",
          highlight: "Conectar wallet",
        },
        {
          title: "Volte e atualize seu score",
          text: "Depois de completar o Passport, volte para o Giveth. **Clique em Refresh Score** até aparecer o selo verde: *\"Your donations are eligible to be matched!\"*",
          caption: "Espere o selo verde de elegibilidade.",
          image: "refresh-score",
          highlight: "Refresh Score",
        },
        {
          title: "Escolha o valor e adicione ao carrinho",
          text: "Escolha $1, $2, $5 ou $10. Você pode colocar mais só se quiser. Depois **clique em Add to Cart**.",
          caption: "Escolha o valor e clique em Add to Cart.",
          image: "add-to-cart",
          highlight: "Add to Cart",
        },
        {
          title: "Finalize a doação pelo carrinho",
          text: "Abra o carrinho, revise a doação e **clique em Donate Now** para confirmar na wallet.",
          caption: "Confirme a doação na wallet.",
          image: "checkout",
          highlight: "Donate Now",
        },
        {
          title: "Você é um doador agora!",
          text: "Você verá uma página de confirmação com o resumo da doação. **Obrigado por apoiar o OpenSense.**",
          caption: "Doação concluída — obrigado!",
          image: "success",
          highlight: "Sucesso",
        },
      ],
      shareTip: "Opcional: depois de doar, compartilhe com um amigo.",
    },
    warning: {
      title: "Leia antes de doar",
      points: [
        "Se você pular Check eligibility, Passport ou Refresh score, sua doação pode não contar para o matching.",
        "Não crie wallets falsas nem divida doações entre várias wallets. A rodada tem checagens contra sybil e clusters.",
        "Use uma wallet que você realmente usa, de preferência com histórico real de transações.",
      ],
    },
    faq: {
      kicker: "FAQ",
      title: "Perguntas frequentes",
      items: [
        {
          q: "Preciso doar muito?",
          a: "Não. $1, $2, $5 ou $10 já ajudam. Mais também é bem-vindo, mas doadores únicos verificados contam muito.",
        },
        {
          q: "O que é o Giveth Passport?",
          a: "É a verificação de elegibilidade usada pelo Giveth para confirmar que sua wallet parece ser de uma pessoa real. Isso ajuda a doação a contar para o matching.",
        },
        {
          q: "Devo verificar a elegibilidade antes ou depois de doar?",
          a: "Antes de doar. Clique em Check eligibility, depois em Go to Passport, complete a verificação, atualize o score se necessário e só então doe.",
        },
        {
          q: "Por que preciso atualizar o score?",
          a: "Depois do Passport, o Giveth pode precisar atualizar seu status de elegibilidade. Clicar em Refresh score ajuda a página a reconhecer que sua wallet está elegível.",
        },
        {
          q: "O que é Add to Cart?",
          a: "No Giveth, as doações são adicionadas a um carrinho antes do checkout. Depois de escolher o valor, clique em Add to Cart, abra o carrinho e finalize a doação.",
        },
        {
          q: "Posso doar de uma wallet nova?",
          a: "É melhor usar uma wallet que você realmente usa, com histórico real de transações. Wallets novas e vazias têm mais chance de falhar nas checagens anti-sybil.",
        },
        {
          q: "O matching é garantido?",
          a: "Não. As estimativas de matching podem mudar. O matching final é calculado depois que a rodada termina e após checagens de elegibilidade e anti-sybil.",
        },
        {
          q: "O que o OpenSense faz?",
          a: "O OpenSense cria educação gratuita sobre segurança Web3 cobrindo auditoria de smart contracts, exploits, EVM internals, ZK, MEV, account abstraction, formal verification, fuzzing e segurança de protocolos.",
        },
        {
          q: "O que é a rodada Ethereum Security Fund?",
          a: "É uma rodada de quadratic funding no Giveth bancada pelo TheDAO Security Fund — um endowment de 75.000+ ETH formado por ativos não reclamados da recuperação original do DAO de 2016. O yield do staking (~$8M/ano) é distribuído para projetos que melhoram a segurança do Ethereum. Os curadores incluem Vitalik Buterin, Taylor Monahan, Griff Green, Alex Van de Sande, Jordi Baylina, pcaversaccio e Pol Lanski.",
        },
      ],
    },
    share: {
      kicker: "Compartilhar",
      title: "Seu $1 ajuda. Um amigo ajuda ainda mais.",
      body:
        "Quadratic Funding recompensa amplitude. Depois de doar, mandar isso para uma pessoa pode importar mais do que aumentar sua própria doação.",
      message:
        "O OpenSense está participando da rodada Ethereum Security Fund no Giveth. Até $1 ajuda se você verificar a elegibilidade primeiro. Apoie aqui: https://qf.giveth.io/project/opensense-open-web3-security?roundId=16",
      copy: "Copiar mensagem",
      copied: "Copiado!",
      twitter: "Compartilhar no X",
      telegram: "Telegram",
      whatsapp: "WhatsApp",
      discord: "Copiar para Discord",
    },
    footer: {
      mission:
        "O OpenSense existe para tornar o conhecimento de segurança Web3 mais aberto e acessível.",
      builtBy: "Feito por Alexandre Melo",
      donateNow: "Doar agora",
    },
    guide: {
      eyebrow: "Guia de Doação",
      title: "Como doar para o OpenSense da forma certa",
      subtitle:
        "Um passo a passo detalhado. Se você só tem um minuto, vá direto para os passos.",
      back: "← Voltar para o início",
      jumpTo: "Ir para os passos",
      tldr: {
        title: "Resumo rápido",
        items: [
          "Abra a página do Giveth.",
          "Clique em Check eligibility, depois em Go to Passport.",
          "Conecte uma wallet que você realmente usa, complete o Passport.",
          "Volte ao Giveth, clique em Refresh score.",
          "Escolha $1–$10, Add to Cart, finalize o checkout.",
        ],
      },
      stepsTitle: "Passos detalhados",
      stillStuck: {
        title: "Ainda travado?",
        body:
          "Tente outro navegador, desabilite extensões de wallet que você não usa e confirme que está usando a wallet com seu histórico real de transações.",
      },
    },
  },
};
