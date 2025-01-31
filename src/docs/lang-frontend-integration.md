---
title: Language Frontend Integration
---

# Language Frontend Integration

## EVM target specific changes

### Frontend is expected to emit 256bit values LLVM IR 
The EVM architecture is the only 256-bit machine out there in the market, and so far it have not yet received support from LLVM community. We added 256-bit and 160-bit support in the LLVM IR level. 

In order to utilize 256-bit and 160-bit operands, developers are expected to emit `i256` and `i160` data types in their IR code generation. Include the `evm_llvm`'s header files in `include/llvm` folders so that these two pre-defined data types can be properly generated.

### Frontend needs to generate compatible LLVM IR
Notice that development of this backend is based on `LLVM 10.0.dev`, which is the master trunk. We could do back porting to lower versions such as LLVM 9 or LLVM 8 at the request of developers for better stability or compatibility.