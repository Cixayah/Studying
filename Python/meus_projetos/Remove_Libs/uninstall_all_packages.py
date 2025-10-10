import subprocess
import pkg_resources

# Listar todos os pacotes instalados globalmente
packages = [dist.project_name for dist in pkg_resources.working_set]

# Desinstalar cada pacote
for package in packages:
    subprocess.check_call(['pip', 'uninstall', '-y', package])
