import customtkinter as ctk

class App(ctk.CTk):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.exterior_color = ctk.set_appearance_mode("Light")
        self.default_color = ctk.set_default_color_theme("blue")
        self.title("マイルストーン管理")
        self.geometry("1100x800")

        self.grid_columnconfigure(0, weight=0)
        self.grid_columnconfigure(1, weight=1)
        self.grid_columnconfigure(2, weight=0)

        self.grid_rowconfigure(0, weight=0)
        self.grid_rowconfigure(1, weight=1)
        self.grid_rowconfigure(2, weight=0)


        self.sidebar = Sidebar(self, **kwargs)
        self.sidebar.grid(row=0, column=0, rowspan=2, sticky="nsew")

        self.mainarea = Mainarea(self, **kwargs)
        self.mainarea.grid(row=1, column=1, rowspan=1, sticky="nsew")

        self.header = Header(self, **kwargs)
        self.header.grid(row=0, column=1, columnspan=2, sticky="nsew")

        self.light_side = LightSide(self, **kwargs)
        self.light_side.grid(row=1, column=2, rowspan=1, sticky="nsew")

        self.footer = Footer(self, **kwargs)
        self.footer.grid(row=2, column=0, columnspan=3, sticky="nsew")

class Sidebar(ctk.CTkFrame):
    def __init__(self, master, width=85,**kwargs):
        super().__init__(master, width, **kwargs)

class Header(ctk.CTkFrame):
    def __init__(self, master,height=38, **kwargs):
        super().__init__(master, height, **kwargs)


class Footer(ctk.CTkFrame):
    def __init__(self, master, height=94, **kwargs):
        super().__init__(master, height, **kwargs)


class Mainarea(ctk.CTkFrame):
    def __init__(self, master, **kwargs):
        super().__init__(master, **kwargs)


class LightSide(ctk.CTkFrame):
    def __init__(self, master, width=283, **kwargs):
        super().__init__(master, width, **kwargs)


if __name__ == '__main__':
    app = App()
    app.mainloop()