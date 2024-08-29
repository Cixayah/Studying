import discord
from discord import app_commands
from discord.ext import commands
import asyncio


class ClearMessages(commands.Cog):
    def __init__(self, bot):
        self.bot = bot
        super().__init__()

    @app_commands.command(name="limpartudo", description="Limpa até 300 mensagens no canal atual")
    async def limpartudo(self, interact: discord.Interaction):
        # Verifica se o ID do usuário que interagiu está na lista de IDs permitidos
        allowed_ids = [270943487300599808, 223614228903231488, 476897909565292544]
        if interact.user.id not in allowed_ids:
            await interact.response.send_message("Você não tem permissão para usar este comando.")
            return

        # Envia uma mensagem de "Apagando..." e a armazena
        message = await interact.response.send_message("Apagando...")

        # Coleta as últimas 300 mensagens no canal
        messages = [msg async for msg in interact.channel.history(limit=300)]

        for msg in messages:
            await msg.delete()
            await asyncio.sleep(3)  # Espera 3 segundos entre cada exclusão

        # Atualiza a mensagem de "Apagando..." para informar que a limpeza foi concluída
        await message.edit(content=f"Até 300 mensagens no canal foram limpas por {interact.user.name}.")
        await asyncio.sleep(5)  # Espera 5 segundos para que a mensagem de conclusão possa ser lida
        await message.delete()  # Remove a mensagem de conclusão


async def setup(bot):
    await bot.add_cog(ClearMessages(bot))
