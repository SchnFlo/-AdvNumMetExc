Search.setIndex({"docnames": ["Aufgabe1", "Aufgabe2", "Aufgabe3", "Aufgabe4", "References", "intro"], "filenames": ["Aufgabe1.ipynb", "Aufgabe2.ipynb", "Aufgabe3.ipynb", "Aufgabe4.ipynb", "References.ipynb", "intro.md"], "titles": ["Exercise 1 - Heat Conduction with multiple layers and variable properties", "Exercise 2 - Conduction and Convection with RC-Networks", "Exercise 4 - Coupled Simulation of latent heat effects", "Exercise 4 - Integration of liquid water transport", "References", "Introduction"], "terms": {"florian": [0, 1, 2, 4, 5], "schnabel": [0, 1, 2, 4, 5], "11807470": [0, 1, 2, 4, 5], "ss": [0, 1, 2, 4], "2023": [0, 1, 2, 4], "thi": [0, 1, 2, 3, 5], "script": [0, 1, 2, 3], "aim": [0, 1, 2], "calcul": [3, 4], "temperatur": 4, "field": [], "across": [0, 2, 3], "multilay": [], "The": [0, 1, 2, 3], "can": [0, 1, 2, 3], "have": [0, 2, 3], "an": [1, 2, 3], "arbitrari": 1, "number": [0, 1, 2, 3], "vari": 0, "properti": [], "furthermor": [], "thick": [0, 2, 3], "d": [0, 1, 3], "mai": [], "chang": [], "well": [], "chosen": [], "finit": [0, 2, 3], "volum": [0, 2, 3], "us": [0, 1, 2, 3], "domain": 0, "To": [0, 1, 2, 3], "allow": [0, 2, 3], "solut": 0, "problem": [0, 2, 3], "partial": [0, 3], "differenti": 0, "equat": [0, 1], "heat": [1, 4], "conduct": [], "need": [], "discretis": [], "rho": [0, 2, 3], "cdot": [0, 1, 2, 3], "c": [0, 1, 2, 3], "frac": [0, 2, 3], "dt": [0, 2, 3], "nabla": [0, 2, 3], "lambda": [0, 2, 3], "t": [0, 1, 2, 3], "reduc": [0, 2, 3], "one": 0, "dimens": 0, "begin": [0, 1, 2], "dx": 0, "end": [0, 1, 2], "temperaturefield": [0, 2, 3], "cell": [0, 1, 2, 3], "cunduct": [], "between": [0, 1, 2, 3], "them": [0, 2], "ar": [0, 2, 3], "repres": 0, "rc": [0, 2, 3], "network": [0, 2, 3], "each": [0, 2, 3], "resist": [0, 2], "neighbor": [], "interrior": 0, "follow": [0, 1, 2, 3], "For": [0, 1], "sake": [], "simplic": 0, "surfac": [0, 2, 3, 4], "neglect": 0, "r_": [0, 2, 3], "ci": 0, "0": [0, 1, 2, 3], "k_": [0, 1, 2, 3], "i": [0, 1, 2, 3], "5": [0, 1, 2, 3], "delta": [0, 2, 3], "x_": 0, "lambda_": [0, 3], "insid": [0, 1], "neighbour": 0, "collaps": 0, "And": [0, 2], "bc": [0, 2], "s": [0, 1, 2, 3], "explicit": 0, "euler": 0, "sheme": 0, "next": 0, "timestep": [], "text": [0, 1, 2, 3, 4], "left": [0, 1, 2], "qquad": 1, "t_1": 0, "n": [0, 1, 2, 3], "f_": 0, "o": 0, "t_": 0, "l": [0, 3], "2": [0, 3, 4, 5], "interior": [0, 2, 3], "t_i": [0, 1], "right": [0, 1, 2], "t_j": [0, 1], "j": [0, 1, 2, 3], "gener": 0, "written": [0, 2, 3], "With": [0, 3], "matrix": 0, "arrai": [0, 1, 2, 3], "ccccccc": [0, 1, 2], "k_w": [0, 3], "k_e": 0, "e": [0, 1, 2, 3, 4], "adapt": 0, "b": [0, 2, 3], "quad": 0, "x_i": 0, "rho_i": 0, "c_i": 0, "capac": 0, "densiti": [0, 2, 3], "stop": 0, "onc": 0, "achiev": [0, 2, 3], "accord": [0, 1, 2, 3], "iso": [0, 4], "10211": [0, 4], "2017": 4, "techniqu": [], "iter": 0, "shall": [], "continu": [], "until": 0, "sum": [0, 1, 2, 3], "q_": 0, "q": [0, 1], "le": 0, "0001": 0, "As": [0, 1, 3], "deriv": [0, 2, 3], "heatflow": [0, 1], "through": 0, "approxim": 0, "t_e": 0, "t_p": 0, "x_e": [0, 3], "w": [0, 1, 2, 3], "lambda_w": [0, 3], "t_w": 0, "x_w": [0, 3], "specif": 0, "first": [0, 2, 3], "last": [0, 2, 3], "x": [0, 1, 2, 3], "se": 0, "si": 0, "out": 0, "bc1": 0, "bc2": 0, "reset": [0, 1, 2], "librari": [0, 1, 2, 3], "import": [0, 1, 2, 3], "numpi": [0, 1, 2, 3], "np": [0, 1, 2, 3], "matplotlib": [0, 1, 2, 3], "pyplot": [0, 1, 2, 3], "plt": [0, 1, 2, 3], "class": [0, 2, 3], "def": [0, 1, 2, 3], "__init__": [0, 1, 2, 3], "self": [0, 1, 2, 3], "temperature1": [0, 2, 3], "temperature2": [0, 2, 3], "resistance1": [0, 2, 3], "resistance2": [0, 2, 3], "summar": [0, 1, 2, 3], "all": [0, 1, 2, 3], "start": [0, 2, 3], "valu": [0, 1, 2, 3], "make": [0, 2, 3], "place": [0, 2, 3], "temp": [0, 1, 2, 3], "width": [0, 2, 3], "sumar": [0, 2, 3], "width_sum": [0, 2, 3], "materi": [0, 2, 3], "n_cell": [0, 2, 3], "thermconduct": [0, 2, 3], "heatcap": [0, 2, 3], "ad": [0, 1, 2, 3], "counter": [0, 2, 3], "20": [0, 1, 2, 3], "04": [0, 2, 3], "10": [0, 1, 2, 3], "bewar": [0, 2, 3], "must": [0, 2, 3], "least": [0, 2, 3], "append": [0, 1, 2, 3], "d\u00e4mmung": [0, 2, 3], "1470": 0, "1000": [0, 1, 2, 3], "stb": 0, "15": 0, "2500": 0, "putz": 0, "02": 0, "4": [0, 4], "9": [0, 3], "2000": 0, "ts": [], "800000": [], "tsim": [], "3000000": [], "deltat": 0, "refer": [0, 1, 2, 3], "increas": [0, 1, 2, 3], "readabl": [0, 1, 2, 3], "initialis": [0, 1, 2, 3], "fo": 0, "error": [0, 2], "deltagrad": 0, "zero": [0, 1, 2, 3], "iterat": [0, 1, 2, 3], "keep": [0, 1, 2, 3], "track": [0, 1, 2, 3], "current": [0, 1, 2, 3], "deltax": [0, 2, 3], "initi": [0, 1, 2], "empti": [0, 1, 2, 3], "k_current": [0, 2], "defin": [0, 1, 2, 3], "east": [0, 2, 3], "west": [0, 2, 3], "rang": [0, 2, 3], "up": [0, 1, 2, 3], "half": [0, 2], "distanc": [0, 2], "fill": 0, "invert": [0, 2], "konduct": [0, 2], "condit": [0, 1, 2], "k_l": [0, 2], "k_r": [0, 2], "len": [0, 2, 3], "diagon": [0, 1, 2, 3], "neg": [0, 1, 2, 3], "axi": [0, 1, 2, 3], "free": [0, 2, 3], "row": [0, 2, 3], "lead": [0, 2, 3], "constant": [0, 2, 3], "ones": [0, 2, 3], "insert": [0, 2, 3], "kondit": [0, 2, 3], "adjust": 0, "outsid": [0, 2], "loop": [0, 3], "both": [0, 2], "independ": 0, "dot": [0, 1, 2, 3], "t_plu": 0, "qin": 0, "qout": 0, "while": [0, 3], "break": 0, "ab": [0, 2, 3], "x_po": 0, "width_cel": 0, "arang": [0, 2, 3], "xlabel": [0, 2, 3], "posit": 0, "m": [0, 1], "ylabel": [0, 2, 3], "plot": [0, 2, 3], "alpha": [0, 1, 2, 3], "65": [0, 2, 3], "35": 0, "color": [0, 1, 2, 3], "7": [0, 2, 3], "show": [0, 3], "print": [0, 3], "str": [0, 1], "round": [0, 1, 3], "60": [0, 3], "h": [0, 3], "473": 0, "small": [], "sampl": [], "give": 0, "you": [], "feel": [], "how": [], "content": [2, 3], "structur": [], "It": [2, 3], "off": [], "few": [], "major": [], "file": 3, "type": [], "some": [], "doe": 3, "go": [], "depth": [], "ani": [0, 3], "particular": [], "topic": [], "check": [], "document": [], "more": [], "inform": [], "page": [], "bundl": [], "see": [], "markdown": [], "notebook": [], "myst": [], "whether": [], "write": [], "your": 3, "book": [4, 5], "jupyt": [], "ipynb": [], "regular": [], "md": [], "ll": [], "same": 2, "flavor": [], "call": [2, 3], "simpl": [], "help": [], "get": [], "syntax": [], "stand": [], "markedli": [], "slight": [], "variat": [], "commonmark": [], "extens": [2, 3], "sphinx": [], "ecosystem": [], "about": [], "overview": [], "two": 3, "most": [2, 3], "power": [1, 2, 3], "tool": [], "thei": [], "kind": [], "like": [], "function": [0, 3], "markup": [], "languag": [], "serv": 5, "similar": [2, 3], "purpos": [], "line": [2, 3], "wherea": [], "span": [], "mani": [], "accept": [], "differ": 2, "input": [0, 1, 2, 3], "do": [], "those": [], "depend": 1, "being": [], "here": [], "note": [], "render": [], "special": 3, "box": [], "when": [], "build": [0, 2, 3, 4, 5], "inlin": [], "also": [], "cite": [], "store": [], "bibtex": [], "exampl": 0, "holdgraf_evidence_2014": [], "hdhpk14": [], "moreov": [], "bibliographi": [], "properli": [], "bib": [], "christoph": [], "ramsai": [], "holdgraf": [], "wendi": [], "de": [], "heer": [], "brian": [], "paslei": [], "robert": [], "knight": [], "evid": [], "predict": [], "code": [], "human": [], "auditori": [], "cortex": [], "In": [0, 2, 3], "intern": [3, 4], "confer": [], "cognit": [], "neurosci": [], "brisban": [], "australia": [], "2014": [], "frontier": [], "just": [], "starter": [], "lot": [], "jupyterbook": [], "org": [], "let": [], "base": [0, 3], "detail": 4, "instruct": [], "direct": 1, "so": [], "built": [], "block": [], "execut": [], "default": [], "kernel": [], "output": [], "displai": 3, "rest": [], "jupytext": [], "convert": [], "support": 3, "other": [], "thing": [], "understand": [], "should": [], "includ": [2, 3], "top": [], "presenc": [], "which": 3, "That": [], "If": 1, "treat": [], "run": [], "command": [], "init": [], "path": [], "markdownfil": [], "creat": [], "mean": [], "emb": [], "imag": [], "html": 3, "etc": [], "post": [], "add_": [], "math": [], "align": 0, "mbox": [], "la_": [], "tex": [], "But": [], "sure": [], "escap": [], "dollar": [], "sign": [], "want": [], "work": [], "guid": [], "from": [1, 2, 3], "rcparam": [], "cycler": [], "ion": [], "_ioncontext": [], "0x7fc1ae081030": [], "fix": [], "random": [], "state": 1, "reproduc": 3, "seed": [], "19680801": [], "data": [], "logspac": [], "1": [3, 4, 5], "100": [2, 3], "randn": [], "ii": [], "cmap": [], "cm": [2, 3], "coolwarm": [], "ax": [1, 3], "prop_cycl": [], "linspac": 3, "line2d": [2, 3], "custom_lin": [], "lw": [], "fig": [0, 1, 2, 3], "subplot": 3, "figsiz": [], "legend": [2, 3], "cold": [], "medium": [], "hot": [], "There": [], "interact": [], "walther2021": [], "0x7fbba03c6aa0": [], "advanc": [3, 5], "numer": [0, 3, 5], "method": [0, 2, 3, 5], "scienc": 5, "exercis": [], "wal21": [], "walther": 4, "physic": 4, "applic": [1, 2, 4], "python": 4, "dii": 4, "spring": 4, "pari": 4, "2021": 4, "0x7f980bb748e0": [], "nameerror": [], "traceback": [2, 3], "recent": [2, 3], "tmp": [], "ipykernel_32846": [], "14534101": [], "py": 3, "modul": 2, "name": 2, "0x7fab5bffa9e0": [], "my": 5, "figur": [1, 3], "caption": [], "Such": [0, 2, 3], "depict": [], "multipl": [], "layer": 1, "variabl": [], "requir": [0, 2, 3], "excersis": [0, 1, 2, 3], "descript": [0, 1, 2, 3], "seen": [2, 3], "ref": [], "eq": [2, 3], "label": [1, 2, 3], "collect": 5, "submiss": 5, "0x7fc1f5fe4d30": [], "conductivityinterior2": [], "carl": 4, "eric": 4, "hagentoft": 4, "introduct": 4, "studentlitteratur": 4, "lund": 4, "2001": 4, "url": 4, "http": 4, "buildingphysicshagentoft": 4, "com": 4, "norm": 0, "criterea": 0, "thermal": [0, 3, 4], "bridg": [0, 4], "limit": [0, 1], "provid": [], "tc": 4, "59": 4, "sc": 4, "13": [1, 2, 3, 4], "flow": 4, "organ": 4, "standard": 4, "03": [3, 4], "2016": 4, "ensur": [0, 3], "domin": 0, "invers": 3, "fourier": 0, "geq": 0, "longrightarrow": [0, 1], "insur": 0, "stabl": 0, "simul": 0, "test": [0, 1, 3], "dure": 0, "unit": [0, 1, 2, 3], "circ": [0, 1, 2, 3], "kg": [0, 1, 2, 3], "second": 0, "step": [0, 2, 3], "issu": 0, "exit": 0, "result": [2, 3], "vu": 5, "207": 5, "014": 5, "ss2023": 5, "autor": 5, "multi": [0, 2, 3], "addit": 0, "shown": [0, 2, 3], "done": [0, 2, 3], "represent": [0, 2, 3], "solver": [0, 2, 3], "thu": [0, 2], "after": [0, 2], "titl": [0, 2, 3], "usr": [], "lib": 3, "python3": 3, "dist": [], "packag": 3, "none": [1, 3], "0x7faf6958aa10": [], "locat": [0, 1], "modulenotfounderror": 2, "ipykernel_6121": [], "915621203": [], "No": 2, "8": [1, 2, 3], "11": 3, "node": [], "themselv": [], "connect": 1, "transfer": 2, "conveduct": [], "three": 1, "3": [1, 2, 3, 4], "f_o": [], "fromnod": 1, "tonod": 1, "massflow": 1, "heatsourc": 1, "overset": 1, "19": 1, "25": [1, 3], "05": 1, "ca": 1, "kgk": 1, "i0": 1, "i0i": 1, "ki": 1, "22": [2, 3], "linalg": [1, 3], "solv": 1, "140": [], "75": [], "167": [], "136": [], "compon": [2, 3], "50": 2, "11706349": [], "441": [], "80357143": [], "07936508": [], "steadi": 1, "sec": [], "ex1": [], "elabor": [2, 3], "moistur": 2, "unlik": 2, "version": 2, "restrict": [2, 3], "introduc": [2, 3], "complex": 2, "onli": [1, 2], "aplic": [], "miner": [2, 3], "wool": [2, 3], "heatcapac": 2, "kept": [], "diffus": [2, 3], "coeffici": [2, 3], "linear": [2, 3], "consid": [2, 3], "gl": [2, 3], "expandend": [2, 3], "induc": [1, 2, 3], "l_v": [2, 3], "delta_v": [2, 3], "p_": [2, 3], "vap": [2, 3], "euqat": 2, "transport": 2, "moist": [2, 3], "dw": [2, 3], "heatmoist": [2, 3], "section": [2, 3], "evalu": [2, 3], "p": [2, 3], "surround": [2, 3], "_p": [2, 3], "n_p": [2, 3], "n_e": [2, 3], "2t": 2, "n_w": [2, 3], "w_": [2, 3], "notat": [1, 2, 3], "cost": 2, "therefor": [1, 2, 3], "consturct": 2, "lambda_1": 2, "abov": 2, "mention": [2, 3], "wai": 2, "m_": 2, "h_": 2, "v": [2, 3], "mass": 2, "h_v": 2, "bai": [], "scipi": [2, 3], "copi": [2, 3], "humidity1": [2, 3], "humidity2": [2, 3], "humresistance1": [2, 3], "humresistance2": [2, 3], "80": [2, 3], "90": 2, "3e": [2, 3], "40": 2, "160": [2, 3], "fc_w_phi": [2, 3], "phi": [2, 3], "250": [2, 3], "1e": [2, 3], "6": [2, 3], "re": [2, 3], "log": [2, 3], "return": [2, 3], "fc_phi_w": [2, 3], "250e": [2, 3], "exp": [2, 3], "rel": [2, 3], "humid": [2, 3], "fc_psat_t": [2, 3], "610": [2, 3], "17": [2, 3], "269": [2, 3], "237": [2, 3], "21": [1, 2, 3], "875": [2, 3], "265": [2, 3], "625": [2, 3], "241": [2, 3], "7877": [2, 3], "lehrbuch": [2, 3], "fc_deltapv_t": [2, 3], "14": [2, 3], "fc_lambda_w": [2, 3], "update_cm": [2, 3], "epsilon": [2, 3], "001": [2, 3], "min": [1, 2, 3], "wp": [2, 3], "phip": [2, 3], "dphi": [2, 3], "pv": [2, 3], "lv": [2, 3], "2503000": [2, 3], "01": [2, 3], "red": [1, 2, 3], "0x7f22f0fc8990": [], "0x7f22eee6c7d0": [], "size": [2, 3], "deepcopi": 2, "deltax_l": 2, "deltax_r": 2, "deltapv_l": 2, "deltapv_r": 2, "m_l": 2, "m_r": 2, "9803": [], "92156863": [], "19803": [], "10000": [], "20000": [], "5000": [], "15000": [], "vec_t_w": [2, 3], "dt_dt": 2, "delta_t": [2, 3], "result_heat": 2, "solve_ivp": [2, 3], "1800000": 2, "radau": [2, 3], "atol": [2, 3], "rtol": [2, 3], "dt_w_dt": [2, 3], "split": [1, 2, 3], "vector": [2, 3], "deltapv": [2, 3], "pvap": [2, 3], "delta_w": [2, 3], "result_coupl": 2, "keyboardinterrupt": 3, "29": [], "local": 3, "site": 3, "_ivp": 3, "ivp": 3, "591": 3, "fun": 3, "t_span": 3, "y0": 3, "t_eval": 3, "dense_output": 3, "event": 3, "arg": 3, "option": 3, "589": 3, "statu": 3, "590": 3, "messag": 3, "593": 3, "finish": 3, "594": 3, "181": 3, "odesolv": 3, "179": 3, "els": 3, "180": 3, "success": 3, "_step_impl": 3, "183": 3, "184": 3, "fail": 3, "504": [], "501": [], "lu_real": 3, "502": [], "lu_complex": 3, "f_new": [], "t_new": [], "y_new": [], "505": [], "recompute_jac": [], "506": [], "jac": [], "138": [], "y": [1, 2, 3], "137": [], "nfev": [], "fun_singl": [], "check_argu": [], "fun_wrap": [], "asarrai": [], "dtype": [], "28": [], "12": 1, "16": [], "18": [], "res_t_coup": 2, "res_t_heat": 2, "0x7f3d3bc7ffd0": [], "res_w_heat": [2, 3], "res_w_coup": [2, 3], "0x7f3d3bc6af10": [], "0x7f3d3bbe7f50": [], "pa": [2, 3], "res_pvap_coup": 2, "0x7f3d3b85b990": [], "formul": 1, "energi": 1, "simplifi": [1, 3], "q_i": 1, "limits_": 1, "i_": 1, "heatbal": [], "inspect": 1, "sourc": 1, "balanc": 1, "system": 1, "eachoth": 1, "form": 1, "k_1": 1, "k_2": 1, "23": 1, "31": 1, "32": 1, "k_3": 1, "taken": 1, "account": 1, "take": 1, "often": 1, "reffer": 1, "add": 1, "ij": 1, "neq": 1, "ji": 1, "diagoconduct": [], "remain": 1, "true": [1, 3], "now": 1, "further": 1, "interpret": 1, "airflow": 1, "descrip": 1, "product": 1, "carri": 1, "air": 1, "c_a": 1, "kt": 1, "z": [1, 3], "add_subplot": [1, 3], "111": 1, "project": 1, "3d": 1, "scatter": 1, "zip": 1, "max": 1, "set_zlabel": 1, "set_box_aspect": 1, "aspect": 1, "zoom": 1, "plot_trisurf": 1, "white": 1, "edgecolor": 1, "grei": 1, "0x7f9a6fa478d0": [], "0x7f9a6d513010": [], "459": [], "456": [], "current_jac": [], "457": [], "f": [], "460": [], "461": [], "352": [], "_validate_jac": [], "jac_wrap": [], "350": [], "351": [], "njev": [], "jac_factor": [], "num_jac": [], "fun_vector": [], "353": [], "354": [], "sparsiti": [], "355": [], "common": [], "318": [], "threshold": [], "factor": [], "315": [], "y_scale": [], "317": [], "_dense_num_jac": [], "319": [], "320": 3, "group": [], "328": [], "326": [], "shape": [], "327": [], "h_vec": [], "diag": [], "329": [], "diff": [], "330": [], "max_ind": [], "argmax": [], "133": [], "131": [], "empty_lik": [], "132": [], "yi": [], "enumer": [], "_fun": [], "134": [], "0x7f285cecbac0": [], "0x7f285cefa620": [], "valueerror": 3, "ipykernel_64724": [], "579936213": [], "scalex": [], "scalei": [], "kwarg": [], "2755": [], "_copy_docstring_and_deprec": [], "2756": [], "2757": [], "gca": [], "2758": [], "2759": [], "_ax": [], "1630": [], "1631": [], "cbook": [], "normalize_kwarg": [], "mline": [], "1632": [], "_get_lin": [], "1633": [], "1634": [], "add_lin": [], "_base": [], "__call__": [], "310": [], "311": [], "312": [], "yield": [], "_plot_arg": [], "313": [], "314": [], "get_next_color": [], "tup": [], "return_kwarg": [], "496": [], "497": [], "498": [], "rais": 3, "499": [], "500": [], "ndim": [], "42": [], "99": 3, "331123840": [], "heatbalance_matr": [], "0x7fee6bad0210": [], "0x7fee6b998890": [], "27": [], "451": 3, "448": 3, "lu": 3, "mu_real": 3, "449": 3, "mu_complex": 3, "converg": 3, "n_iter": 3, "rate": 3, "solve_collocation_system": 3, "452": 3, "z0": 3, "scale": 3, "newton_tol": 3, "453": 3, "solve_lu": 3, "455": [], "98": [], "tol": [], "95": [], "ch": [], "97": [], "dw_norm_old": [], "fals": [], "__array_function__": [], "177": [], "0x7f48d7018950": [], "0x7f48d6e3a010": [], "0x7f48d6e8a010": [], "0x7f48d71a8950": [], "0x7efcd3844390": [], "0x7efcd3796750": [], "446": 3, "447": 3, "323": 3, "A": 3, "321": 3, "322": 3, "nlu": 3, "lu_factor": 3, "overwrite_a": 3, "_decomp_lu": 3, "check_finit": 3, "_flinalg_pi": [], "get_flinalg_func": [], "__all__": [], "lu_solv": [], "comput": [], "pivot": [], "decomposit": [], "71": [], "72": [], "73": [], "0x7fd9a4903310": [], "0x7fd9a497ef50": [], "0x7fd9a46dce90": [], "0x7fd9a493f490": [], "construct": 4, "0x7f37ec841010": [], "0x7f37ec777950": [], "507": [], "508": [], "elif": [], "26": [], "0x7f52a8283710": [], "0x7f52a80923d0": [], "0x7f2ccde138d0": [], "0x7f2ccddfe750": [], "multilaycomp": [], "get_ipython": 2, "run_line_mag": 2, "0x7fd073e27f50": [], "0x7fd073e42210": [], "0x7fd073f42550": [], "0x7fd073f9b990": [], "0x7fd073e13410": [], "0x7fd073da2a50": [], "assum": 2, "describ": [2, 3], "relat": 2, "0x7feb315f8810": [], "0x7feb2f45f2d0": [], "105": [], "102": [], "103": [], "isfinit": [], "106": [], "108": [], "f_real": [], "ti_real": [], "m_real": [], "0x7f9d42d1c3d0": [], "0x7f9d42856050": [], "0x7f9d42d16050": [], "0x7f9d42986050": [], "0x7f9d42af4fd0": [], "0x7f9d42b6ec10": [], "0x7f90781f6510": 2, "0x7f90780c8650": 2, "0x7f907816a490": 2, "0x7f9073c56690": 2, "0x7f9073e08e90": 2, "0x7f9073e91890": 2, "multilaycompex2": [2, 3], "wa": 3, "capabl": 3, "effect": 3, "suction": 3, "expir": 3, "grid": 3, "x_p": 3, "latent": 3, "extend": 3, "total": 3, "u_f": 3, "300": 3, "suc": 3, "2n": 3, "correspond": 3, "retent": 3, "curv": 3, "delta_": 3, "textcolor": 3, "green": 3, "harmon": 3, "averag": 3, "lambda_p": 3, "elebor": 3, "harmoic": 3, "suitabl": 3, "k_p": 3, "dry": 3, "prevent": 3, "set": 3, "due": 3, "high": 3, "gradient": 3, "implicit": 3, "prefer": 3, "anim": 3, "61094": 3, "243": 3, "200": 3, "0x7fcf283b9610": 3, "0x7fcf27fd92d0": 3, "resembl": 3, "fc_wsuc_psuc": 3, "psuc": 3, "fc_psuc_w": 3, "1e6": 3, "fc_kw_psuc_wsuc_n": 3, "wsuc": 3, "dwsuc": 3, "3e8": 3, "299": 3, "produc": 3, "expentionali": 3, "contant": 3, "kw": 3, "set_xscal": 3, "fig2": 3, "bx": 3, "lin2": 3, "fig3": 3, "cx": 3, "lin3": 3, "set_yscal": 3, "new_cmatrix_norm_avg": 3, "w_current": 3, "new_cmatrix_harm_avg": 3, "kleit": 3, "liquittransport": 3, "vaportransport": 3, "testarrai": 3, "testarray2": 3, "result_coupled_fluid": 3, "24": 3, "79": 3, "77": 3, "_datacopi": 3, "a1": 3, "78": 3, "getrf": 3, "get_lapack_func": 3, "piv": 3, "info": 3, "81": 3, "illeg": 3, "dth": 3, "argument": 3, "82": 3, "ylim": 3, "0x7f2d56463cd0": 3, "redresult": 3, "set_data": 3, "funcanim": 3, "frame": 3, "ipython": 3, "to_html5_video": 3, "browser": 3, "video": 3, "tag": 3, "miss": 4, "journal": 4, "kalagasidis2004": 4, "017": 5, "ws2023": 5}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"advanc": [], "numer": [], "method": [], "build": [], "scienc": [], "exercis": [0, 1, 2, 3], "1": [0, 1, 2], "space": [0, 2, 3], "discret": [], "time": [0, 2, 3], "integr": [0, 2, 3], "stabil": 0, "steadi": 0, "state": 0, "criteria": 0, "implement": [0, 1, 2, 3], "construct": [0, 1, 2, 3], "layer": [0, 2, 3], "boundari": [0, 1, 2, 3], "object": [0, 1, 2, 3], "definit": [0, 1, 3], "simul": 2, "step": [], "size": 0, "k": [0, 1, 2, 3], "f_o": 0, "matric": [0, 3], "determin": 0, "hour": 0, "when": 0, "3": 0, "compon": 0, "reach": 0, "welcom": [], "your": [], "jupyt": [], "book": [], "markdown": [], "file": [], "what": [], "myst": [], "sampl": [], "role": [], "direct": [], "citat": [], "learn": [], "more": [], "notebook": [], "an": [], "exampl": [], "cell": [], "creat": [], "quickli": [], "add": [], "yaml": [], "metadata": [], "content": [], "code": [], "block": [], "output": [], "refer": 4, "heat": [0, 2, 3], "conduct": [0, 1, 2, 3], "multipl": 0, "variabl": 0, "properti": 0, "introduct": 5, "calcul": [0, 1, 2], "temperatur": [0, 1, 2, 3], "field": [0, 1, 2, 3], "timestep": 0, "discretis": [0, 2, 3], "result": [0, 1], "convect": 1, "rc": 1, "network": 1, "2": [1, 2], "node": 1, "variant": [1, 2], "without": 1, "matrix": [1, 2, 3], "vector": 1, "i_0": 1, "alter": 1, "work": [], "IN": [], "progress": [], "4": [2, 3], "coupl": 2, "latent": 2, "effect": 2, "balanc": [2, 3], "equat": [2, 3], "sorption": [2, 3], "isotherm": [2, 3], "water": [2, 3], "permabl": [2, 3], "satur": [2, 3], "vapor": [2, 3], "pressur": [2, 3], "m": [2, 3], "fundament": 1, "conserv": 1, "conveduct": 1, "class": 1, "plot": 1, "liquid": 3, "transport": 3, "initi": 3, "moistur": 3, "solv": 3}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})