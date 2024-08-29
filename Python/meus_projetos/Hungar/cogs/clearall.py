import discord
from discord import app_commands
from discord.ext import commands

class ClearMessages(commands.Cog):
    def __init__(self, bot):
        self.bot = bot
        super().__init__()

    @app_commands.command(name="limpartudo", description="Limpa até 50 mensagens no canal atual")
    async def limpartudo(self, interact: discord.Interaction):
        # Limpa até 50 mensagens no canal
        await interact.channel.purge(limit=50)
        await interact.response.send_message(
            f"Até 50 mensagens no canal foram limpas por {interact.user.name}.", delete_after=5
        )

async def setup(bot):
    await bot.add_cog(ClearMessages(bot))
