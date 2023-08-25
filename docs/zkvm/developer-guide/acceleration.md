# Cryptography Acceleration
RISC Zero’s rv32im implementation includes a number of specialized extension circuits, including two “accelerators” for cryptographic functions: SHA-256 and [256-bit modular multiplication](https://github.com/risc0/risc0/pull/466), referred to as "bigint" multiplication. By implementing these operations directly in the “hardware” of the zkVM, programs that use these accelerators execute faster and can be proven with significantly less resources [1].

## Accelerated Crates
The SHA-256 and bigint accelerators are currently integrated in "patched" versions of popular cryptographic Rust crates.

These crates include:
- [RustCrypto's BigInt crate](https://github.com/risc0/RustCrypto-crypto-bigint/tree/risc0/use-accel)
- [RustCrypto's SHA2 crate](https://github.com/risc0/RustCrypto-hashes/tree/risc0/sha2-risc0-accel)
- [RustCrypto's k256 crate](https://github.com/risc0/RustCrypto-elliptic-curves/tree/risc0/use-accel/k256)

An example of how to use these crates to accelerate ECDSA signature verification can be in the [ECDSA example](https://github.com/risc0/risc0/tree/main/examples/ecdsa). Note the [use of the patched versions](https://github.com/risc0/risc0/blob/main/examples/ecdsa/methods/guest/Cargo.toml#L17C3-L18) of the k256 and elliptic curve crates used in the guest's `Cargo.toml`.

## Adding Accelerator Support To Crates
It's possible to add accelerator support for your own crates by leveraging the accelerated crates above as Cargo [patches](https://doc.rust-lang.org/cargo/reference/overriding-dependencies.html#the-patch-section).

An example of how to do this can be found in this [diff of the k256](https://github.com/risc0/RustCrypto-elliptic-curves/compare/k256/v0.13.1..risc0/use-accel) crate, which shows the code changes needed to accelerate RustCrypto's ECDSA Library. The notable changes are:
- The patched versions of the [BigInt and SHA2 crates](https://github.com/risc0/RustCrypto-elliptic-curves/compare/k256/v0.13.1..risc0/use-accel#diff-2e9d962a08321605940b5a657135052fbcef87b5e360662bb527c96d9a615542R17-R23)
- The use of the accelerated [risc0 functions](https://github.com/risc0/RustCrypto-elliptic-curves/compare/k256/v0.13.1..risc0/use-accel#diff-ab10e01be1d99a874f90c9a6143bb1c64f37e04dcb220b5ab50b9273d99e0a0cR171) when applicable

---

[^1] This is similar to the cryptography support such as [AES-NI](https://en.wikipedia.org/wiki/AES_instruction_set#x86_architecture_processors) or the [SHA extensions](https://en.wikipedia.org/wiki/Intel_SHA_extensions) for x86 processors. In both cases, the circuitry is extended to compute otherwise expensive operations in fewer instruction cycles.
