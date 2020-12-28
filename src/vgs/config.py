
from pathlib import Path
import numpy
import pandas as pd

data_dir_raw = Path('../data')

vgsales = pd.read_csv(data_dir_raw / 'vgsales.csv')


