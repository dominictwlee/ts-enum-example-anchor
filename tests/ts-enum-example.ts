import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { TsEnumExample } from "../target/types/ts_enum_example";

describe("ts-enum-example", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  const program = anchor.workspace.TsEnumExample as Program<TsEnumExample>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.rpc.initialize("incorrect Arg Type", {
      accounts: { authority: anchor.web3.Keypair.generate().publicKey },
    });
    console.log("Your transaction signature", tx);
  });
});
