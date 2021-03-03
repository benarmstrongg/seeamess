import { SeeamessConfig } from "types";
import fake from '__tmp/fake';

export const getConfig = async () => {
    return new Promise(r => r(fake.projectConfig)) as Promise<SeeamessConfig>;
    // return (await fetch('/config')).json() as Promise<SeeamessConfig>;
}