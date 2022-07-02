from .split_number import split_number

def order_body(name, email, phone, order, summ, card_title = 'Поступил новый заказ') -> str:
    body = f"""
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <meta name=”x-apple-disable-message-reformatting”>
            <meta name="HandheldFriendly" content="True">
            <meta name="MobileOptimized" content="width">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="apple-mobile-web-app-capable" content="yes">
            <meta name="format-detection" content="telephone=no" />
            <meta http-equiv="cleartype" content="on">
            <title>Send email</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        </head>
        <body>
        <div class="card" style="margin: auto; margin-top: 5%; max-width: 700px">
        <div class="card-body d-grid gap-3">
            <h5 class="card-text text-center">Информация о заказе</h5>
            <p class="card-text">Имя: {name}</p>
            <p class="card-text">Адресс электронной почты: {email}</p>
            <p class="card-text">Номер Телефона: {phone}</p>
            <table class="table table-hover table-responsive table-striped table-bordered">
                <thead>
                    <tr>
                        <th scope="col">№</th>
                        <th scope="col">Наименование</th>
                        <th scope="col">Кол-во</th>
                        <th scope="col">Цена(₽)</th>
                    </tr>
                </thead>
            """
    
    for index, element in enumerate(order):
        body += f"""
        <tr>
            <th scope="row">{(index + 1)}</th>
            <td>{element["name"]}</td>
            <td>{element["cout"]}</td>
            <td>{split_number(element["cost"], pre = "тыс.")}</td>
        </tr>"""
    
    body += f"""
                                </tbody>
                            </table>
                        <p class="card-text text-end text-right fs-6">Итоговая стоимость: {split_number(summ, "тыс.")} ₽</p>
                    </div>
                </div>
            </body>
        </html>
    """
    
    return body