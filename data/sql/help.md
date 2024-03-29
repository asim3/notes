```text
-a, --echo-all          Print all nonempty input lines to standard output as they are read. 
                        (This does not apply to lines read interactively.) This is equivalent 
                        to setting the variable ECHO to all.

-A, --no-align          Switches to unaligned output mode. (The default output mode is 
                        otherwise aligned.)

-c command
--command=command       


-d dbname
--dbname=dbname         Specifies the name of the database to connect to. This is equivalent to 
                        specifying dbname as the first non-option argument on the command line.

-e, --echo-queries      Copy all SQL commands sent to the server to standard output as well. 
                        This is equivalent to setting the variable ECHO to queries.

-E, --echo-hidden       Echo the actual queries generated by \d and other backslash commands. 
                        You can use this to study psql's internal operations. This is equivalent 
                        to setting the variable ECHO_HIDDEN to on.

-f filename
--file=filename         Use the file filename as the source of commands instead of reading
                        commands interactively. After the file is processed, psql terminates. 
                        This is in many ways equivalent to the meta-command \i.
    
                        If filename is - (hyphen), then standard input is read until an EOF 
                        indication or \q meta-command. Note however that Readline is not used 
                        in this case (much as if -n had been specified).
    
                        Using this option is subtly different from writing psql < filename. In 
                        general, both will do what you expect, but using -f enables some nice 
                        features such as error messages with line numbers. There is also a slight 
                        chance that using this option will reduce the start-up overhead. On the other 
                        hand, the variant using the shell's input redirection is (in theory) 
                        guaranteed to yield exactly the same output you would have received had you 
                        entered everything by hand.

-F separator
--field-separator=separator
                        Use separator as the field separator for unaligned output. This is equivalent 
                        to \pset fieldsep or \f.

-h hostname
--host=hostname         Specifies the host name of the machine on which the server is running. 
                        If the value begins with a slash, it is used as the directory for the 
                        Unix-domain socket.

-H, --html              Turn on HTML tabular output. This is equivalent to \pset format html 
                        or the \H command.

-l, --list              List all available databases, then exit. Other non-connection options 
                        are ignored. This is similar to the meta-command \list.

-L filename
--log-file=filename     Write all query output into file filename, in addition to the normal 
                        output destination.

-n, --no-readline       Do not use Readline for line editing and do not use the command history. 
                        This can be useful to turn off tab expansion when cutting and pasting.

-o filename
--output=filename       Put all query output into file filename. This is equivalent to the command \o.

-p port, --port=port    Specifies the TCP port or the local Unix-domain socket file extension on which
                        the server is listening for connections. Defaults to the value of the PGPORT 
                        environment variable or, if not set, to the port specified at compile time, 
                        usually 5432.

-P assignment
--pset=assignment       Specifies printing options, in the style of \pset. Note that here you have to 
                        separate name and value with an equal sign instead of a space. For example, to 
                        set the output format to LaTeX, you could write -P format=latex.

-q, --quiet             Specifies that psql should do its work quietly. By default, it prints welcome 
                        messages and various informational output. If this option is used, none of this 
                        happens. This is useful with the -c option. This is equivalent to setting the 
                        variable QUIET to on.

-R separator
--record-separator=separator
                        Use separator as the record separator for unaligned output. This is equivalent 
                        to the \pset recordsep command.

-s, --single-step       Run in single-step mode. That means the user is prompted before each command 
                        is sent to the server, with the option to cancel execution as well. Use this 
                        to debug scripts.

-S, --single-line       Runs in single-line mode where a newline terminates an SQL command, as a 
                        semicolon does.

                        Note: This mode is provided for those who insist on it, but you are not necessarily 
                        encouraged to use it. In particular, if you mix SQL and meta-commands on a line 
                        the order of execution might not always be clear to the inexperienced user.

-t, --tuples-only       Turn off printing of column names and result row count footers, etc. This is 
                        equivalent to the \t command.

-T table_options
--table-attr=table_options
                        Specifies options to be placed within the HTML table tag. See \pset for details.

-U username
--username=username
                        Connect to the database as the user username instead of the default. 
                        (You must have permission to do so, of course.)

-v assignment
--set=assignment
--variable=assignment
                        Perform a variable assignment, like the \set meta-command. Note that you must 
                        separate name and value, if any, by an equal sign on the command line. To 
                        unset a variable, leave off the equal sign. To set a variable with an empty 
                        value, use the equal sign but leave off the value. These assignments are done 
                        during a very early stage of start-up, so variables reserved for internal 
                        purposes might get overwritten later.

-V, --version           Print the psql version and exit.

-w
--no-password
                        Never issue a password prompt. If the server requires password authentication 
                        and a password is not available by other means such as a .pgpass file, the 
                        connection attempt will fail. This option can be useful in batch jobs and 
                        scripts where no user is present to enter a password.
                        
                        Note that this option will remain set for the entire session, and so it 
                        affects uses of the meta-command \connect as well as the initial connection 
                        attempt.

-W, --password          Force psql to prompt for a password before connecting to a database.
                        
                        This option is never essential, since psql will automatically prompt for 
                        a password if the server demands password authentication. However, psql 
                        will waste a connection attempt finding out that the server wants a password. 
                        In some cases it is worth typing -W to avoid the extra connection attempt.

                        Note that this option will remain set for the entire session, and so it affects 
                        uses of the meta-command \connect as well as the initial connection attempt.

-x, --expanded          Turn on the expanded table formatting mode. This is equivalent to the \x command.

-X, --no-psqlrc         Do not read the start-up file (neither the system-wide psqlrc file nor the 
                        user's ~/.psqlrc file).

-z
--field-separator-zero
                        Set the field separator for unaligned output to a zero byte.

-0, --record-separator-zero
                        Set the record separator for unaligned output to a zero byte. This is useful 
                        for interfacing, for example, with xargs -0.

-1, --single-transaction
                        When psql executes a script with the -f option, adding this option wraps 
                        BEGIN/COMMIT around the script to execute it as a single transaction. This 
                        ensures that either all the commands complete successfully, or no changes 
                        are applied.

                        If the script itself uses BEGIN, COMMIT, or ROLLBACK, this option will not 
                        have the desired effects. Also, if the script contains any command that cannot 
                        be executed inside a transaction block, specifying this option will cause 
                        that command (and hence the whole transaction) to fail.

-?
--help                  Show help about psql command line arguments, and exit.
```
