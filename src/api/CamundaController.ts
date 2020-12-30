import { server } from "./axios";

const webConfigEnv = (window as any).env;

export class CamundaController {
  async start(variables: any): Promise<any> {
    return server.post(
      `/process/start`,
      {
        processDefinitionKey: "virtual_kartakarta",
        variables,
      },
      {
        baseURL: webConfigEnv.GREEN_API,
      }
    );
  }
  async callback(variables: any): Promise<any> {
    return server.post(
      `/process/start`,
      {
        processDefinitionKey: "kartakarta_callback",
        variables,
      },
      {
        baseURL: webConfigEnv.GREEN_API,
      }
    );
  }
}
