import { AutoRestExtension, Channel, Host } from "@azure-tools/autorest-extension-base";
import { processRequest as config } from './config' 


export type LogCallback = (message: string) => void;
export type FileCallback = (path: string, rows: string[]) => void;

export async function initializePlugins(pluginHost: AutoRestExtension) {
    pluginHost.Add('generate', config);
}

export async function configPlugin() {
    const extension = new AutoRestExtension();
    await initializePlugins(extension);
    extension.Run();
}

configPlugin();