import { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';
import { InteractionHelper } from '../../utils/interactionHelper.js';
import { createEmbed } from '../../utils/embeds.js';

export default {
    data: new SlashCommandBuilder()
        .setName('premium')
        .setDescription('Learn about Vexora Premium'),

    category: 'Core',

    async execute(interaction) {
        const embed = createEmbed({
            title: '💎 Vexora Premium',
            description:
                '**Upgrade your server with Vexora Premium!**\n\n' +
                '✨ Premium features\n' +
                '⚙️ Advanced customization\n' +
                '📊 More powerful server tools\n' +
                '🎉 Exclusive features\n\n' +
                '**Vexora Premium — $4.99/month**\n\n' +
                'More Premium features are coming soon!'
        });

        const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setLabel('💎 Get Premium')
                .setStyle(ButtonStyle.Link)
                .setURL('YOUR_PAYMENT_LINK_HERE')
        );

        await InteractionHelper.safeReply(interaction, {
            embeds: [embed],
            components: [row]
        });
    },
};
