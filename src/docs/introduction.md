---
title: Introduction
---

# Introduction

Ethereum Classic Labs Core is leading innovation to bring the LLVM ecosystem to the Ethereum family. This is called the EVM-LLVM project. Not only can developers use a large scope of programming languages (Rust for smart contracts!) other than Solidity to target the Ethereum Virtual Machine (EVM), they can also immediately benefit from various development tools built around LLVM infrastructure.

Over the years people rely on Solidity to build DApps on the Ethereum family. It is by far the most popular smart contract programming language that has the most tooling, frameworks, and community around it. However, many DApp developers would tell you their love-hate relationship with Solidity due to its unfamiliarity and immaturity. But let’s be honest, this has not stopped the growth of EVM-based platforms. Ethereum Classic, Ethereum, and other platforms that #RUNEVM are moving forward with Solidity being a fundamental component in their use-cases.
On the other side, here in ETC Labs we initiated an effort to improve the overall situation of the blockchain toolchain. How can we further enhance the developers’ capability to write more interesting and useful DApps? What is the answer to improve DApps’ quality, portability, and lifespan? What should we do to reduce the hassles and chores to write and maintain DApp code? Enter LLVM. With an EVM backend target for LLVM, it lets EVM leverage the benefits of the LLVM ecosystem and exposes EVM interest to the LLVM community.

What is LLVM?

LLVM is a library that is used to construct, optimize and produce intermediate and/or binary machine code. LLVM can be used as a compiler framework, where you provide the “front end” (parser and lexer) and the “back end” (code that converts LLVM’s representation to actual machine code).

So now we have the existing LLVM:

![llvm-infrastructure](https://miro.medium.com/max/638/1*TOhuP9ytSfF7WP5ATHqqyA.png)

And then we are doing…

![evm-backend](https://miro.medium.com/max/832/1*tDR1jyIGhImEV3ktzhHepQ.png)

LLVM supports a variety of front-ends, including Rust, Objective C, Fortran, Ada, Haskell, Java bytecode, Python, Ruby, ActionScript, GLSL, and others. On the other hand, LLVM also allows you to support new target platforms. In this case, we are adding EVM to the family.

What can LLVM bring to EVM and fellow blockchain platforms?

More programming languages. Do you want to code your contract with Rust? Or Golang? or OCaml? Or even some other fancy languages like Haskell? An EVM backend for LLVM makes it finally possible to adopt them for contract programming. Enabling more languages to access the EVM will allow more developers to build DApps on Ethereum Classic as well as other EVM-based blockchains. With more language choice, it’s no doubt that this will be an improvement to the DApp developer experience.

Mature toolchain support. The LLVM ecosystem consists of lots of high-quality tools that help with development, including tools for debugging, validator, static analysis, etc. Take a look at this page.

Future-proof and long-term support. The LLVM community is committed to supporting LLVM project to an extended lifespan, making it one of the most widely accepted toolchain platforms. Similarly, developers who base their development on LLVM-base infrastructure will continue to receive the benefit and support from the LLVM community. In short, the best way to build a future-proof toolchain is to bring the large and mature LLVM ecosystem into Ethereum.

The EVM is the operating system of the Ethereum Platform.
The Ethereum Virtual Machine (EVM) is a stack-based, big-endian VM with a word size of 256-bits and is used to run the smart contracts on EVM based blockchains (ETC, ETH, etc…). Smart contracts run EVM bytecode when receiving a transaction, allowing them to perform computations (transactions). Contracts are executed at the beginning of the bytecode and each opcode is encoded as one byte, except for PUSH opcodes.

Solidity is a high-level programming language that we understand, but machines do not. When we run an Ethereum client such as Geth Classic, Geth, Multi-Geth, or Parity Ethereum, it also comes with the operating system (the EVM) specifically created to run smart contracts.

Soon EVM-LLVM will be ready for alpha tests. Feel free to visit the official EVM-LLVM project repo here [4] for the latest developments. If you would like to collaborate on this project don’t be shy to start contributed or ping Alan Li, our Lead Compiler Engineer, on ETC Labs Discord [5].

Resources:

- http://llvm.org/
- https://stackoverflow.com/questions/2354725/what-exactly-is-llvm/2354750#2354750
- https://stackoverflow.com/a/49081640
- https://github.com/etclabscore/evm_llvm
- https://discord.gg/S9AT3X2