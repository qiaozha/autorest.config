import { CodeModel, codeModelSchema, Language, Parameter } from "@azure-tools/codemodel";
import { Session, startSession, Host, Channel } from "@azure-tools/autorest-extension-base";


export async function processRequest(host: Host) {
    try {
        const session = await startSession<CodeModel>(host, {}, codeModelSchema);
        let config = await session.getValue("");
        host.WriteFile('autorest_configuration.json', JSON.stringify(config));
    } catch (E) {
        throw E;
    }
}