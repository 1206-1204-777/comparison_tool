import csv
from datetime import datetime
import pathlib
import os
import platform

def create_dir(file):
    target_dir = 'milestone_manager/'
    if platform.system() == 'Linux':
        base_path = os.path.join(pathlib.Path.home(), '.local/share/')
    if not os.path.exists(os.path.join(base_path, target_dir)):
        os.mkdir(os.path.join(base_path, target_dir))
    file_path = pathlib.Path(os.path.join(base_path, os.path.join(target_dir, file)))

    return file_path
