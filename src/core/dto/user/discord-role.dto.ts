import { Expose } from "class-transformer";

export class DiscordRoleDto {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  color: string;
}