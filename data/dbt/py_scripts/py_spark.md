# `not working !!`


## Apache Spark
Spark is a unified analytics engine for large-scale data processing.

[docs](https://spark.apache.org/documentation.html)


## install
[JDK](https://jdk.java.net/)
```bash
# Install the Java Development Kit (JDK)

# extract "Downloads\openjdk-25_windows-x64_bin.zip" to "C:\Program Files\Java\jdk-25"

# Set JAVA_HOME=C:\Program Files\Java\jdk-25

# Add %JAVA_HOME%\bin @ Path

pip install pyspark
```

## run
```py
from pyspark.sql import SparkSession

spark = SparkSession.builder.getOrCreate()

df = spark.read \
       .option("header", True) \
       .option("delimiter", "\t") \
       .option("inferSchema", True) \
       .csv("./my_file.log")

df.show()
```
