/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export declare namespace Pairing {
  export type G1PointStruct = {
    X: PromiseOrValue<BigNumberish>;
    Y: PromiseOrValue<BigNumberish>;
  };

  export type G1PointStructOutput = [BigNumber, BigNumber] & {
    X: BigNumber;
    Y: BigNumber;
  };

  export type G2PointStruct = {
    X: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>];
    Y: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>];
  };

  export type G2PointStructOutput = [
    [BigNumber, BigNumber],
    [BigNumber, BigNumber]
  ] & { X: [BigNumber, BigNumber]; Y: [BigNumber, BigNumber] };
}

export declare namespace IVerifier {
  export type ProofStruct = {
    a: Pairing.G1PointStruct;
    b: Pairing.G2PointStruct;
    c: Pairing.G1PointStruct;
  };

  export type ProofStructOutput = [
    Pairing.G1PointStructOutput,
    Pairing.G2PointStructOutput,
    Pairing.G1PointStructOutput
  ] & {
    a: Pairing.G1PointStructOutput;
    b: Pairing.G2PointStructOutput;
    c: Pairing.G1PointStructOutput;
  };
}

export interface ZkBidInterface extends utils.Interface {
  functions: {
    "bid(((uint256,uint256),(uint256[2],uint256[2]),(uint256,uint256)),uint256)": FunctionFragment;
    "bidHashes(address)": FunctionFragment;
    "bidValues(address)": FunctionFragment;
    "biddingEnd()": FunctionFragment;
    "biddingOpen()": FunctionFragment;
    "checkBid(((uint256,uint256),(uint256[2],uint256[2]),(uint256,uint256)),address)": FunctionFragment;
    "endBidding()": FunctionFragment;
    "getUserByIndex(uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "revealBid(((uint256,uint256),(uint256[2],uint256[2]),(uint256,uint256)),uint256)": FunctionFragment;
    "revealed()": FunctionFragment;
    "startBidding()": FunctionFragment;
    "totalUsersBidding()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "verifier()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "bid"
      | "bidHashes"
      | "bidValues"
      | "biddingEnd"
      | "biddingOpen"
      | "checkBid"
      | "endBidding"
      | "getUserByIndex"
      | "owner"
      | "renounceOwnership"
      | "revealBid"
      | "revealed"
      | "startBidding"
      | "totalUsersBidding"
      | "transferOwnership"
      | "verifier"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "bid",
    values: [IVerifier.ProofStruct, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "bidHashes",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "bidValues",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "biddingEnd",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "biddingOpen",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "checkBid",
    values: [IVerifier.ProofStruct, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "endBidding",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getUserByIndex",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "revealBid",
    values: [IVerifier.ProofStruct, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "revealed", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "startBidding",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalUsersBidding",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "verifier", values?: undefined): string;

  decodeFunctionResult(functionFragment: "bid", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "bidHashes", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "bidValues", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "biddingEnd", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "biddingOpen",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "checkBid", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "endBidding", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getUserByIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revealBid", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "revealed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "startBidding",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalUsersBidding",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "verifier", data: BytesLike): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface ZkBid extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ZkBidInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    bid(
      proofBid: IVerifier.ProofStruct,
      hash: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    bidHashes(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    bidValues(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    biddingEnd(overrides?: CallOverrides): Promise<[boolean]>;

    biddingOpen(overrides?: CallOverrides): Promise<[boolean]>;

    checkBid(
      proofBid: IVerifier.ProofStruct,
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    endBidding(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getUserByIndex(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    revealBid(
      proofBid: IVerifier.ProofStruct,
      bidValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    revealed(overrides?: CallOverrides): Promise<[BigNumber]>;

    startBidding(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    totalUsersBidding(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    verifier(overrides?: CallOverrides): Promise<[string]>;
  };

  bid(
    proofBid: IVerifier.ProofStruct,
    hash: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  bidHashes(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  bidValues(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  biddingEnd(overrides?: CallOverrides): Promise<boolean>;

  biddingOpen(overrides?: CallOverrides): Promise<boolean>;

  checkBid(
    proofBid: IVerifier.ProofStruct,
    user: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  endBidding(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getUserByIndex(
    index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  revealBid(
    proofBid: IVerifier.ProofStruct,
    bidValue: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  revealed(overrides?: CallOverrides): Promise<BigNumber>;

  startBidding(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  totalUsersBidding(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  verifier(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    bid(
      proofBid: IVerifier.ProofStruct,
      hash: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    bidHashes(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    bidValues(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    biddingEnd(overrides?: CallOverrides): Promise<boolean>;

    biddingOpen(overrides?: CallOverrides): Promise<boolean>;

    checkBid(
      proofBid: IVerifier.ProofStruct,
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    endBidding(overrides?: CallOverrides): Promise<void>;

    getUserByIndex(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    revealBid(
      proofBid: IVerifier.ProofStruct,
      bidValue: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    revealed(overrides?: CallOverrides): Promise<BigNumber>;

    startBidding(overrides?: CallOverrides): Promise<void>;

    totalUsersBidding(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    verifier(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    bid(
      proofBid: IVerifier.ProofStruct,
      hash: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    bidHashes(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    bidValues(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    biddingEnd(overrides?: CallOverrides): Promise<BigNumber>;

    biddingOpen(overrides?: CallOverrides): Promise<BigNumber>;

    checkBid(
      proofBid: IVerifier.ProofStruct,
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    endBidding(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getUserByIndex(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    revealBid(
      proofBid: IVerifier.ProofStruct,
      bidValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    revealed(overrides?: CallOverrides): Promise<BigNumber>;

    startBidding(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    totalUsersBidding(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    verifier(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    bid(
      proofBid: IVerifier.ProofStruct,
      hash: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    bidHashes(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    bidValues(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    biddingEnd(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    biddingOpen(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    checkBid(
      proofBid: IVerifier.ProofStruct,
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    endBidding(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getUserByIndex(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    revealBid(
      proofBid: IVerifier.ProofStruct,
      bidValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    revealed(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    startBidding(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    totalUsersBidding(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    verifier(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}