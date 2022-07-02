import mimetypes  # Импорт класса для обработки неизвестных MIME-типов, базирующихся на расширении файла
import smtplib  # Импортируем библиотеку по работе с SMTP
from email import encoders  # Импортируем энкодер
from email.mime.audio import MIMEAudio  # Аудио
from email.mime.base import MIMEBase  # Общий тип
from email.mime.image import MIMEImage  # Изображения
from email.mime.multipart import MIMEMultipart  # Многокомпонентный объект
from email.mime.text import MIMEText  # Текст/HTML
from io import StringIO


class Email_manager():
    def __init__(self, addr_from, password, timeout, addr_to = None):
        self.password = password
        self.addr_from = addr_from
        
        self.load_smtp_server()
        
        self.con_types = ['plain', 'html']
        self.addr_to = addr_to

    def send_message(self, subject, body, con_type = 'plain', addr_to = 'default'):
        self.con_type_validate(con_type)
        self.addr_to_validate(addr_to)
        
        if addr_to == 'default':
            addr_to = self.addr_to

        msg = self.create_msg(self.addr_from, addr_to, subject, con_type, body)
        self.send(msg)

    def load_smtp_server(self):
        self.server = smtplib.SMTP(
                'smtp.gmail.com: 587',
                timeout = 100000
            )

        self.server.set_debuglevel(True)
        self.server.starttls()
        self.server.login(self.addr_from, self.password)

    def con_type_validate(self, con_type):
        if con_type not in self.con_types:
            raise ValueError("Invalid body content type")

    def addr_to_validate(self, addr_to):
        if addr_to is None:
            raise AttributeError("'addr_to' must be specified in class init and/or in 'send_email' method")

    def create_msg(self, addr_from:str, addr_to:str, subject:str, con_type, body):
        msg = MIMEMultipart()
        msg['From']    = addr_from
        msg['To']      = addr_to
        msg['Subject'] = subject

        msg.attach(MIMEText(body, _subtype = con_type)) # Добавляем в сообщение текст

        return msg

    def send(self, msg):
        try:
            self.server.send_message(msg)                   # Отправляем сообщение

        except Exception as e:
            self.load_smtp_server()
            self.server.send_message(msg)