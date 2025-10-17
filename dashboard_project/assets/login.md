<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
        *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      color: #fff;
    }
    body{
      background: #000;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
    }
      form{
      margin: 60px;
      padding: 50px;
      width: 480px;
      background: transparent;
      box-shadow: 0 0 20px red;
      border: none;
      border-radius: 25px;
    }
       h1{
      text-align: center;
      margin-top: 10px;
      margin-bottom: 10px;
      font-size: 40px;
      color: red;
    }
        form .name{
      padding: 20px;
      width: 90%;
      height: 50%;
      outline: none;
      width: 100%;
    }

    form .name input{
      padding: 16px;
      align-items: center;
      border-radius: 50px;
      border: 1PX solid red;
      width: 100%;
      background: black;
      color: white;
    }
     button{
      justify-content: center;
      text-align: center;
      align-items: center;
      padding: 15px;
      border: none;
      border-radius: 30px;
      width: 60%;
      font-weight: 800;
      background: red;
    }

    .uniqu{
      justify-content: center;
      align-items: center;
      text-align: center;

    }
        button:hover{
      background-color: black;
      color: white;
      box-shadow: 0 0 10px red;
      transition: 0.5ms ease-in-out;
    }
    button:active{
      background-color: red;
      transition: 0.5ms ease;
    }
    a{
      text-align: right;
      padding: 20px;
      margin-top: 30px;
      margin-bottom: 30px;
    }
  </style>
  <title>Login</title>
</head>
<body>
  <form action="">
    <h1>login</h1>
       <div class="name">
        <input type="email" placeholder="Enter You'r Email" required>
      </div>
      <div class="name">
        <input type="password" placeholder="Enter You'r password" required>
      </div>
      <div class="name">
        <a href="#">forgot password</a>
      </div>
        <div class="uniqu">
        <button>login</button>
      </div>
  </form>
</body>
</html>