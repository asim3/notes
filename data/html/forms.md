```html
<form method="POST" enctype="multipart/form-data">
    <input type="hidden" name="csrf-token" value="Rd8YbBeyM">

    <p>
        <label for="id_my_file">my file:</label> 
        <input type="file" name="my_file" required="" id="id_my_file">
    </p>

    <input type="submit" value="update">
</form>
```

## djnago
```html
<form method="POST">
    <input type="hidden" name="tearm" value="123">
    <ul>
        <li>
            <button type="submit" name="reasons" value="111" class="button">
                333
            </button>
        </li>
        <li>
            <button type="submit" name="reasons" value="222" class="button">
                444
            </button>
        </li>
    </ul>
</form>
```


## action
```html
<form action="/action_page.php" method="get">
    <label for="fname">First name:</label>
    <input type="text" id="fname" name="fname">
    
    <br><br>
    
    <label for="lname">Last name:</label>
    <input type="text" id="lname" name="lname">
    
    <br><br>
    
    <input type="submit" value="Submit">
</form> 
```
