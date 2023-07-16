package xyz.vaillant.poc.discord.ws.mapper.implementation;

import discord4j.core.object.entity.Role;
import discord4j.rest.util.Permission;
import discord4j.rest.util.PermissionSet;
import org.springframework.stereotype.Component;
import xyz.vaillant.poc.discord.core.dto.RoleDCDto;
import xyz.vaillant.poc.discord.ws.mapper.GuildRoleCustomMapper;

import java.util.List;

@Component
public class GuildRoleMapperImpl implements GuildRoleCustomMapper {
    @Override
    public RoleDCDto toRoleDCDto(Role role) {
        var rep = new RoleDCDto();

        rep.setName(role.getName());
        rep.setId(role.getId().asLong());
        rep.setAdmin(!role.getPermissions().and(PermissionSet.of(Permission.ADMINISTRATOR)).isEmpty());
        rep.setColor(role.getColor().getRGB());

        return rep;
    }

    @Override
    public List<RoleDCDto> toListRoleDCDto(List<Role> roles) {
        return roles.stream().map(this::toRoleDCDto).toList();
    }
}
