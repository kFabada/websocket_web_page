import type{ Usuario } from "~/model/Usuario";

export interface Repository {
    getAuthDados():Promise<Usuario>
}