<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Checkout</title>
</head>
<body>
    <form action="trackorder.php" method="post">
        <div>
            <label for="name">Full Name:</label>
            <input type="text" name="name" id="name" required>
        </div>
        <div>
            <label for="phone">Phone Number:</label>
            <input type="text" name="phone" id="phone" required>
        </div>
        <div>
            <label for="address">Address:</label>
            <input type="text" name="address" id="address" required>
        </div>
        <div>
            <label for="country">Country:</label>
            <input type="text" name="country" id="country" required>
        </div>
        <div>
            <label for="city">City:</label>
            <input type="text" name="city" id="city" required>
        </div>
        <button type="submit">Checkout</button>
    </form>
</body>
</html>
