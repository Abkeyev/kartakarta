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

  async getFioByIin(iin: string): Promise<any> {
    return await server.post(
      `/service/g_iin`,
      { iin: iin },
      {
        baseURL: webConfigEnv.GREEN_API,
        headers: {
          "--colvir-user": "COLVIR",
          "--app-id": "1ad040bb-8ae9-453c-ad55-25b2661568f7",
        },
      }
    );
  }
}
