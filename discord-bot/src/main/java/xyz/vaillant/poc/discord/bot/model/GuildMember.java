package xyz.vaillant.poc.discord.bot.model;

import discord4j.core.object.entity.Member;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class GuildMember {
    private Long id;
    private String name;
    private String logo;
    private Member member;
}
