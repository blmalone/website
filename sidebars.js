module.exports = {
  GettingStartedSidebar: [
    {
      type: "doc",
      label: "Introduction",
      id: "introduction",
    },
    {
      type: "category",
      label: "Bonsai",
      link: {
        type: `doc`,
        id: 'bonsai/bonsai-overview',
      },
      collapsed: false,
      items: [
        {
          type: "doc",
          label: "Quick Start",
          id: "bonsai/quickstart"
        },
        {
          type: "doc",
          label: "Bonsai on Ethereum",
          id: "bonsai/bonsai-on-eth",
        },
        {
          type: "doc",
          label: "A Blockchain Dev's Guide to zkVM Development",
          id: "bonsai/blockchain-zkvm-guide",
        },
      ],
    },
    {
      type: "category",
      label: "zkVM",
      link: {
        type: `doc`,
        id: 'zkvm/zkvm_overview',
      },
      collapsed: false,
      items: [
        {
          type: "doc",
          label: "Quick Start",
          id: "zkvm/quickstart"
        },
        {
          type: "link",
          label: "API Reference Docs",
          href: "https://docs.rs/risc0-zkvm/"
        },
        {
          type: "doc",
          label: 'The Structure of a zkVM App',
          id: "zkvm/developer-guide/zkvm-app-structure",
        },
        {
          type: "doc",
          label: "Rust Resources",
          id: "zkvm/developer-guide/rust-resources",
        },
        {
          type: "doc",
          label: 'Annotated Guest Code',
          id: "zkvm/developer-guide/annotated-guest-code",
        },
        {
          type: "doc",
          label: 'Annotated Host Code',
          id: "zkvm/developer-guide/annotated-host-code",
        },
        {
          type: "doc",
          label: 'Receipts',
          id: "zkvm/developer-guide/receipts",
        },
        {
          type: "doc",
          label: 'Acceleration',
          id: "zkvm/developer-guide/acceleration",
        },
        {
          type: "doc",
          label: "Performance Benchmarks",
          id: "zkvm/benchmarks"
        },
        {
          type: "category",
          label: "Demo applications",
          collapsed: false,
          items: [
            {
              type: "link",
              label: "Hello World",
              href: "https://github.com/risc0/risc0/tree/v0.17.0/examples/factors"
            },
            {
              type: "link",
              label: "JSON",
              href: "https://github.com/risc0/risc0/tree/v0.17.0/examples/json"
            },
            {
              type: "link",
              label: "zkEVM",
              href: "https://github.com/risc0/risc0/tree/v0.17.0/examples/zkevm-demo"
            },
            {
              type: "link",
              label: "ECDSA Signature",
              href: "https://github.com/risc0/risc0/tree/v0.17.0/examples/ecdsa"
            },
            {
              type: "link",
              label: "Where's Waldo",
              href: "https://github.com/risc0/risc0/tree/v0.17.0/examples/waldo"
            },
          ]
        },
        {
          type: "link",
          label: "Source code",
          href: "https://github.com/risc0/risc0"
        },
      ],
    },
    {
      type: "category",
      label: "Proof System",
      collapsed: false,
      items: [
        {
          type: "doc",
          label: "Overview",
          id: "proof-system/proof-system",
        },
        {
          type: "doc",
          label: "STARK by hand",
          id: "proof-system/stark-by-hand"
        },
        {
          type: "doc",
          label: "Sequence Diagram",
          id: "proof-system/proof-system-sequence-diagram",
        },
        {
          type: "link",
          label: "Proof System Rust Crate",
          href: "https://docs.rs/risc0-zkp/0.16/risc0_zkp/",
        },
        {
          type: "link",
          label: "ZKP Whitepaper",
          href: "https://www.risczero.com/proof-system-in-detail.pdf"
        },
      ],
    },
    {
      type: "category",
      label: "Additional Resources",
      collapsed: false,
      items: [
        {
          type: "link",
          label: "YouTube",
          href: "https://youtube.com/@risczero"
        },
        {
          type: "doc",
          label: "Study Club",
          id: "study-club/studyclub"
        },
        {
          type: "link",
          label: "Education Database",
          href: "https://risczero.notion.site/5a335a1d29b44cb48c44b36ae66f366f?v=95cda72e39d3403fbfb59884afb0045d&pvs=4"
        },
        {
          type: "category",
          label: "Background Reading",
          items: [
            {
              type: "doc",
              label: "Arithmetic Circuits",
              id: "reference-docs/about-arithmetic-circuits"
            },
            {
              type: "doc",
              label: "Finite Fields",
              id: "reference-docs/about-finite-fields"
            },
            {
              type: "doc",
              label: "FRI Protocol",
              id: "reference-docs/about-fri"
            },
            {
              type: "doc",
              label: "PLONK",
              id: "reference-docs/about-plonk"
            },
            {
              type: "doc",
              label: "STARKs",
              id: "reference-docs/about-starks"
            },
            {
              type: "doc",
              label: "Number Theoretic Transforms",
              id: "reference-docs/about-ntts-and-fourier"
            },
            {
              type: "doc",
              label: "RISC-V",
              id: "reference-docs/about-risc-v"
            },
            {
              type: "doc",
              label: "Reed Solomon Codes",
              id: "reference-docs/about-rs-codes"
            }
          ],
        },
      ]
    },
    {
      type: "category",
      label: "Contribute to RISC Zero",
      items: [
        {
          type: "doc",
          label: "Contributor guide",
          id: "contributors-guide"
        },
        {
          type: "link",
          label: "Risc Zero Github",
          href: "https://github.com/risc0/risc0",
        }
      ]
    },
  ],
};
