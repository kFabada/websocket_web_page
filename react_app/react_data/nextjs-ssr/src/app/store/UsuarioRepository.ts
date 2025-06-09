import type{ Usuario } from "@/app/model/Usuario";

export interface Repository {
    getAuthDados():Promise<Usuario>
}