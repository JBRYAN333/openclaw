import { r as createLegacyPrivateNetworkDoctorContract } from "./ssrf-policy-Da3EPITx.js";
import "./ssrf-runtime-Dth-2BO1.js";
//#region extensions/tlon/src/doctor-contract.ts
const contract = createLegacyPrivateNetworkDoctorContract({ channelKey: "tlon" });
const legacyConfigRules = contract.legacyConfigRules;
const normalizeCompatibilityConfig = contract.normalizeCompatibilityConfig;
//#endregion
export { normalizeCompatibilityConfig as n, legacyConfigRules as t };
