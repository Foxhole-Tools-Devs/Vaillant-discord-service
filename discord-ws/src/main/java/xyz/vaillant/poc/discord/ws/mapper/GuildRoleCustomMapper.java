package xyz.vaillant.poc.discord.ws.mapper;

import discord4j.core.object.entity.Role;
import xyz.vaillant.poc.discord.core.dto.RoleDCDto;

import java.util.List;

public interface GuildRoleCustomMapper {

    RoleDCDto toRoleDCDto(Role role);

    List<RoleDCDto> toListRoleDCDto(List<Role> roles);
}
