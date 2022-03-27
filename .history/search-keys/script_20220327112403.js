const PRX_BANKS = `Which of these characters can be included within the text in an XML document in literal form? | ; & : -
XML parser checks for validity and well-formed ness? | True
Which of the following is/are optional in the creation of an XML file? | Entities
A descendant having a new namespace cannot override the namespace defined by the parrent element? | False
Parameter entities use ampersand (&) and semicolon (;) as delimiters? | false
XML developer has to ensure the uniqueness of the element names and attributes in a document? | True
XML is transformed only via XSLT? | False
Browser has the ability distinguish duplicate element names in an XML document? | False
Which of these is a valid comment in XML? | <!- -This data should be hidden<FIRSTNAME>Joe</FIRSTNAME> <LASTNAME>Johnson</LASTNAME>- ->
What does the keyword SYSTEM indicate in the following code?<?xml version =”1.0”?><!DOCTYPE Book SYSTEM “book.dtd”> | Book.dtd is an external DTD
Which of the following statements is not true? | Entities that appear anywhere in an XML document are referred to as Parameter entities
External DTDs use the keyword URL to specify the location of the DTD? | false
For each element type associated with a sequence element, there must be an element in the XML instance in the same order? | True
Specifies that the attribute cannot be used? | prohibited
An XML Schema defines whether an element is empty or can include text. | True
In schema, the ALL element requires that | each element in the group must occur at most once
The default value for the minOccurs attribute in Schema is 0 | False
Which top level XSLT elements is used to define a variable in a stylesheet or template and to assign it a value | xsl:variable
Xpath can be thought of as a query language like SQL | True
Which of these is the correct syntax to link an XSL file to an XML document? | <?xml-stylesheet type="text/xsl" href="candidate.xsl"?>
XSLT takes two things as input: an XSLT stylesheet and an xml input document | True
Which of the following selections is the proper way to apply this CSS rule: .blue { color: blue } | <P CLASS = "blue">
In CSS, when a style is applied to an element containing other elements inside it | The style is applied to the element and all the other elements contained in it
In DOM, a node can have | More than one children nodes
Tree model is applied to static documents? | False
Method hasChildNodes of XMLDOMNode mean | Determine if a given node has child nodes or not
With reference to the snippet of code given below, choose the correct syntax to complete the second line in order to create a XML Document Object var sample sample = | new ActiveXObject("microsoft.XMLDOM")
Which object represents the top level of the XML source? | DOMDocument
In SAX, to provide customized DTD handling, application need to implement | DTDHandler
SAX uses | Push parsing machenic for processing
The StAX cursor API represents | a cursor with which you can walk an XML document from beginning to end.
SAX support random access | False
Method characters() of ContentHandler interface receives events for | Character data
What is the value of num after the following statement is performed?num = Math.round( 2.45 ); | 2
A procedure for solving a problem in terms of the actions to be executed and the order in which these actions are to be executed is called ________. | an algorithm
Which of the following is not required for counter-controlled repetition? | sentinel
Which of the following statements regarding filters and transitions is false? | They are applied on a client computer at run time by the server.
A program in which all statements are executed one after the other in the order in which they are written exhibit ________. | sequential execution
________ and ________ run slower when they are applied to large arrays. | linear search, bubble sort
What is the value of s3 after the following code is executed?var s1 = one, s2 = two, s3 = three; s1.concat(s2) s3 = s1; | onetwo
What is XML? | Extensible Markup Language
Which Statement about xml is true? | Elements may nest but not overlap
What is the correct declaration syntax for the version of an XML document? | <?xml version="1.0" ?>
How is an empty XML element defined? | All of the above.
Which syntax is used to insert comments into an XML document? | <!This is a comment>
What does DTD stand for? | Document Type Definition.
Which statement is true? | All XML elements must be properly closed
Which statement is true? | All of the above.
Which is not a correct name for an XML documents? | <1dollar>
Which is not a correct name for an XML element? | <first name>
What does XSL stand for? | eXtensible Stylesheet Language
What is a correct way of referring to a stylesheet called "mystyle.xsl”? | <?xmlstylesheet type="text/xsl" href="mystyle.xsl"?>
For the XML parser to ignore a certain section of your XML document, which syntax is correct? | <![CDATA[ Text to be ignored ]]>
XML is a _______ Recommendation | W3C
XML is | Free and Extensible
XML is a Complement to | HTML
XML Schema is designed to | be selfdescriptive.
XML uses | an XML Schema to describe the data
XML Can be used to | Create new language.
XML is the mother of | WAP and WML
XSL stands for: | EXtensible Stylesheet Language
The World Wide Web Consortium (W3C) started to develop XSL because there was a need for: | XMLbased Stylesheet Language
XSL ________ how the XML document should be displayed! | describes
XSL consists of three parts. Which are? | XSLT, Xpath, XSLFO
XSL processors do parses the XML source and tries to find out the matching _______ rule. | template
_____ in XSL do allow the element to be processed for multiple times, each time producing different result. | Modes
Templates are been ordered according to their ________ which can be specified with the priority attributte. | priority
An attributes can be accessed in the way similar to the elements. Notice ____ in front of the attribute name. | @
Which of these axes which are used in XSL? | grandparent
A _____ instruction do contains the template, which is been applied to each node selected with the select attribute. | xsl:foreach
The xsl:element generates the elements in at time of processing. | True
The xsl:attribute do generates the elements in the time of processing. | True
The Copy and _______ constructs are used for the nodes copying. | copyof
The ____ instruction do enables the conditional processing. | xsl:if
The xsl:choose element is used for the purpose of selection between the several possibilities. | True
An xsl:numbers do inserts a formated numbers into the ______ . | output
Stylesheet can do have ____ variables with the same name. | several
Value of the local variable is bounded to which element | xsl:when
A _____ function returns number of nodes present in an argument nodeset. | count
"Position" function do returns the number equal to context position | True
DTD is: | Document Type Definition
It defines the document structure with a list of _______. | legal elements
DTD defines the document structure with a list of legal elements. | True
A DTD can be declared inline in your XML document, or as an | external reference
If the DTD is included in your XML source file, it should be wrapped in a DOCTYPE definition with the following syntax: | <!DOCTYPE rootelement [elementdeclarations]>
You can also use a DTD to verify your own | data
If the DTD is external to your XML source file, it should be wrapped in a DOCTYPE definition with the following syntax: | <!DOCTYPE rootelement SYSTEM "filename">
With DTD, each of your XML files can carry a ________ of its own format with it. | description
Elements are the main building blocks of both | XML and HTML documents
Attributes provide _______ about elements. | extra information
Entities are variables used to define | common text
Entities are expanded when a document is parsed by an XML | parser
Which of these characters cannot be used as entity references in XML? | $
PCDATA means: | parsed character data
CDATA is text that _____ be parsed by a parser. | will not
CDATA means: | character data
An element declaration has the following syntax: | <!ELEMENT elementname category>
Elements with only character data are declared with | #PCDATA
In a DTD, Attributes are declared with an _______ declaration | ATTLIST
________ can validate your XML against a DTD. | Internet Explorer 5.0
Schema is an _____ based alternative | XML
An XML Schema describes the structure of an XML _______ . | document
XSD is: | XML Schema Definition
Which of these are not supported by XML Schema? | defines which files are child elements
XML Schemas are the Successors of | DTD
XML Schema became a W3C Recommendation | 02. May 2001
One of the greatest strength of XML Schemas is the support for | data types
With XML Schemas, the senders can ________ the data in a way that the receiver will understand. | describes
With an extensible Schema definition you cannot: | All the above
A simple element is an XML element that can contain only | text
Which of these are not kinds of complex elements? | elements that contain only numbers
If an element has attributes, it is considered to be of complex types. | True
The syntax for defining an attribute is: | <xs:attribute name="xxx" type="yyy"/>
A default value is automatically assigned to the attributes when no other value is specified. | True
Attributes are by default: | optional
If an XML element is of type "xs:date" and contain a string like "Hello World", the element will | not validate
Restrictions on XML elements are called | facets
To specify how whitespace characters should be handled, we would use the whiteSpace | constraints
An empty complex element cannot have any contents, only | attributes
How many indicators are present in Schema? | 7
XML DOM is: | XML Document Object Model
XML DOM defines a standard way for | accessing and manipulating XML documents
The DOM is separated into how many different parts? | 3
XML DOM defines a standard set of objects for XML documents only. | True
The XML DOM is language and platform | independent
The XML DOM define a standard set of ______ for XML | objects
The DOM treats the XML document as | treestructure
Each attribute,element and text in the XML document represents a | node in the tree
Both Mozilla and Internet Explorer support W3C's DOM specification. | True
There are differences between Internet Explorer's DOM and Mozilla's DOM. The most important difference is that how they handle | whitespace text nodes
We can navigate between nodes with the use of their ________ to each other. | relationship
Which of these are not the valid XML DOM relationships? | nextNode
Internet Explorer will skip whitespace text node that are generated between nodes (e.g. newline characters), while Mozilla will not. | True
The ________ method returns a node list that contains all elements with the specified tag name in the same order as they appear in the source document. | getElementsByTagname()
The ________ method can be used to display the value of the specified attribute. | getAttribute()
The ______ method can be used to remove the specified node. | removeChild()
How many parameters are there for deleteData() method ? (st art, length) | 2
The _____ method creates the new element node. | createElement()
How many parameters are there for replaceData() method ? (start, length,string) | 3
The _______ method is used to remove the attribute node. | removeAttributeNode()
XML cannot be used with HTML. | False
XML is more advantageous to use than a fixedlength database system because | All of the above.
SAX is | An XML parser
PCDATA is | An XML element that contains parsed character data
The Document Object Model | Is an XML parser
You must use a parser to read an XML document. | False
XML stores data in fixed lengths. | False
XML is a subset of | SGML
XML is used for web services. | True
An XML element can contain other XML elements | True
A parent element cannot contain another parent element. | False
An attribute contains a | Name/value pair
The asterisk at the end of an element name in a DTD means its | The DTD contains zero to many of this element
What does the parser do with the CDATA section of an XML document? | Passes the data to the application that uses the XML document without any translation or interpretation
The DOCTYPE is used to | Identify the DTD for an XML document
A child element can be a parent element. | True
All XML markup tags must have an attribute | False
Special symbols can be inserted into an XML document using | A UNICODE value
You avoid conflict between an XML special character and information in an XML document by using a comment. | False
A processing command is removed from an XML document before the XML document is passed along to the application that uses the XML document. | False
An XML document must contain all elements declared in the DTD | False
PCDATA refers to | Parsed character data
A question mark following the name of a child name in the declaration of a parent element means | The child element is optional.
What is address, phone in the declaration ? | A group
What is this: ? | References a shared DTD
An image tag is an example of an EMPTY element. | True
All XML markup tags must have an attribute. | False
An element name can begin with | All of the above
You cannot set valid options when declaring an attribute. | False
REQUIRED specifies that an element is required in all XML documents that use the DTD. | False
An XML schema is used to define a complex type | True
type=fiintegerfl means | Only integers can be used in the corresponding element.
xmlns:xs=fihttp://www.w3.org/2001/XMLSchemafl is used to | Identify the XML schema specifications used in the XML schema
The xs:sequence tag | Specifies the sequence in which elements must appear in an XML document
xsi:schemaLocation=ficustomers.xsdfl is used to | Identify the location of the XML schema
You can require a specific value for an attribute by setting the value for fixed. | True
A regular expression can be used to specify complex restrictions for the content of an element. | True

A facet is a valid value that can be assigned to an attribute. | True
The xs:enumeration tag is used to define a valid value for an attribute. | True
XML can only be transformed into HTML or XHTML | False
Instructions for transforming an XML document are contained in the | XSL stylesheet
The statement states | For each customer element of the source document thats a child of customers
The element is used to | Extract text from the source document
The statement is used to | Select the id attribute
The element contains only XSL elements. | False
The element instructs the CSS to evaluate a condition before extracting an element. | False
In order to sort numeric values, you must set the to | datatype=finumberfl
You can repeat lines of code within the XSL stylesheet by defining an apply template. | False
Only a browser can access a result document. | False
The SAX parser is able to transverse an XML document | False
The SAX parser creates a node by using | None of the above
The SAX parser reacts to a new element by using | startElement()
Which of the following is represented as a node in the tree a DOM parser creates? | All of the above
A Java transformer can use | All of the above
The same version of a DOM parser must be used on all computers. | False
A Stream is a series of characters that can be the results of transformation performed by a Java transformer. | True
A SAX parser | Reads a block of an XML document at a time
You should use a SAX parser if a DOM parser is unable to load the XML document into memory. | True
The appendChild() method links a node to the current node. | True
SaxonB is the only software that can process an XQuery. | False
What kind of clause is used to specify the filter criteria? | where clause
$x is an | Variable
Order by | Places all return values in ascending order by default
The where clause | Specifies the filter criteria
All functions used by an XQuery are built in functions. | False
The data() function returns the text value of a variable. | False
A constructor | Converts information contained in an XML document to another data type
The doc() function retrieves an XML document. | True
The roundhalftoeven() function rounds half the value returned by a function. | False
MSXML can only be used with JavaScript. | False
The async = false means | Statements will not execute until the XML document is being loaded.
firstChild is a | Property containing a reference to the first child of an element
createElement(fititlefl) means | Create a new XML element
fi/catalog/cd[@upc=fi + upc + fi] means | Find the upc attribute that matches the value of the upc variable in the cd element
An XML document can be validated against a DTD by calling the validate() method. | True
The appendChild() appends a node to the end of an XML document. | True
The version is specified in ActiveXObject(fiMSXML2.DOMDocument.4.0fl) because | Versions are designed to coexist with previous versions.
The loadXML() method is used when the document is passed as a string. | True
getAttribute(fiupcfl) retrieves the value of the upc attribute. | True
Which of the following is (are) a valid XML name(s)? | :3:3:5:7
DOM 2 doesn't provide mechanism for interrogating and modifying the namespace for a document. | False
The DOM specification describes how strings are to be manipulated by the DOM by defining the datatype _______. It is encoded using _______ encoding scheme. | DOMString, Unicode
An MNC receives at its headquarter from its subsidiaries, XML documents containing various reports of that subsidiary. These reports need to be displayed to the person responsible at the headquarter for that subsidiary in a userfriendly manner (allowing searches through the document) and the person is allowed to make any changes/comments that he/she desires. Once the user is done with all the changes/comments the information needs to be fed into the central database. Which of the following is MOST appropriate for processing these XML documents? | DOM
Which of the following is an XMLbased service IDL that defines the service interface and its implementation characteristics. | WSDL
XML document must be valid? | True
Every XML document must be well formed | True
Every XML document must have an associated DTD or schema | False
XML preserves white spaces | True
What makes XML more powerful than HTML? | Its ability to adapt to new uses
Unlike most other markup languages, including HTML, XML allows you to do what? | Create new tags
In what year did the World Wide Web Consortium release its draft of XML? | 1996
What organization presented the first version of Starndardized Generalized Markup Language (SGML) in 1980? ) | American National Standards Institute (ANSI)
You can use XSL Transformation (XSLT) to convert database files described by XML to Structured Query Language (SQL) statements, which creates the tables, indexes and views that the XML data describes. | True
________ is a markup language for describing how content is rendered and _______ is a markup language for describing structured data—content is separated from presentation. | HTML, XML.
Which of the following is not an extension of XML? | SGML.
Which of the following XML attribute names is invalid? | I am not valid |   
Which of the following things is unspecified in the following line of code?<!DOCTYPE letter SYSTEM "letter.dtd"> | The type of browser you are using.
Which of the following are tags is used to define rules for an element? | <!ELEMENT ... (#PCDATA)>
The question mark (?) operator indicates | either zero or one occurrence.
Which of the following is not a keyword used for default settings in an! ATTLIST element? | #DEFINE
Which of the following elements is not valid inside a group element in an XBRL document? | value
Which of the following XML based markup languages provides a protocol for business transactions on the Internet? | cXML.
The ________ attribute is added to a TABLE element’s opening tag to bind a data island to a table. | DATASRC
Which DOMDocument method is used to create a new attribute? | createAttribute
The ________ element generates the markup for an element of the specified name in the output HTML. | xsl:element
Which of the following is not a type of DTD? | Table based.
The ________ parses and translates all inbound and outbound messages going to and from a business. | BizTalk Server.
All Biztalk documents have the root element ________. | BizTalk
SOAP stands for | Simple Object Access Protocol.
Microsoft's version of scripting that uses the Java syntax is called ________. | Jscript
________ was originally created by ________. | JavaScript, Netscape
The default scripting language for Netscape and Internet Explorer is ________. | ECMAScript
In the following line, the word document is a ________ which resides in the computer’s memory and contains information used by the script. document.writeln("Hello World"); | object
In the following line, the word writeln is a ________ which performs a task or action in the script. document.writeln("Hello World"); | method
document.writeln("Hello World"); | Hello World
The line window.alert("Hello world") will display output in ________. | a dialog box
The \n,\t, \r escape sequences do not affect HTML rendering unless they are used between which tags? | <PRE></PRE>
Consider the following script. What is wrong with the following code?<SCRIPT LANGUAGE = "JavaScript">var firstNumber,secondNumber;thirdNumber;thirdNumber =parseInt( window.prompt( "Enter an integer", 0 ) );document.write( thirdNumber );</SCRIPT> | The word var must be placed before thirdNumber in line 4.
What would the browser display if the following script was executed and the user entered 5 at both prompts? <SCRIPT LANGUAGE = "JavaScript">var firstNumber = window.prompt("Enter an integer", 0);var secondNumber = window.prompt("Enter an integer",0);var thirdNumber;thirdNumber = firstNumber + secondNumber;document.write( thirdNumber ); </SCRIPT> | 55
What is the result of the statement 17 % 5? | 2
Which of the following selections does not follow the rules of operator precedence? | parentheses, subtraction, modulus
What is the evaluation of the following expression?((3+ (5 + 4) * 7) + 4) / 5 | 14
Which of the following is not a valid equality or relational operator? | =
________ is an artificial and informal language that helps programmers develop algorithms. | Pseudocode
Which of the following contradicts the notion of structured programming? | goto
The word sequence in the term sequence structure refers to the sequence of ________. | JavaScript instructions in a script
Which of the following is not one of Bohm and Jacopini's three control structures? | goto-less structure
Which of the following flowchart symbols indicates that a decision is to be made? | diamond
Which of the following is not a JavaScript selection structure? | for/in
Which of the following is a JavaScript repetition structure? | do/while
Which of the following is not a JavaScript keyword? | sub
Which of the following statements is correct? | if ( studentGrade >= 60 )document.write( "Passed" );
What would the browser display if the following code is executed in a script? var x = 11, y = 14; if ( x > 13 )if ( y > 13 ) document.writeln( "x and y are > 13" ); else document.writeln( "x is <= 13" ); | x is <= 13x
What would the browser display if the following code is executed in a script?var grade = 59 if ( grade >= 60 ) document.writeln( "Passed." ); else document.write( "Failed. " ); document.writeln( "You must take this course again." ); | Failed.
What would the browser display if the following code was executed in a script? var product = 0; while ( product <= 25 ); product = 2 + product; | nothing, the script would result in an error
What would the browser display if the following script is executed? <SCRIPT LANGUAGE = "JavaScript"> var count = 0, total = 0; while ( count <= 5 ) { total = total + 10; count = count + 1;} document.write(total); </SCRIPT> | 60
What would the browser display if the following script is executed? <SCRIPT LANGUAGE = "JavaScript"> var count = 5, total = 0; while ( count > -1 ) { total = total – 10; count = count – 1; } document.write(total);</SCRIPT> | -60
If the string passed to parseInt contains a floating-point numeric value, parseInt will ________. | truncate the floating-point part
If the string passed to parseInt contains text characters, parseInt will ________. | return NaN
What type of loop is shown in the script below? <SCRIPT LANGUAGE = "JavaScript"> var gradeValue = 0, total = 0, grade = 0; while ( gradeValue != - 1 ) { total = total + gradeValue; grade = window.prompt("Enter Integer Grade, -1 to Quit:", "0"); gradeValue = parseInt( grade ); }</SCRIPT> | sentinel controlled
The word top in the term top-down stepwise refinement refers to which of the following? | the single statement that completely represents the program
What is the value of i after the following statements? i = 2; i += 25; | 27
What is the value of i after the following statements?i = 2;i++; | 3
What is the value of i after the following statements? i = 2; i--; i--; | 0
Which of the following is not required for counter-controlled repetition? | sentine
What is wrong with the following line of code?<P><FONT SIZE='5'>This is a test.</FONT></P> | Nothing
What would the browser display if the following script was executed? <SCRIPT LANGUAGE = "JavaScript"> for( int i = 0; i < 5; i++ ) document.write("X"); </SCRIPT> | Nothing, the script would generate an error
What would the browser display if the following script was executed? <SCRIPT LANGUAGE = "JavaScript"> for( var i = 0; i < 5; i++ ) document.write("O"); </SCRIPT> | OOOOO
Which of the following are declared correctly? | for (var i=0;i<100;++i ) { statement; }
Which of the following is declared correctly and will not result in an error assuming x = 2 and y = 30? | for ( var j = x; j <= 80 * y; j += 5 / x )
Which of the following is true? | for loops increment after the body statement is performed and while loops increment in either condition or body
What is the value of num after the following statement is performed? num = 2 * Math.pow( 2, 3 ); | 16
The ________ multiple selection structure is used to handle multiple decisions making and can be used to replace multiple if and if/else statements. | switch
Every switch structure must have ________ labels which are separated by the keyword break. | case
In a switch structure, the ________ case clause is used to process exceptional conditions and is usually listed last. | default
Consider the following code selections. Assume count is initialized to 7 and num is initialized to 0.ii) do { while ( count < 6 ) num = count; num = count; } while ( count < 6 ) What will the value of num be for i) and ii) respectively after the loops have been executed? | 7, 0
What would the browser display if it executed the following script? <SCRIPT LANGUAGE = "JavaScript"> for ( var count = 1; count <= 10; ++count ) { if ( count == 5 ) break; } document.writeln( count ); </SCRIPT> | 5
What would the browser display if it executed the following script? <SCRIPT LANGUAGE = "JavaScript"> for ( var count = 0; count < 10; ++count ) { if ( count == 5 ) continue; } document.writeln( count );</SCRIPT> | 10
What would the browser display if it executed the following script? <SCRIPT LANGUAGE = "JavaScript"> var total = 0; stop: { // labeled compound statement for ( var i = 0; i < 5; ++i ) { for ( var j = 0; j < 2 ; ++j ) { if ( i == 2 ) break stop; total++; } total++; } total++; } total++; document.writeln( total ); </SCRIPT> | 7
What would the browser display if it executed the following script?<SCRIPT LANGUAGE = "JavaScript"> var total = 0; nextLoop: for ( var i = 0; i < 5; ++i ) { for ( var j = 0; j < 2 ; ++j ) { if ( i < 2 ) continue nextLoop; total++; } total++; } total++; document.writeln( total ); </SCRIPT> | 10
Which of the following will not evaluate to true? | false |      |    false
Which of the following will evaluate to false? | false && false
Which of the following is false? | In any flowchart, control structure (sequence, if, if/else, switch, while, do/while or for) can be replaced by 2 rectangle (actions) in sequence.
According to Bohm and Jacopini, which of the following does not follow structured programming? | Nested building blocks
The best way to develop and maintain a large program is to construct it from small, simple pieces called ________. | modules
The technique of developing and maintaining a large program by constructing it from small, simple pieces is called ________. | divide and conquer
Modules in JavaScript are called ________. | functions
The “prepackaged” functions that belong to JavaScript objects such as Math.pow and Math.round are often called ________. | methods
All variables declared in function definitions are ________. | local variables
Functions are invoked by writing the name of the function, followed by the function's ________ in closed parenthesis. | arguments
Function definitions often contain ________ which are considered to be local variables and correspond with the arguments in the function call. | parameters
Which of the following is a legal function call for the function definition provided below? function square( y ) { return y * y;} | square(7+2);
What is the result of writing the keyword var in a function parameter list? | The parameter following the keyword would become a static variable.
What would the function cube return, assuming it is called with the line cube(3). function cube(y); { return y * y * y; } | JavaScript runtime error
What does the following statement do?Math.floor( Math.random() * 12 ); | This creates a random number from 0 up to but not including 12.
The value a in the following statement is called the ________ and the value b is called the ________. face = Math.floor( a + Math.random() * b ); | shifting value, scaling factor
Where on the browser will the command window.status( "text" ) display output? | on the status bar
The style of programming in which the user interacts with a GUI component is called ________ programming. | event-driven
If the HTML form game has a text field named point in it, what is the proper way to set the text associated with point to 10? | game.point.value = "10"
The ________ of a variable is the period during which it exists in memory. | duration
Identifiers that represent local variables in a function ________. | exist while the function in which they are declared is still active
Local variables have ________ duration. | automatic
Identifiers which have static duration ________. | are globally accessible to the script
Script-level variables have ________ duration. | static
The _______ of an identifier for a variable or function is the portion of the program in which the identifier can be referenced. | scope
Giving a local function variable the same name as a global variable will result in which of the following? | The local variable will "hide" the global variable.
_________ are data structures consisting of related data items (sometimes called collections of data items). | arrays
To refer to a particular location or element in the array, we specify the name of the array and the ________ of the particular element in the array. | position number
Which of the following is the proper method to access the length of the array arr[]? | arr.length
To divide the value of the seventh element of array a by 2 and assign the result to the variable x, we would write ________. | x = a[ 6 ] / 2
Which of the following is the proper method to dynamically allocate memory to an array of 100 elements? | var c = new Array( 100 );
The statement on line 1 ________ the array while the statement on line 2 ________ the array. 1 var c; 2 c = new Array( 12 ); | declares, allocates
Initializing an array directly involves using the ________ control structure. | for loop
What would the browser display if this script was executed?<SCRIPT LANGUAGE = "JavaScript"> var c = new Array(8) for( var i = 0; i < 8; i++ ) c[i] = i; document.write(c[8]) </SCRIPT> | undefined
What would the browser display if this script was executed?<SCRIPT LANGUAGE = "JavaScript"> var c = new Array(8) for( var i = 0; i < 10; i++ ) c[i] = i; document.write(c[9]) </SCRIPT> | 9
Which of the following is an illegal array initialization statement? | var n = new Array( 5 ); n = [ 10, 20, 30, 40, 50 ];
In the following statement, the range of the variable element is ________. for ( var element in theArray ) total2 += theArray[ element ]; | 0 to the array length - 1
What is the value of num assuming that all 12 elements of array test are initialized to 3? ++test[ 7 ]; var num = test[ 7 ]; | 4
In JavaScript, all objects and Arrays are passed to functions by ________. | reference
Call-by- ________ is the method of passing a copy of the argument's value to a function. | value
Call-by- ________ is the method of passing the argument's actual location in memory to a function. | reference
In JavaScript, numbers and boolean values are passed to functions by ________. | value
What is the effect of the join statement in the following code? var theArray1 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ], theArray2 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]; var value = theArray1.join( " " ); | The join method will create a string from the values in theArray1..
What will the browser display if the following script is executed?< SCRIPT LANGUAGE = "JavaScript" > var theArray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]; modifyArray( theArray[ 3 ] ); document.write( theArray.join( " " ) ); function modifyArray( i ) { i = 11; }</SCRIPT> Nothing, the browser will generate an error. | 1 2 3 4 5 6 7 8 9
The java sort method uses ________ to sort the array passed to it. | string comparison
MC: How many comparisons will a linear search function makes before finding a match if the search key has a value of 3 and the array x has the values: x[ 0 ] = 0 x[ 1 ] = 2 x[ 2 ] = 1 x[ 3 ] = 4 x[ 4 ] = 3 x[ 5 ] = 3 | 5
What would the browser output if the following script is executed? < SCRIPT LANGUAGE = "JavaScript" > var array = [ [ 1, 2, 3 ], [ 1, 2, 3 ] ]; for ( var i in array ) { for ( var j in array[ i ] ) document.write( array[ i ][ j ] + " " ); document.writeln("<BR>"); } < /SCRIPT > | 1 2 3 1 2 3
Each object has ________ or data and ________ or behavior. | attributes, methods
Which of the following is false? | Objects do not have the property of information hiding.
An object's methods and attributes are accessed by writing the name of the object followed by the ________. | dot operator
What does the value string contain after the following code is executed? var string = "Good luck on the test"; string = string.charAt( 3 ); | d
What does the value string contain after the following code is executed? var string = "Good luck on the test"; string = string.split( " " ); | Good luck on the test
What does the value string contain after the following code is executed? var string = "Good luck on the test"; string = string.link("www.deitel.com") | a link to www.deitel.com with the text "Good luck on the test"
What is the value of s3 after the following code is executed? var s1 = one, s2 = two, s3 = three; s1.concat(s2) s3 = s1; | onetwo
What is the value of s1 after the following code is executed? var s1 = "deitel and associates" s1 = s1.slice( 6 ) | and associates
Which of the following methods would you use to search a character for a specific string? | indexOf
Which of the following methods would you use to convert a list of Unicode values into a string containing the corresponding characters? | fromCharCode
What will value contain after the following code is executed? var value = new Date(); value = value.valueOf(); | a large integer representing the number of milliseconds between midnight January 1, 1970 and the current date
Which of the following methods does the JavaScript Boolean object not possess? | toInt
Which of the following methods does the JavaScript Number object not possess? | valueOf
________ allow you to specify the style of your page elements (spacing, margins, etc.) separately from the structure of your document. | Cascading Style Sheets
________ are declared in each individual HTML element using the keyword STYLE. | Inline styles
Text style sheets use which of the following MIME types? | text/css
In the body of a style sheet, CSS rule properties are followed by a ________. | colon
Multiple CSS rule properties in style sheets are separated by a ________. | semicolon
How will the following CSS rule alter the Webpage if it is applied in a style sheet? H1 { font-family: Arial, sans - serif } | All text enclosed by H1 tags will have the sans-serif font if Arial is not supported by the system.
What is the purpose of the line beginning with A.nodec in the following script? | The .nodec appended to A is an extension of class styles and will apply only to A elements that specify nodec as their class
What is the significance of the line? C[9] LI EM { color: red; font-weight: bold } | It will apply the specified style to text enclosed by the EM tags which are within LI tags.
What is the significance of the following CSS rule?LI, EM { color: red;c font-weight: bold } | It will apply the specified style to text enclosed by either LI or EM tags.
External style sheets are saved with the ________ extension. | .css
In which of the following do you set the MIME type of the external style sheet? | <LINK></LINK>
If an element's position is declared as absolute then ________ . | positioning is set according to the margins of its parent element
Setting an element's position to relative is done within which of the following? | <STYLE></STYLE>
Which of the following settings for a background image can be modified to create a "watermark" effect where scrolling will not move the image from its set position. | background-attachment
Which of the following settings can be altered to change the darkness of the font? | font-weight
When using the width, height and overflow properties of an element, position must be ________. | not absolute
In order for elements to be floated, position must be ________. | not absolute
Elements which have absolute position are automatically ________ the text flow. | removed from
The outermost layer of the box model is the ________. | margin
The ________ is the distance between the content inside an element and the edge of the element. | padding
Which of the following is not a border property? | shape
The CSS specification gives precedence to ________. | author styles over user styles
What does the following CSS rule do?.note { font-size: 1.5em } | It multiplies all text object font sizes with CLASS = "note" by 1.5.
The simplest way to reference a DHTML element is by its ________ attribute. | ID
Consider the following HTML document. <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN"> <HTML> <HEAD> <TITLE>Object Model</TITLE> <SCRIPT LANGUAGE = "JavaScript"> function start() { alert( pText.innerText ); pText.innerText = "Thanks for coming."; } </SCRIPT> </HEAD> <BODY ONLOAD = start()> <P ID = "pText">Welcome to our Web page!</P> </BODY> </HTML> Which of the following selections a true statement? | The pText object does not have an innerText attribute.
The all collection is a property of the ________ object. | document
Consider the following HTML document. <HTML> <HEAD> <TITLE>Children Collection</TITLE> <SCRIPT LANGUAGE = "JavaScript"> </SCRIPT> </HEAD> <BODY> <P></P> </BODY> </HTML> Select the true statement. | The SCRIPT element is a direct child of the HEAD element.
Which of the following is the proper way to dynamically access the background color from within the script? | document.body.style.backgroundColor
Which of the following is the proper way to dynamically access the border width from within the script? | document.body.style.borderWidth
CSS positions can be either absolute or ________. | relative
What is the significance of the second function argument in the following line? window.setInterval( "run()", 100 ); | The value sets how often to run the function.
Which of these is the proper function that stops a windows timer. | clearInterval
Consider the following HTML document. <HTML> <HEAD> <TITLE>Frames collection</TITLE> </HEAD> <FRAMESET ROWS = "100, *"> <FRAME SRC = "top.html" NAME = "first"> <FRAME SRC = "" NAME = "second"> </FRAMESET> </HTML> Which of the following is the proper way to access the frame "second" from the script of an outside document? | parent.frames( " second" )
The ________ object contains information about the Web browser that is viewing the page. | navigator
What is stored inside the variable value after the following line of code is executed? var value = navigator.appVersion; | It stores a string representing the version of the browser and other information.
With the ________, scripts can respond to a user moving the mouse, scrolling up or down the screen or entering keystrokes. | event model.
The ________ attribute of the ________ element specifies another element that is identified by its ________ attribute. | FOR, SCRIPT, ID.
The ONLOAD event fires ________. | whenever an element finishes loading successfully.
What does the following HTML document do? <HTML> <HEAD> <TITLE>DHTML Event Model - ONLOAD</TITLE> <SCRIPT LANGUAGE = "JavaScript"> var value = 0; function startTimer(){ window.setInterval( "updateTime()", 1000 ); } function updateTime(){ value++; pText.innerText = value; } </SCRIPT> </HEAD> <BODY ONLOAD = "startTimer()"> <P><A ID = "pText">0</A></P> </BODY> </HTML> | It counts the number of seconds elapsed viewing the page.
The ONERROR event is used to handle all of these except. | User errors.
Which of these is the command to enable error handling on a Web page? | window.onError
Event ________ fires constantly whenever the mouse is in motion. | ONMOUSEMOVE
If you used the ONMOUSEMOVE event to capture mouse events over an image, which of the following event properties would you use to capture the location of the mouse cursor relative to the image boundaries? | offsetX / offsetY
What does the srcElement event property contain? | A reference to the element that fired the event.
When the mouse moves over an element which of the following is triggered? | ONMOUSEOVER
The ONFOCUS event fires when ________. | an element is clicked.
The ONBLUR event is associated with ________. | an element losing focus.
What is the effect of the following line of code? window.event.returnValue = true; | It returns a true value to signal the browser to continue its default event-handling action.
Event bubbling is _______. | the process of child elements passing events to their parent elements.
________ fires when the right mouse button is clicked. | ONCONTEXTMENU
Which of the following is false? | Filters and transitions cannot be adjusted dynamically.
Which browsers can view the visual effects created by filters and transitions? | Netscape
Which of the following is the proper method to apply the fliph filter to the following H1 element? <H1 ID = "test">This is a test</H1> | The filter cannot be applied to this element.
The chroma filter is used to ________. | apply transparency effects dynamically
Which of the following is true regarding the DHTML mask filter: | It is used to create images with transparent foregrounds
Which is the proper method to set the mask color? | filter: mask( color = #CCFFFF )
Which of the following is true? | The invert filter applies a negative image effect.
Which of the following is true? | The shadow filter property can be set to exactly 8 different values
Which of the following best describes the visual effect that alpha is used for? | replacing text colors
Which of the following is not a property of the glow filter? | direction
Which of the following is not a property of the blur filter? | All of these are properties of the blur filter.
Which of the following is not a property of the wave filter? | direction
The ________ property of the wave filter determines how many waves will be applied in the affected area. | freq
The ________ property of the wave filter shifts the effect in space. | phase
The ________ property of the wave filter determines the wave's amplitude. | strength
Which of the following is true? | The dropShadow filter does not have a direction attribute.
The first two parameters in the addPoint method ________. | sets the point source of the light
The third parameter in the addPoint method ________. | sets the height of the point source
The last parameter in the addPoint method ________. | sets the strength percentage
Which of the following is the proper method to apply a transition effect? | element.filters( "blendTrans" ).apply();
The main difference between the blendTrans filters and the revealTrans filters is _________. | The revealTrans filter has more transition effects than the blendTrans filter
________ makes it now possible for data manipulation to be shared by the server and the client. | all of the above
Which of the following is false? | The TDC outputs an interface like Microsoft Excel.
Which of the following is true? | Text qualifiers encapsulate the data in a field.
The @ character is referred to as a________. | text qualifier
The | character is referred to as a________. |   field delimiter
Which of the following is not a valid PARAM setting for TDC controls? | <PARAM NAME =CLASSID: CLSID:333C7BC4-460F-11D0-BC04-0080C7055A83>
What does the following statement do? <SPAN ID = "colorName" STYLE = "font-family: monospace" DATASRC = "#Colors" DATAFLD = "ColorName"></SPAN><BR> | It assigns the TDC control named Colors to a span element for display purposes.
What will value contain after the following code is executed assuming that Colors is a valid TDC control? value = Colors.recordset; | It will contain the current indexed item of the datasource.
When the TDC is bound to an element, the element's DATASRC attribute should be set to ________. | the name of the TDC object preceded by a #
The binding of TDC to a table requires setting the DATASRC property in the ________. | table element
Which of the following is true? When TDC is bound to a table, the user must allocate enough table data elements to accomodate all of the | The TDC handles creating table cells for output.
The JavaScript keyword this always refers to ________. | the element in which the statement resides.
The TDC method Reset is used for ________. | refreshing the display
Which of the following is false? | The Sort property automatically displays the new order of the data.
The TDC Filter property allows you to ________. | filter out all records that do not have a cell matching the text you specify.
The Filter property should be in which of the following formats? | ColumnName = FilterText
How a data source is displayed by the browser depends on the ________. | element that the data source is bound to
Which of the following is NOT done with JavaScript? | RGB Colors
It is usually advisable to keep as much JavaScript as possible in which section? | Head
JavaScript lines end with what? | semicolon
Which of the following is NOT a type of popup box? | Radio
The most common way to assign a value to a variable is by using what ? | Equals sign
a++; is the same as which of the following ? | a=a+1;
To keep the browser from performing a script as soon as it is loaded you need to write the script as a what ? | function
Actions that can be detected by javascript are called? | Events
A variable that your webpage can store on or retrieve from the users computer is known as ? | Cookie
In JavaScript, capital letters are different from lowercase letters? | Yes
Which is detected when the mouse moves over a link? | overMouse event
How do you read the first character in a string? | stringName.charAt(0);
Which has no syntax error? | alert("hello +3+ times");
Which method will open a new window? | window.open(PageURL,WindowName,settings);
Which method is used to search for a substring? | stringVariable.indexOf(subString)
Inside which HTML element do we put the JavaScript? | <script>
What is the correct JavaScript syntax to write "Hello World"? | document.write("Hello World")
Where is the correct place to insert a JavaScript? | Both the <head> section and the section are correct
What is the correct syntax for referring to an external script called "xxx.js"? | <script src="xxx.js">
Which best describe void? | operator
Which top level XSLT element is used to define a variable in a stylesheet or template and to assign it a value? | xsl:variable
The xsl:template is used to | Define a template that can be applied to a node to produce desired output
The xsl:if is used to: | Evaluate a condition expression against the content of the xml file
In Xpath, which node has a parent node and it may have child node too: | Text
In Xpath, how many type of nodes in the tree: | 7
See the snipset below and choose one answer: <xsl:for-each select=”LIST//TITLE”>…</xsl:for-each> | Match all <TITLE> elements one or more level deep in the <LIST> element
See the snipset below and choose one answer: <xsl:template match=”BOOK[position()!=2]”> <xsl:value-of select=”.”/> </xsl:template> | Select all BOOK elements that are not the second child of their parents.
XSLT allows any kind of data to be transformed into: | Boolean
Which one of the following is the root element of all XML Schema documents? | Schema
W3C DOM uses both tree and object model concepts: | true
Method getElementsByTagName return a node of list which will be stored as | XMLDOMNodeList object
xmlDoc.async= ‘false’ mean: | Complete document must be loaded before futher processing
Implements the method of ErrorHandler, EntityResolver, DTDHandler : | DefaultHandler
SAX support random access: | false
Represents a collection of attribute nodes: | XMLDOMNamedNodeMap
In SAX, to provide customized DTD handling, application need to implement : | DTDHandler
Method hasChildNodes of XMLDOMNode mean | determine if a given node has child nodes or not
Property documentElement of DOMDocument object return: | An object representing the root element if the XML document
XMLDOMNode implements the interface | IXMLDOMNode
Method characters() of ContentHandler interface receives events for | character data
The item() method of XMLDOMNodeList and XMLDOMNamedNodeMap return the node present at specified index | true
The ContentHandler class provides implementations for the core interface of SAX: | true
The resolveEntity method of EntityResolver interface allow the application | To resolve external entity
Microsoft’s Internet Explorer Web browser contains a ________ that executes VBScript code. | interpreter
________ is a technology that allows a server-side script to create dynamic content that is sent to the client’s browser. | ASP
VBScript is ________. | case sensitive like JavaScript
The VBScript '&' operator is used for ________. | string concatenation
The VBScript '+' operator is used for ________. | both a and b
The VBScript operator for inequality is which of the following? | != <>
Which of the following is not a VBScript sub-type? | variant
What does the Option Explicit statement do? | It does not allow the programmer to use variables without declaring them first.
The VBScript control structures behave ________ to their JavaScript counterparts and the VBScript control structure syntax is ________ the JavaScript syntax. | differently, different than
What is wrong with the following VBScript code? If (s = t) Then u = s + t ElseIf (s > t) Then u = r Else u = n End If | Nothing
What is wrong with the following VBScript code? Select Case x Case 1 Call MsgBox("1") Case 2 Call MsgBox("2") Case Else Call MsgBox("?") End Select | Nothing.
Which VBScript function returns an integer indicating the variant subtype? | VarType
What is the underscore character used for in VBScript? | It is used as a line continuation character
Which of the following is true regarding the following code? MsgBox( "VBScript is fun!", , "Results" ) | The function should be preceded by the keyword Call
What does the ScriptEngine function do? | It returns the type script being used.
The VBScript ________ function has the same purpose as JavaScript's window.prompt method. | InputBox
Which of the following is a valid VBScript conversion function? | CInt
Which of the following is true regarding Function procedures? | The procedure can return a value by assigning a value to the Function procedure name.
Which of the following is true regarding VBScript arrays? | VBScript arrays can be dynamically allocated.
Which of the following string functions returns a string that does not contain any leading or trailing space characters? | Trim
Which of the following functions searches a string for a substring and returns an index of the found substring if it is found? | Instr
In VBScript, the unit of object-oriented programming is the ________. | class
implemented is called ________. | data abstraction
The keywords Property Let and Property Set are used for ________. | accessing Private class variables
Which of the following is true regarding VBScript classes? | The Property Let method is used for non-object subtypes
<?xml version="1.0" encoding="UTF-8"?> <!DOCTYPE library[ <!ELEMENT library (book)?> <!ELEMENT book (booktitle, author, price)> <!ELEMENT booktitle (#PCDATA)> <!ELEMENT author (#PCDATA) #REQUIRED> <!ELEMENT price (#PCDATA)> ]> <library> <book> <booktitle>The Firm</booktitle> <author>John Grisham</author> <price>99</price> </book> <book> <booktitle>Coma</booktitle> <author>Robin Cook</author> <price>99.5</price> </book> </library> | The XML document is not validation because the book element is larger than one
Which of the following packages present in JAXP belong to SAX? | None of the others
The abc.xsd fragment <xsd:element name="person" type="personType"/> <xsd:complexType name="personType"> <xsd:sequence> <xsd:element name="firstname" type="xsd:string"/> </xsd:sequence> </xsd:complexType> The cde.xml fragment <person xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns='http://xml.netbeans.org/schema/abc' xsi:schemaLocation='http://xml.netbeans.org/schema/abc abc.xsd'> <firstname>12345</firstname> <lastname>KhanhKT</lastname> </person> Choose the correct statement | The cde.xml is not valid because the parser not determine lastname
<?xml version="1.0" encoding="UTF-8"?> <email> <to>Joe</to> <from>John</from> <heading>Final Exam</heaDing> <body>Try your self</body> </eMail> | The document is not well-formed
Given some statement (a) window.handleError (b) window.status = "Error: " + errType + " on line " + errLineNum; (c) window.onHandleError (d) window.onError Which of these is the command to enable error handling on a Web page? | d
Which Exception is used when JAXB operation is applied? | JAXBException
What are difference between schema and DTD? | DTDs do not have a facility to describe numbers, dates but the Schemas do
Which of the following types of parses is issued for event-based parsing? | Both SAX and StAX
Which syntax is used to declare the attribute of an element in DTD? | None of the others
How can the data source be validated against the associated schema in unmarshalling operation? | Using setSchema method or using setValidating method
Consider the xml fragment 15. <aaa></aaa> 16. <bbb></bbb> Choose the correct answer when the SAX is used | At least callback method in content handler will be triggered after line 15 and before line 16
Microsoft's version of scripting that uses the Java syntax is called ________. | None of the others
Given: <HTML> <HEAD> <TITLE>DHTML Event Model - ONLOAD</TITLE> <SCRIPT LANGUAGE = " "> var value = 0; function startTimer(){ window.setInterval( "updateTime()", 1000 ); } function updateTime(){ value++; pText.innerText = value; } </SCRIPT> </HEAD> <BODY ONLOAD = "startTimer()"> <P><A ID = "pText">0</A></P> </BODY> </HTML> | . It counts the number of seconds elapsed viewing the page
Which method is used to get all descendant of current element in traversing DOM tree? | getChildNodes
Which features must the well-formed XML document have? | None of the others
Which exception is used to catch Exception when the XMLEventReader is used? | XMLStreamException
What does the xsl:apply-imports for? | Apply the template to selected location from xsl:apply-imports
To refer to a particular location or element in the array, we specify the name of the array and the ________ of the particular element in the array | position number
Why does DTD need? | . place preconditions on the data the programs read
Which contains in XML document's prolog? | XML Declaration or/and Document Type Declaration
< SCRIPT LANGUAGE = " " > var theArray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]; modifyArray( theArray[ 3 ] ); document.write( theArray.join( " " ) ); function modifyArray( i ) { i = 11; }</SCRIPT> What will the browser display if the following script is executed? | 1 2 3 4 5 6 7 8 9
<SCRIPT LANGUAGE = " "> var c = new Array(8) for( var i = 0; i < 10; i++ ) c[i] = i; document.write(c[9]) </SCRIPT> What would the browser display if this script was executed? | 9
Choose the correct syntax of x:parse in XML tag of JSTL | <x:parse var="x" scope="session" xml = "\${xml}"/>
Consider the Formal Public Identifier -//W3C//DTD 1.8//IND | The Formal Public Identifier is not valid because the fourth field is not valid
Which language is used to describe the DTD syntax? | Extended Backus-Naur Form
Given <?xml version="1.0" encoding="UTF-8"?> <customers> <customer password="khanhkieu"> <username>KhanhKT</username> </customer> <customer password="123456"> <username>Hatruc</username> </customer> </customers> Choose the correct XPath statement that is used to query to get password value of username "Hatruc" | //customer[username=’Hatruc’]/@password
The declaration is used to declare the xml tag library using in JSP as | None of the others
Which ways are the CSS style rules applied to HTML? | None of the others
<?xml version="1.0"?> 2. <note date="12/11/99"> 3. <to>Ravi</to> 4. <from>Amit</from> 5. <heading>Final Exam</Heading> 6. <body>Try yourself<body> 7. </note> | Line 6 contains error
Which statement is used to describe about multi-pipeline? | . XML is mapped to Bean object, then it applied to many JSP
Consider the following HTML document. <HTML> <HEAD> <TITLE>Frames collection</TITLE> </HEAD> <FRAMESET ROWS = "100, *"> <FRAME SRC = "top.html" NAME = "first"> <FRAME SRC = "" NAME = "second"> </FRAMESET> </HTML> Which of the following is the proper way to access the frame "second" from the script of an outside document? | document.frames( "second")
Given the XML code fragment <?xml version="1.0" encoding="UTF-8"?> <library xmlns=http://www.fpt.edu.vn xmlns:article=http://www.article.fpt.edu.vn xmlns:person="http://www.biolography.com.vn"> <book article:id="B0001" id="IB8976"> <article:title>The Firm</article:title> <person:author>John Grisham</person:author> <article:price>99</article:price> </book> </library> | The XML code fragment is not validated because no DTD document is referenced
<?xml version=”1.0” encoding=”UTF-8”?> <aaa> <bbb>ccc</bBb> </aaa> | The document is not well-formed
Given the dtd file: <?xml version="1.0" encoding="UTF-8"?> <!ELEMENT FINALs (CLASS1 | CLASS2)+> <!ELEMENT CLASS1 (#PCDATA)> <!ATTLIST CLASS1 count CDATA #REQUIRED> <!ELEMENT CLASS2 (#PCDATA)> <!ATTLIST CLASS2 count CDATA #REQUIRED> |   . The dtd file is valid
What are difference between XML-Enabled and XML –Native? | XML-Native are supported the query with XQuery and XPath but the XML-Enabled are supported the query with SQL embedding XPath or XQuery
Which of the following statements regarding filters and transitions is false? | . They are applied on a client computer at run time by the server.
<?xml version="1.0" encoding="UTF-8"?> <xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema"targetNamespace=http://xml.netbeans.org/schema/mail xmlns=http://xml.netbeans.org/schema/mail elementFormDefault="qualified"> <xsd:element name="mail"> <xsd:sequence> <xsd:element name="to" type="xsd:language" /> <xsd:element name="from" type="xsd:token"/> <xsd:element name="header" type="xsd:string"/> <xsd:element name="body" type="xsd:normalizedString"/> </xsd:sequence> </xsd:element> </xsd:schema> | The XML Schema is not valid because the xsd:element must include simpleType or complexType <SCRIPT LANGUAGE = " "> var total = 0; stop: { // labeled compound statement for ( var i = 0; i < 5; ++i ) { for ( var j = 0; j < 2 ; ++j ) { if ( i == 2 ) break stop; total++; } total++; } total++; } total++; document.writeln( total ); </SCRIPT> What would the browser display if it executed the following script? |   7
Xml fragment document <aaa><bbb/></aaa> XSL fragment <xsl:import href="aaa.xsl"/> <xsl:import href="bbb.xsl"/> The aaa.xsl fragment <xsl:template match="bbb">testA</xsl:template> The bbb.xsl fragment <xsl:template match="bbb">testB</xsl:template> | testB
Consider: 1. XSL processor starts the root node and performs pattern matching in the style sheet 2. The style rules of the template are applied to the content to generate a result tree 3. XSL processor analyzes the templates and patterns associated with them to process different parts of the document tree Rearranged above steps for corrected processing of XSL | 1, 3, 2
Which purpose is the schema declaration used to in XML file? | Determine instance namespace applying to XML document
How many type of XML parser does? | . Validating Parsers and Non-Validating Parsers
In the following line, the word writeln is a ________ which performs a task or action in the script document.writeln("Hello World"); | method
How many components do the JAXB Architecture provide? | Schema compiler, Schema generator, Binding runtime framework
< SCRIPT LANGUAGE = "JavaScript" > var theArray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]; modifyArray( theArray[ 3 ] ); document.write( theArray.join( " " ) ); function modifyArray( i ) { i = 11; }</SCRIPT> What will the browser display if the following script is executed? | 1 2 3 4 5 6 7 8 9
What is stored inside the variable value after the following line of code is executed? var value = navigator.version; | The navigator object does not contain an attribute named version.
XML Fragment <tomcat-users> <role rolename="admin"/> <role rolename="manager"/> <role rolename="user"/> <role rolename="tomcat"/> <user username="ide" password="ee1KER95" roles="manager,admin"/> <user username="tomcat" password="tomcat" roles="tomcat"/> <user username="khanhkt" password="trongkhanh" roles="manager,admin"/> <user username="guest" password="123456" roles="username"/> </tomcat-users>The Java code fragment using DOM API Document doc = db.parse(new File(path + "WEB-INF/tomcat-users.xml")); XPathFactory xpf = XPathFactory.newInstance(); XPath xpath = xpf.newXPath(); String exp = "//user[contains(@username, 'a')]"; NodeList node = (NodeList) xpath.evaluate(exp, doc, XPathConstants.NODELIST); Choose the correct statement. Assume that all code and file path are correct | The application can get more than one node
The declaration is used to declare the xml tag library using in JSP as | . <%@ taglib prefix=“x” uri= “http://java.sun.com/jsp/jstl/xml” %>
XML parser checks for validity and well formed ness? | True
Consider the following HTML code. <HTML> <SCRIPT LANGUAGE = "JavaScript"> <!-- document.writeln("Hello World"); // --> </SCRIPT> </HTML>What would a browser capable of scripting display when executing this code? | Hello World
An object's methods and attributes are accessed by writing the name of the object followed by the________. | dot operator
Which of the following XML attribute names is invalid? | I am not valid
Which of the following things is unspecified in the following line of code? <!DOCTYPE letter SYSTEM "letter.dtd"> | The type of browser you are using.
Which of the following are tags is used to define rules for an element? | <!ELEMENT ... (#PCDATA)
Which of the following is the correct processing instruction that specifies an XSL document (myXSL.xsl) to be used to transform an XML document. | <?xml:stylesheet type = "text/xsl" href="myXSL.xsl">
Microsoft's version of scripting that uses the Java syntax is called ________. | JScript
Consider the following HTML code.<HTML> <SCRIPT LANGUAGE = "JavaScript"> <!-- document.writeln("Hello World"); // --> </SCRIPT> </HTML> What would a browser capable of scripting display when executing this code? | Hello World
Consider the following script. What is wrong with the following code? 1 <SCRIPT LANGUAGE = "JavaScript"> 2 var firstNumber, 3 secondNumber; 4 thirdNumber; 5 6 thirdNumber = 7 parseInt( window.prompt( "Enter an integer", 0 ) ); 8 document.write( thirdNumber ); 9 </SCRIPT> | The word var must be placed before thirdNumber in line 4.
What would the browser display if the following script was executed and the user entered 5 at both prompts? 1 <SCRIPT LANGUAGE = "JavaScript"> 2 var firstNumber = window.prompt("Enter an integer", 0); 3 var secondNumber = window.prompt("Enter an integer",0); 4 var thirdNumber; 5 thirdNumber = firstNumber + secondNumber; 6 document.write( thirdNumber ); 7 </SCRIPT> | 55
Which of the following selections does not follow the rules of operator precedence? Assume that the operators on the left are evaluated first. | parentheses, subtraction, modulus
What is the evaluation of the following expression? ((3+ (5 + 4) * 7) + 4) / 5 | 14
Which of the following statements is correct? | if ( studentGrade >= 60 ) document.write( "Passed" );
What would the browser display if the following code is executed in a script? var x = 11, y = 14; if ( x > 13 ) if ( y > 13 ) document.writeln( "x and y are > 13" ); else document.writeln( "x is <= 13" ); | x is <= 13
What would the browser display if the following code is executed in a script? var grade = 59 if ( grade >= 60 ) document.writeln( "Passed." ); else document.write( "Failed. " ); document.writeln( "You must take this course again." ); | Failed.
What would the browser display if the following script is executed? <SCRIPT LANGUAGE = "JavaScript"> var count = 0, total = 0; while ( count <= 5 ) { total = total + 10; count = count + 1; } document.write(total); </SCRIPT> | 60
What would the browser display if the following script is executed? <SCRIPT LANGUAGE = "JavaScript"> var count = 5, total = 0; while ( count > -1 ) { total = total – 10; count = count – 1; } document.write(total); </SCRIPT> | -60
What type of loop is shown in the script below? <SCRIPT LANGUAGE = "JavaScript"> var gradeValue = 0, total = 0, grade = 0; while ( gradeValue != - 1 ) { total = total + gradeValue; grade = window.prompt("Enter Integer Grade, -1 to Quit:", "0"); gradeValue = parseInt( grade ); } </SCRIPT> | sentinel controlled
What is the value of i after the following statements? i = 2; i++; | 3
What is the value of i after the following statements?i = 2; i--; i--; | 0
What is wrong with the following line of code? <P><FONT SIZE='5'>This is a test.</FONT></P> | Nothing
Which of the following are declared correctly? | for (var i=0;i<100;++i ) { statement;}
What is the value of num after the following statement is performed? num = Math.round( 2.45 ); | 2
Consider the following code selections. Assume count is initialized to 7 and num is initialized to 0. i) ii) do { while ( count < 6 ) num = count; num = count; } while ( count < 6 ) What will the value of num be for i) and ii) respectively after the loops have been executed? | 7, 0
What would the browser display if it executed the following script? <SCRIPT LANGUAGE = "JavaScript"> for ( var count = 0; count < 10; ++count ) { if ( count == 5 ) continue; } document.writeln( count ); </SCRIPT> | 10
What would the browser display if it executed the following script? <SCRIPT LANGUAGE = "JavaScript"> var total = 0; nextLoop: for ( var i = 0; i < 5; ++i ) { for ( var j = 0; j < 2 ; ++j ) { if ( i < 2 ) continue nextLoop; total++; } total++; } total++; document.writeln( total ); </SCRIPT> | 10
Which of the following is a legal function call for the function definition provided below? function square( y ) { return y * y; } | square(7+2);
What does the following statement do? Math.floor( Math.random() * 12 ); | This creates a random number from 0 up to but not including 12.
What would the browser display if this script was executed? <SCRIPT LANGUAGE = "JavaScript"> var c = new Array(8) for( var i = 0; i < 8; i++ ) c[i] = i; document.write(c[8]) </SCRIPT> | undefined
What would the browser display if this script was executed? <SCRIPT LANGUAGE = "JavaScript"> var c = new Array(8) for( var i = 0; i < 10; i++ ) c[i] = i; document.write(c[9]) </SCRIPT> | 9
What is the effect of the join statement in the following code? var theArray1 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ], theArray2 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]; var value = theArray1.join( " " ); | The join method will create a string from the values in theArray1.
What will the browser display if the following script is executed? < SCRIPT LANGUAGE = "JavaScript" > var theArray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]; modifyArray( theArray[ 3 ] ); document.write( theArray.join( " " ) ); function modifyArray( i ) { i = 11; } </SCRIPT> | 1 2 3 4 5 6 7 8 9
The java sort method uses ________ to sort the array passed to | it. string comparison
What is the significance of the line? LI EM { color: red; font-weight: bold } | It will apply the specified style to text enclosed by the EM tags which are within LI tags.
What is the significance of the following CSS rule? LI, EM { color: red;c font-weight: bold } | It will apply the specified style to text enclosed by either LI or EM tags.
External style sheets are saved with the ________ extension. | css
will not move the image from its set position. | background-attachment
What does the following CSS rule do? .note { font-size: 1.5em } | It multiplies all text object font sizes with CLASS = "note" by 1.5.
Consider the following HTML document. 1 <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN"> 2 <HTML> 3 <HEAD> 4 <TITLE>Object Model</TITLE> 5 6 <SCRIPT LANGUAGE = "JavaScript"> 7 function start() 8 {9 alert( pText.innerText );10 pText.innerText = "Thanks for coming.";11 } 12 </SCRIPT>13 14 </HEAD> 15 16 <BODY ONLOAD = start()> 17 18 <P ID = "pText">Welcome to our Web page!</P> 19 20 </BODY> 21 </HTML> Which of the following selections a true statement? | The pText object does not have an innerText attribute.
Consider the following HTML document. 1 <HTML> 2 <HEAD> 3 <TITLE>Children Collection</TITLE> 4 <SCRIPT LANGUAGE = "JavaScript"> 5 </SCRIPT> 6 </HEAD> 7 <BODY> 8 <P></P> 9 </BODY> 10 </HTML> Select the true statement. | The SCRIPT element is a direct child of the HEAD element.
<SCRIPT LANGUAGE = "JavaScript"> var value = 0; function startTimer(){ window.setInterval( "updateTime()", 1000 ); } function updateTime(){ value++; pText.innerText = value; } </SCRIPT> </HEAD> <BODY ONLOAD = "startTimer()"> <P><A ID = "pText">0</A></P> </BODY> </HTML> | It counts the number of seconds elapsed viewing the page.
would you use to capture the location of the mouse cursor relative to the image boundaries? | offsetX / offsetY
Which of the following is not a valid PARAM setting for TDC controls? | <PARAM NAME = CLASSID: CLSID:333C7BC4-460F-11D0-BC04-0080C7055A83>
What does the following statement do?<SPAN ID = "colorName" STYLE = "font-family: monospace" DATASRC = "#Colors" DATAFLD = "ColorName"></SPAN><BR> | It assigns the TDC control named Colors to a span element for display purposes.
Which of the following is true? | The TDC handles creating table cells for output.
The VBScript operator for inequality is which of the following? | <>
What is wrong with the following VBScript code? 1 If (s = t) Then 2 u = s + t 3 ElseIf (s > t) Then 4 u = r 5 Else 6 u = n 7 End If | Nothing
What is wrong with the following VBScript code? 1 Select Case x 2 Case 1 3 Call MsgBox("1") 4 Case 2 5 Call MsgBox("2") 6 Case Else 7 Call MsgBox("?") 8 End Select | Nothing.
See the snipset below and choose one answer: <xsl:value-of select=”ceiling(-2.3)”/> | -2
See the snipset below and choose one answer: <xsl:value-of select=”floor(-2.3)”/> | -3
XML generated by a servlet or JSP CANNOT be displayed by a browser in which one of the following ways? | By passing it from a browser to another servlet or JSP for reformatting
Which of the following is the purpose of a schema? | To describe and constrain both the structure and data within the XML document
What is a correct way of referring to a style sheet called "mystyle.xsl"? | <?xml-stylesheet type="text/xsl" href="mystyle.xsl"?>
What statement is true when processing XML in a servlet or JSP? | A DTD or Schema must be provided for validation.
Which of the following snippet deletes an attribute of an Element node | ... root.removeAttributeNode(attr);
Which of the following types of parsers is used for object-based parsing? | DOM
You can create the <child> element by using a Document object's ______________ method. | createElement
Which of the following statement about SAX is false? | SAX focuses on real content the XML and applied by the browser
A Complex Type element can be defined using | <xsd:complexType name=”…” />
Which of these is the correct syntax to link a CSS file to an XML document? | <?xml-stylesheet type="text/css" href="url"?>
To prevent a type from being derived for defining new types you can specify | <complexType name=”Address” final=”restriction” />
The property 'nextSibling' in DOMDocument Object contains the next node of the previous nodes in the parent's child list. | T
What is NOT true about StAX? | it is a "push" parser
Which of the following statement about Attribute Node in DOM is true? | This node represents the property of an element
Which of the following statements related to the TranformerFactoty class and its methods are false? | The getFeature(String name) method permits the user to set values for specific attributes
You create a SAX parser by using the ________________object. | SAXParserFactory
The DocumentBuilder object's parse method to parse an XML document and create a Java _____________ object | Document
The StAX cursor API represents _______________. | a cursor with which you can walk an XML document from beginning to end.
Which of the following statement explain the characteristics of the methods used to modify nodes in a DOM tree? | The getChildNodes() returns a list of nodes containing all the child nodes of specific node
Which of the following methods creates a node for inserting textual content in to it? | createTextNode()
Which of the following are disadvantages of using SAX parsers? | SAX is read-only
Which of the following options describing the feature of XML transformations? | XSLT stylesheets use XPath to navigate between XML as SAX and DOM
XSLT is: | Extensible Stylesheet Language Transformation
Which of the following statement explains about the object relational mapping? | The object relational mapping uses the XML document as a tree of objects
Declaring an attribute as 'optional, -, -' means | Attribute may occur once and have any value
Schemas can be documented in human readable format by using | Comments
To compose a schema with the same target namespace you can use | <include schemaLocation=”…” />
SGML stand for | Standard Generalization Markup Language
In XSL, an attributes can be accessed in the way similar to the elements. Notice ____ in front of the attribute name | @
The entities that are used only in DTDs are referred to as | General entities
An XML document, which conforms to its DTD, is called a: | Well formed Document
In XSL, an _____ instruction do contains the template, which is been applied to each node selected with the select attribute | xsl:for-each
If the DTD is included in your XML source file, it should be wrapped in a DOCTYPE definition with the following syntax: | <!DOCTYPE root-element [element-declarations]>
What does the keyword SYSTEM indicate in the following code? <!DOCTYPE Book SYSTEM “book.dtd”> | Book.dtd is an internal DTD
The DOM treats the XML document as | tree-structure
Which of the following statements are true in the case of XML? | XML describes its data along with its presentation
REQUIRED attributes value means: | The attribute value must be included in the element
What is the significance of the ‘+’ sign in the code given below? <!ELEMENT BOOK (AUTHOR+)> | Indicates that AUTHOR tag must occur at least once inside the BOOK element
Which of the following is/are optional in the creation of an XML file? | The <?xml version="1.0"?> statement
Which of the following are valid tags? | <fpt_university>
An attribute without a prefix is in default namespace? | true
A descendant having a new namespace cannot override the namespace defined by the parrent element? | false
Which of the following defines what is meant by a valid document? | A document which conforms to the rules of a DTD
XML parser checks for validity and well formed ness? | true
Namespaces are defined using | xmlns:[prefix] attribute
Ability to create one's own tags is XML's greatest disadvantage? | false
An XML document, which conforms to its DTD, is called a: | Valid Document
What does the keyword SYSTEM indicate in the following code? <?xml version =”1.0”?> <!DOCTYPE Book SYSTEM “book.dtd”> | Book.dtd is an external DTD
The xsl:template is used to | define a template that can be applied to a node to produce desired output
XSLT allows any kind of data to be tranformed into | Boolean
Document Object Model is platform-dependent? | false
Builds the document as a in-memory data structures? | DOM
Represents a collection of attribute nodes | XMLDOMNamedNodeMap
The ContentHandler class provides implementations for the core interface of SAX | true
SAX makes sequence of call to a handler function? | true
What would the browser display if it executed the following script? <SCRIPT LANGUAGE = "JavaScript">  var total = 0;  nextLoop:  for ( var i = 0; i < 5; ++i ) {  for ( var j = 0; j < 2 ; ++j ) {  if ( i < 2 )  continue nextLoop;  total++; } total++;  }  total++;  document.writeln( total ); </SCRIPT> | 10
The word top in the term top-down stepwise refinement refers to which of the following? | he single statement that completely represents the program
What would the browser display if this script was executed? <SCRIPT LANGUAGE = "JavaScript">  var c = new Array(8);  for( var i = 0; i < 8; i++ )  c[i] = i;  document.write(c[8]); </SCRIPT> | undefined
Call-by- ________ is the method of passing a copy of the argument's value to a function | value
What would the browser display if it executed the following script? <SCRIPT LANGUAGE = "JavaScript">  var total = 0; stop: { // labeled compound statement  for ( var i = 0; i < 5; ++i ) {  for ( var j = 0; j < 2 ; ++j ) { if ( i == 2 )  break stop;  total++;  }  total++;  }  total++;  }  total++;  document.writeln( total ); </SCRIPT> | 7
What will the browser display if the following script is executed? < SCRIPT LANGUAGE = "JavaScript" >  var theArray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];   modifyArray( theArray[ 3 ] ); document.write( theArray.join( " " ) );  function modifyArray( i ) {  i = 11;  } </SCRIPT> | 1 2 3 4 5 6 7 8 9
Consider the following HTML code. <HTML> <SCRIPT LANGUAGE = "JavaScript"> <!-- document.writeln("Hello World"); // --> </SCRIPT> </HTML> What would a browser capable of scripting display when executing this code? | Hello World
What is the value of i after the following statements? i = 2; i- -; i- -; | 0
________ is a markup language for describing how content is rendered and ________ is a markup language for describing structured data—content is separated from presentation. | HTML, XML.
Characters like ">" and "&" can be used in PCDATA sections? | false
Which of the following XML code snippets is/are correct? | <BOOK> <AUTHOR> abc…</AUTHOR> </BOOK>
Which statements are true? | The DTD specifies ... + The DTD contains the list of tags allowed within the XML document, and their types and attributes.
The question mark (?) operator indicates | either zero or one occurrence
Each XML document can be represented as a tree structure? | true
Restricts string types using regular expressions? | pattern
Allow to validate documents that use markup from multiple namespaces? | Namespace support
Match the xml data againts its corresponding data type in Schema? <start>05:30:10.5</start> | time
Most DOM objects such as XMLDOMAttribute, XMLDOMElement, XMLDOMEntity, XMLDOMComment etc have several common methods and properties since they are inherited from a common object. Which object is it? | XMLDOMNode
With reference to the snippet of code given below, choose the correct syntax to complete the second line in order to create a XML Document Object    var sample  sample = ________________________ | new ActiveXObject("microsoft.XMLDOM")
DOM considers all items present in XML document as node? | true
What is the effect of the join statement in the following code?  var theArray1 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ], theArray2 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];  var value = theArray1.join( " " ); | The join method will create a string from the values in theArray1.
Consider the following HTML code.  <HTML>  <SCRIPT LANGUAGE = "JavaScript">  <!--  document.writeln("Hello World");  // -->  </SCRIPT>  </HTML>    What would a browser capable of scripting display when executing this code? | Hello World
Which of the following selections does not follow the rules of operator precedence. Assume that the operators on the left are evaluated first. | parentheses, subtraction, modulus
What would the browser display if this script was executed?  <SCRIPT LANGUAGE = "JavaScript">        var c = new Array(8);       for( var i = 0; i < 10; i++ )              c[i] = i;      document.write(c[9])   </SCRIPT> | 9
What would the browser display if the following script was executed?    <SCRIPT LANGUAGE = "JavaScript">           for( int i = 0; i < 5; i++ )          document.write("X");  </SCRIPT> | Nothing, the script would generate an error
What is the evaluation of the following expression? ((3+ ( 5 + 4 ) * 7 ) + 4 ) / 5 | 14
What would the browser display if the following code is executed in a script? var grade = 59 if ( grade >= 60 )        document.writeln( "Passed." ); else       document.write( "Failed. " );       document.writeln( "You must take this course again." ); | Failed
What would the browser display if it executed the following script?  <SCRIPT LANGUAGE = "JavaScript">   var total = 0;   nextLoop:   for ( var i = 0; i < 5; ++i ) {           for ( var j = 0; j < 2 ; ++j ) {                if ( i < 2 )                   continue nextLoop;                   total++;              }          total++;     }   total++;    document.writeln( total );  </SCRIPT> | 10
The value a in the following statement is called the ________ and the value b is called the ________.  face = Math.floor( a + Math.random() * b ); | shifting value, scaling factor
Which of these characters can be included within the text in an XML document in literal form? | ; : -
XML developer has to ensure the uniqueness of the element names and attributes in a document? | true
XML is transformed only via XSLT? | false
Browser has the ability distinguish duplicate element names in an XML document? | false
Which of these is a valid comment in XML? | <!- -This data should be hidden      <FIRSTNAME>Joe</FIRSTNAME>      <LASTNAME>Johnson</LASTNAME>  - ->
For each element type associated with a sequence element, there must be an element in the XML instance in the same order? | true
An XML Schema defines whether  an element is empty or can include text. | true
The default value for the minOccurs attribute in Schema is 0 | false
See the snipset below and choose one answer:  <xsl:value-of select=”floor(-2.3)”/> | -3
Xpath can be thought of as a query language like SQL | true
XSLT takes two things as input: an XSLT stylesheet and an xml input document | true
What is the significance of the following CSS rule? LI, EM { color: red;cfont-weight: bold } | It will apply the specified style to text enclosed by either LI or EM tags.
Tree model is applied to static documents? | false
With reference to the snippet of code given below, choose the correct syntax to complete the second line in order to create a XML Document Object   var sample  sample = ________________________ | new ActiveXObject("microsoft.XMLDOM")
SAX support random access | false
Method characters()  of ContentHandler interface receives events for | Character data
What is the value of num after the following statement is performed?    num = Math.round( 2.45 ); | 2
What is wrong with the following line of code?       <P><FONT SIZE='5'>This is a test.</FONT></P> | Nothing
What is the value of s3 after the following code is executed? var s1 = one,   s2 = two,   s3 = three; s1.concat(s2) s3 = s1; | onetwo
Which of the following things is unspecified in the following line of code?  <!DOCTYPE letter SYSTEM "letter.dtd"> | The type of browser you are using.
The ________ attribute is added to a TABLE element’s opening tag to bind a data island to a table | DATASRC
The ________ element generates the markup for an element of the specified name in the output HTML | xsl:element
Which of the following is not a type of DTD? | Table based
SOAP stands for | Simple Object Access Protocol
Microsoft's version of scripting that uses the Java syntax is called | JScript
The default scripting language for Netscape and Internet Explorer is ________ | ECMAScript
In the following line, the word writeln is a ________ which performs a task or action in the script. | method
Consider the following script. What is wrong with the following code?  1  <SCRIPT LANGUAGE = "JavaScript">  2 var firstNumber, 3  secondNumber;  4  thirdNumber;  5  6  thirdNumber =  7  parseInt( window.prompt( "Enter an integer", 0 ) );  8  document.write( thirdNumber );  9 </SCRIPT> | The word var must be placed before thirdNumber in line 4
What would the browser display if the following script was executed and the user entered 5 at both prompts?  1  <SCRIPT LANGUAGE = "JavaScript">  2 var firstNumber = window.prompt("Enter an integer", 0); 3 var secondNumber = window.prompt("Enter an integer",0);  4  var thirdNumber;  5 thirdNumber = firstNumber + secondNumber;  6  document.write( thirdNumber );  7 </SCRIPT> | 55
Which of the following selections does not follow the rules of operator precedence?  Assume that the operators on the left are evaluated first | parentheses, subtraction, modulus
What is the evaluation of the following expression?  ((3+ (5 + 4) * 7) + 4) / 5 | 14
Which of the following is not a valid equality or relational operator | =
________ is an artificial and informal language that helps programmers develop algorithms | Pseudocode
The word sequence in the term sequence structure refers to the sequence of ________ | JavaScript instructions in a script
Which of the following is not one of Bohm and Jacopini's three control structures | goto-less structure
Which of the following is not a JavaScript selection structure | for/in
Which of the following is a JavaScript repetition structure | do/while
Which of the following is not a JavaScript keyword | sub
Which of the following statements is correct | if ( studentGrade >= 60 ) document.write( "Passed" );
What would the browser display if the following code is executed in a script?  var x = 11, y = 14; if ( x > 13 ) if ( y > 13 )  document.writeln( "x and y are > 13" ); else  document.writeln( "x is <= 13" ); | x is <= 13
What would the browser display if the following code was executed in a script?  var product = 0; while ( product <= 25 );  product = 2 + product; | nothing, the script would result in an error
What would the browser display if the following script is executed? <SCRIPT LANGUAGE = "JavaScript">  var count = 0, total = 0; while ( count <= 5 ) { total = total + 10; count = count + 1;  }  document.write(total);  </SCRIPT> | 60
What would the browser display if the following script is executed? <SCRIPT LANGUAGE = "JavaScript">  var count = 5, total = 0; while ( count > -1 ) { total = total – 10;  count = count – 1;  }  document.write(total);  </SCRIPT> | -60
What type of loop is shown in the script below?  <SCRIPT LANGUAGE = "JavaScript"> var gradeValue = 0,  total = 0, grade = 0;  while ( gradeValue != - 1 ) { total = total + gradeValue;  grade = window.prompt("Enter Integer Grade, -1 to Quit:", "0"); gradeValue = parseInt( grade );  }  </SCRIPT> | sentinel controlled
The word top in the term top-down stepwise refinement refers to which of the following | the single statement that completely represents the program
What is the value of i after the following statements? i = 2; i += 25 | 27
Which of the following is not required for counter-controlled repetition | sentinel
What would the browser display if the following script was executed? <SCRIPT LANGUAGE = "JavaScript">  for( int i = 0; i < 5; i++ ) document.write("X");  </SCRIPT> | Nothing, the script would generate an error
What would the browser display if the following script was executed? <SCRIPT LANGUAGE = "JavaScript">  for( var i = 0; i < 5; i++ ) document.write("O");  </SCRIPT> | OOOOO
What is the value of num after the following statement is performed?  num = Math.round( 2.45 ); | 2
The ________ multiple selection structure is used to handle multiple decisions making and can be used to replace multiple if and if/else statements | switch
Consider the following code selections. Assume count is initialized to 7 and num is initialized to 0 | 7, 0
What would the browser display if it executed the following script? <SCRIPT LANGUAGE = "JavaScript"> for ( var count = 1; count <= 10; ++count ) { if ( count == 5 ) break;  }  document.writeln( count );  </SCRIPT> | 5
What would the browser display if it executed the following script? <SCRIPT LANGUAGE = "JavaScript"> for ( var count = 0; count < 10; ++count ) {  if ( count == 5 ) continue;  }  document.writeln( count );  </SCRIPT> | 10
What would the browser display if it executed the following script? <SCRIPT LANGUAGE = "JavaScript"> var total = 0;  stop: { // labeled compound statement for ( var i = 0; i < 5; ++i ) { for ( var j = 0; j < 2 ; ++j ) { if ( i == 2 ) break stop;  total++;  } total++;  }  total++;  }  total++;  document.writeln( total );  </SCRIPT> | 7
What would the browser display if it executed the following script? <SCRIPT LANGUAGE = "JavaScript"> var total = 0;   nextLoop: for ( var i = 0; i < 5; ++i ) { for ( var j = 0; j < 2 ; ++j ) { if ( i < 2 ) continue nextLoop;  total++; } total++;  }  total++;  document.writeln( total );  </SCRIPT> | 10
Which of the following will not evaluate to true? | false |      |    false 
Which of the following will evaluate to false | false && false
Which of the following is false? | In any flowchart, control structure (sequence, if, if/else, switch, while, do/while or for) can be replaced by 2 rectangle (actions) in sequence
Functions are invoked by writing the name of the function, followed by the function's ________ in closed parenthesis | arguments
Which of the following is a legal function call for the function definition provided below?  function square( y )  { return y * y; } | square(7+2);
What is the result of writing the keyword var in a function parameter list | he result would be a JavaScript runtime error
What would the function cube return, assuming it is called with the line cube(3).  function cube(y); { return y * y * y;  } | JavaScript runtime error
What does the following statement do?  Math.floor( Math.random() * 12 ); | This creates a random number from 0 up to but not including 12.
The style of programming in which the user interacts with a GUI component is called ________ programming | event-driven
The ________ of a variable is the period during which it exists in memory | duration
Local variables have ________ duration | automatic
The _______ of an identifier for a variable or function is the portion of the program in which the identifier can be referenced | scope
Giving a local function variable the same name as a global variable will result in which of the following | The local variable will "hide" the global variable
_________ are data structures consisting of related data items (sometimes called collections of data items) | arrays
Which of the following is the proper method to dynamically allocate memory to an array of 100 elements | var c = new Array( 100 );
The statement on line 1 ________ the array while the statement on line 2 ________ the array.  1 var c;  2 c = new Array( 12 ); | declares, allocates
What would the browser display if this script was executed? <SCRIPT LANGUAGE = "JavaScript">  var c = new Array(8) for( var i = 0; i < 8; i++ ) c[i] = i;  document.write(c[8])  </SCRIPT> | undefined
What would the browser display if this script was executed? <SCRIPT LANGUAGE = "JavaScript">  var c = new Array(8) for( var i = 0; i < 10; i++ ) c[i] = i;  document.write(c[9])  </SCRIPT> | 9
Which of the following is an illegal array initialization statement | var n = new Array( 5 ); n = [ 10, 20, 30, 40, 50
In the following statement, the range of the variable element is ________.  for ( var element in theArray )  total2 += theArray[ element ]; | g)  0 to the array length - 1
What is the value of num assuming that all 12 elements of array test are initialized to 3?  ++test[ 7 ]; var num = test[ 7 ]; | 4
In JavaScript, all objects and Arrays are passed to functions by ________ | reference
In JavaScript, numbers and boolean values are passed to functions by ____ | value
What is the effect of the join statement in the following code? | The join method will create a string from the values in theArray1
________ and ________ run slower when they are applied to large arrays | linear search, bubble sort
TThe java sort method uses ________ to sort the array passed to it | string comparison
MC: How many comparisons will a linear search function makes before finding a match if the search key has a value of 3 and the array x has the values:  x[ 0 ] = 0 x[ 1 ] = 2 x[ 2 ] = 1 x[ 3 ] = 4 x[ 4 ] = 3 x[ 5 ] = 3 | (c)  5
What would the browser output if the following script is executed? < SCRIPT LANGUAGE = "JavaScript" > var array = [ [ 1, 2, 3 ], [ 1, 2, 3 ] ]; for ( var i in array ) { for ( var j in array[ i ] ) document.write( array[ i ][ j ] + " " );  document.writeln("<BR>");  }  < /SCRIPT > | 1 2 3 1 2 3
Each object has ________ or data and ________ or behavior | attributes, methods
Which of the following is false | Objects do not have the property of information hiding.
What does the value string contain after the following code is executed?  var string = "Good luck on the test"; string = string.charAt( 3 ); | d
What does the value string contain after the following code is executed?  var string = "Good luck on the test";  string = string.split( " " ); | Good luck on the test
What does the value string contain after the following code is executed?  var string = "Good luck on the test";  string = string.link("www.deitel.com") | a link to www.deitel.com with the text "Good luck on the test"
What is the value of s3 after the following code is executed?  var s1 = one, s2 = two, s3 = three; s1.concat(s2)  s3 = s1; | onetwo
What is the value of s1 after the following code is executed?  var s1 = "deitel and associates"  s1 = s1.slice( 6 ) | and associates
Which of the following methods would you use to convert a list of Unicode values into a string containing the corresponding characters | fromCharCode
What will value contain after the following code is executed var value = new Date();  value = value.valueOf(); | a large integer representing the number of milliseconds between midnight January 1, 1970 and the current date
Which of the following methods does the JavaScript Boolean object not possess | toInt
________ allow you to specify the style of your page elements (spacing, margins, etc.) separately from the structure of your document | Cascading Style Sheets
________ are declared in each individual HTML element using the keyword STYLE | Inline styles
Text style sheets use which of the following MIME types | text/css
In the body of a style sheet, CSS rule properties are followed by a ____ | colon
How will the following CSS rule alter the Webpage if it is applied in a style sheet? H1 { font-family: Arial, sans - serif } | All text enclosed by H1 tags will have the sans-serif font if Arial is not supported by the system
What is the purpose of the line beginning with A.nodec in the following script? | The .nodec appended to A is an extension of class styles and will apply only to  A elements that specify nodec as their class
If an element's position is declared as absolute then ________ | positioning is set according to the margins of its parent element
Setting an element's position to relative is done within which of the following | <STYLE></STYLE>
Which of the following settings for a background image can be modified to create a "watermark" effect where scrolling will not move the image from its set position | background-attachment
Which of the following settings can be altered to change the darkness of the font | font-weight
When using the width, height and overflow properties of an element, position must be ________ | not absolute
The outermost layer of the box model is the ___ | margin
Which of the following is not a border property | shape
What does the following CSS rule do?  .note { font-size: 1.5em } | It multiplies all text object font sizes with CLASS = "note" by 1.5
The simplest way to reference a DHTML element is by its ________ attribute | ID
Consider the following HTML document. 1 <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">  2 <HTML> 3 <HEAD>  4 <TITLE>Object Model</TITLE> 5  6 <SCRIPT LANGUAGE = "JavaScript">  7 function start() 8 {  9 alert( pText.innerText );  10 pText.innerText = "Thanks for coming.";  11 }  12 </SCRIPT>  13 14 </HEAD> 15  16 <BODY ONLOAD = start()> 17 18 <P ID = "pText">Welcome to our Web page!</P>  19  20 </BODY>  21 </HTML>  Which of the following selections a true statement? | The pText object does not have an innerText attribute
The all collection is a property of the ________ object | document
Consider the following HTML document.  1 <HTML>  2 <HEAD>  3 <TITLE>Children Collection</TITLE>  4 <SCRIPT LANGUAGE = "JavaScript">  5 </SCRIPT>  6 </HEAD>  7 <BODY>  8 <P></P>  9 </BODY>  10 </HTML>  Select the true statement. | The SCRIPT element is a direct child of the HEAD element.
What is the significance of the second function argument in the following line window.setInterval( "run()", 100 ); | The value sets how often to run the function
Which of these is the proper function that stops a windows timer | clearInterval
Consider the following HTML document.  <HTML>  <HEAD>  <TITLE>Frames collection</TITLE>  </HEAD>  <FRAMESET ROWS = "100, *">  <FRAME SRC = "top.html" NAME = "first">  <FRAME SRC = "" NAME = "second">  </FRAMESET>  </HTML>  Which of the following is the proper way to access the frame "second" from the script of an outside document? | parent.frames( " second" )
What is stored inside the variable value after the following line of code is executed? var value = navigator.appVersion | It stores a string representing the version of the browser and other information.
With the ________, scripts can respond to a user moving the mouse, scrolling up or down the screen or entering keystrokes. | (a) event model
The ________ attribute of the ________ element specifies another element that is identified by its ________ attribute | (d) FOR, SCRIPT, ID
The ONLOAD event fires ________. | (d) whenever an element finishes loading successfully
What does the following HTML document do?  <HTML>  <HEAD>  <TITLE>DHTML Event Model - ONLOAD</TITLE> <SCRIPT LANGUAGE = "JavaScript"> var value = 0; function startTimer(){  window.setInterval( "updateTime()", 1000 ); }  function updateTime(){ value++;  pText.innerText = value; }  </SCRIPT>  </HEAD>  <BODY ONLOAD = "startTimer()">  <P><A ID = "pText">0</A></P>  </BODY> </HTML> | It counts the number of seconds elapsed viewing the page
The ONERROR event is used to handle all of these except | (a) User errors.
Which of these is the command to enable error handling on a Web page | (d)  window.onError
Event ________ fires constantly whenever the mouse is in motion | (a) ONMOUSEMOVE
If you used the ONMOUSEMOVE event to capture mouse events over an image, which of the following event properties would you use to capture the location of the mouse cursor relative to the image boundaries | (d) offsetX / offsetY
What does the srcElement event property contain | A reference to the element that fired the event
When the mouse moves over an element which of the following is triggered | (b)  ONMOUSEOVER
11 The ONFOCUS event fires when ________. | (c)  an element is clicked.
The ONBLUR event is associated with ________ | (d)  an element losing focus.
What is the effect of the following line of code?  window.event.returnValue = true; | (b)  It returns a true value to signal the browser to continue its default event-handling action.
Event bubbling is _______. | (a) the process of child elements passing events to their parent elements
________ fires when the right mouse button is clicked. | (b) ONCONTEXTMENU
Which of the following statements regarding filters and transitions is false | They are applied on a client computer at run time by the server
Which browsers can view the visual effects created by filters and transitions | Netscape
Which of the following is true? | The invert filter applies a negative image effect
Which of the following best describes the visual effect that alpha is used for | replacing text colors
Which of the following is not a property of the glow filter | direction
Which of the following is not a property of the blur filter | ( add, direction, strength) All of these are properties of the blur filter.
The ________ property of the wave filter determines how many waves will be applied in the affected area | freq
The ________ property of the wave filter shifts the effect in space | phase
The ________ property of the wave filter determines the wave's amplitude | strength
Which of the following is true? | The dropShadow filter does not have a direction attribute
Which of the following is the proper method to apply a transition effect | element.filters( "blendTrans" ).apply();
Which of the following is true? | Text qualifiers encapsulate the data in a field
The @ character is referred to as a______ | text qualifier
The | character is referred to as a________. |     field delimiter 
Which of the following is not a valid PARAM setting for TDC controls? | <PARAM NAME =  CLASSID: CLSID:333C7BC4-460F-11D0-BC04-0080C7055A83>
What does the following statement do?  <SPAN ID = "colorName" STYLE = "font-family: monospace"  DATASRC = "#Colors" DATAFLD = "ColorName"></SPAN><BR> | It assigns the TDC control named Colors to a span element for display purposes
What will value contain after the following code is executed assuming that Colors is a valid TDC control?  value = Colors.recordset; | It will contain the current indexed item of the datasource
The binding of TDC to a table requires setting the DATASRC property in the ________ | table element
Which of the following is true? | The TDC handles creating table cells for output
The JavaScript keyword this always refers to ______ | the element in which the statement resides
The TDC method Reset is used for _____ | refreshing the display
Which of the following is false | The Sort property automatically displays the new order of the data
The TDC Filter property allows you to ________. | filter out all records that do not have a cell matching the text you specify
Microsoft’s Internet Explorer Web browser contains a ________ that executes VBScript code | interpreter
________ is a technology that allows a server-side script to create dynamic content that is sent to the client’s browser | ASP
VBScript is ________ | case sensitive like JavaScript
The VBScript operator for inequality is which of the following | <>
Which of the following is not a VBScript sub-typ | variant
What does the Option Explicit statement do | It does not allow the programmer to use variables without declaring them first.
The VBScript control structures behave ________ to their JavaScript counterparts and the VBScript control structure syntax is ________ the JavaScript syntax | differently, different than
What is wrong with the following VBScript code?  1  If (s = t) Then  2  u = s + t  3  ElseIf (s > t) Then  4  u = r  5  Else  6 u = n 7 End If | Nothing
What is wrong with the following VBScript code?  1  Select Case x  2  Case 1  3 Call MsgBox("1")  4 Case 2  5 Call MsgBox("2")  6 Case Else  7  Call MsgBox("?") 8 End Select | Nothing
What does the ScriptEngine function do? | It returns the type script being used
The VBScript ________ function has the same purpose as JavaScript's window.prompt method | InputBox
What does the ScriptEngine function do | It returns the type script being used.
Which of the following is a valid VBScript conversion function | CInt
Which of the following is true regarding Function procedures | The procedure can return a value by assigning a value to the Function procedure name
Which of the following is true regarding VBScript arrays? | VBScript arrays can be dynamically allocated
Which of the following string functions returns a string that does not contain any leading or trailing space characters | Trim
Which of the following functions searches a string for a substring and returns an index of the found substring if it is found | Instr
Describing an object in terms of behaviors without concern for how those behaviors are actually implemented is called ___ | data abstraction
Which top level XSLT element is used to define a variable in a stylesheet or template and to assign it a value | xsl:variable
The xsl:if is used to | Evaluate a condition expression against the content of the xml file
In Xpath, which node has a parent node and it may have child node too | Text
In Xpath, how many type of nodes in the tree | 7
See the snipset below and choose one answer:  <xsl:for-each select=”LIST//TITLE”>…</xsl:for-each> | Match all <TITLE> elements one or more level deep in the <LIST> element
See the snipset below and choose one answer:  <xsl:template match=”BOOK*position()!=2+”>      <xsl:value-of select=”.”/>  </xsl:template> | Select all BOOK elements that are not the second child of their parents
XSLT allows any kind of data to be transformed into | Boolean
See the snipset below and choose one answer | -2
SAX uses : | Push parsing machenic for processing
Implements the method of ErrorHandler, EntityResolver, DTDHandler | DefaultHandler
Represents  a collection of attribute nodes | XMLDOMNamedNodeMap
Property documentElement of DOMDocument object return | An object representing the root element if the XML document
Method characters()  of ContentHandler interface receives events for | character data
What is the correct declaration syntax for the version of an XML document | <? xml version="1.0"/?>
How is an empty XML element defined? | All of the above
Which syntax is used to insert comments into an XML document | <!-This is a comment->
What does DTD stand for | Document Type Definition
Which statement is true | All XML elements must be properly closed
Which is not a correct name for an XML documents | <1dollar>
Which is not a correct name for an XML element | <first name>
For the XML parser to ignore a certain section of your XML document, which syntax is correct | <![CDATA[ Text to be ignored ]]>
XML Schema is designed to | be self-descriptive
XML Can be used to | Create new language
XSL stands for | EXtensible Stylesheet Language
The World Wide Web Consortium (W3C) started to develop XSL because there was a need for | XML-based Stylesheet Language
XSL ________ how the XML document should be displayed | describes
XSL consists of three parts. Which are | XSLT, Xpath, XSL-FO
Templates are been ordered according to their ________ which can be specified with the priority attribute. | priority
An attributes can be accessed in the way similar to the elements. Notice ____ in front of the attribute name | @
Which of these axes which are used in XSL? | grand-parent
A _____ instruction do contains the template, which is been applied to each node selected with the select attribute. | xsl:for-each
The xsl:element generates the elements in at time of processing | true
The xsl:attribute do generates the elements in the time of processing. | true
The Copy and _______ constructs are used for the nodes copying. | copy-of
An xsl:numbers do inserts a formatted numbers into the ____ | output
Stylesheet can do have ____ variables with the same name | several
A _____ function returns number of nodes present in an argument node-set | count
It defines the document structure with a list of ____ | legal elements
DTD defines the document structure with a list of legal elements | true
If the DTD is included in your XML source file, it should be wrapped in a DOCTYPE definition with the following syntax | <!DOCTYPE root-element [element-declarations]>
<!DOCTYPE root-element [element-declarations]> | data
f the DTD is external to your XML source file, it should be wrapped in a DOCTYPE definition with the following syntax: | <!DOCTYPE root-element SYSTEM "filename">
Which of these characters cannot be used as entity references in XML | S
An element declaration has the following syntax: | <!ELEMENT element-name category>
<!ELEMENT element-name category> | #PCDATA
_______ can validate your XML against a DTD | Internet Explorer 5.0
An XML Schema describes the structure of an XML ____ | document
A default value is automatically assigned to the attributes when no other value is specified. | true
XML DOM - defines a standard set of objects for XML documents only | True
The XML DOM is language- and platform | independent
Each attribute, element and text in the XML document represents a | node in the tree
Both Mozilla and Internet Explorer support W3C's DOM specification | True
There are differences between Internet Explorer's DOM and Mozilla's DOM. The most important difference is that how they handle | white-space text nodes
We can navigate between nodes with the use of their ________ to each other | relationship
Which of these are not the valid XML DOM relationships | nextNode
Internet Explorer will skip white-space text node that are generated between nodes (e.g. new-line characters), while Mozilla will not. | True
The ______ method can be used to remove the specified node | removeChild()
How many parameters are there for deleteData() method ? | 2
The _____ method creates the new element node | createElement()
How many parameters are there for replaceData() method | 3
avaScript lines end with what? | semicolon
Which of the following is NOT a type of popup box | radio
The most common way to assign a value to a variable is by using what? | Equals sign
a++; is the same as which of the following | a=a+1
To keep the browser from performing a script as soon as it is loaded you need to write the script as a what? | function
Actions that can be detected by JavaScript are called? | Events
In JavaScript, capital letters are different from lowercase letters | yes
XML cannot be used with HTML | False
XML is more advantageous to use than a fixed-length database system because | All of the above
You must use a parser to read an XML document | False
XML stores data in fixed lengths | False
XML is used for web services | True
A parent element cannot contain another parent element | False
An XML document must contain all elements declared in the DTD. | False
PCDATA refers to | #PCDATA refers to
An XML schema is used to define a complex type. | True
A facet is a valid value that can be assigned to an attribute | True
XML can only be transformed into HTML or XHTML. | False
You can repeat lines of code within the XSL stylesheet by defining an applytemplate. | False
The SAX parser is able to transverse an XML document. | False
All functions used by an XQuery are builtin functions. | False
Theasync = false means | Statements will not execute until the XML document is being loaded.
the appendChild() appends a node to the end of an XML document. | True
What organization presented the first version of Starndardized Generalized Markup Language (SGML) in 1980? | American National Standards Institute (ANSI)
Where on the browser will command window.status("text") display output | on the status bar
Which of the following is a JavaScript reprtition structure? | do/while
text style sheets use which of the following MIME types? | text/css
In SAX, to provide customized DTD handling, application need to implement | EntityResolver
Which of the following line of code are correct namespace declarations? | <Title:catalog xmlns:book="http://www.fpt.edu.vn">
The member access operator is which of the following | ,
External DTDs use the keyword URL to specify the location of the DTD | False
___ is an artificial and informal languege that helps programmers develop algorithms | pseudocode
In XSLT, a string is a sequence of one or more Unicode character | False
Internal DTDs specify the DTD within square brackets in the declaration itself | True
Leaf nodes have child nodes under them? | False
Which of the following code snippets would you use to specify a default declaration of a namespace | <schema xmlns:xs=”http://www.w3.org/2001/XMLSchema”>
What does the “sequence” element of XSD indicate? | All the elements specified within this element must compulsorily appear in the XML document, and they must appear in the specified order
Assertion: Implementing EDI involves high costs.Reason: EDI is built on fixed transaction set.Which of the following hold TRUE for this Assertion-Reason? | BOTH the assertion and the reason are TRUE, and the reason is a correct explanation of the assertion.
Which of the following statements will you use to declare an unrestricted element called DESCRIPTION which can contain any element declared elsewhere in a DTD? | <!ELEMENT DESCRIPTION ANY>
John is an XML programmer. He writes the following code to represent the items of a toy company: <?xml version=”1.0” encoding=”UTF-8”?> <!--PRODUCTDATA is the root element--> <PRODUCTDATA>   <PRODUCT PRODID=”P001”>     <PRODUCTNAME>Barbie Doll</PRODUCTNAME>     <DESCRIPTION> The price of this toy is < 200</DESCRIPTION>     <PRICE>$20.00</PRICE>     <QUANTITY>12</QUANTITY>   </PRODUCT> </PRODUCTDATA> Identify the error in the above code and suggest a solution for the same. | Error on line: <PRODUCT PRODID="P001">    Solution: He should use quotP001; instead of "P001".
Consider the following statements:   Statement A: You can use the <!ATTLIST> statement in a DTD to declare an attribute for an element.   Statement B: A single <!ATTLIST> statement can be used to declare multiple attributes for an element.Which of the following is correct about the above statements? | Statement A is True, and Statement B is False.
You want to create an attribute named “baseprice” with a default value of 200 for the “product” element. The attribute should accept integer values. Which of the following statements will you use to declare the attribute? | <xsd:attribute name="baseprice"  default= 200 type="xsd:integer"/>
Which facet of the string data type can be used to specify a set of values that a data type can accept? | enumeration
HTML code:<B> Customer </B><p>Michelle Abraham <br>      Salmonella Apartments<br>      Programmer<br></p>Peter is asked to represent the information given in the HTML code snippet above in XML. He represents the information as follows: <CUSTOMER> <NAME> Michelle Abraham  <ADDRESS> Salmonella Apartments </NAME> </ADDRESS> <PROFESSION> Programmer </PROFESSION> </CUSTOMER> Identify the error in the above code and suggest a solution for the same. | Error on line: <NAME> Michelle Abraham <ADDRESS> Salmonella Apartments </NAME> </ADDRESS>  .  Solution: The closing tag of the Name element should be written before the ADDRESS element.
Which of the following can be considered a valid element name? | Product$Name
Identify the type of content of the PRODUCT element in the following XML code fragment. <PRODDET>   <PRODUCT>         <PRODID=“P001”></PRODID><font face="fnt__2013101081549_0" size="14" color="#000000" letterspacing="0" kerning="1">         <PRODDESC>Baby Food </PRODDESC><font face="fnt__2013101081549_0" size="14" color="#000000" letterspacing="0" kerning="1">         <PRICEPERUNIT> 12 </PRICEPERUNIT>   </PRODUCT> </PRODDET> | ComplexType
Which one of the following statements can be used to process the element TICKETID, having the TICKET element as its ancestor | <xsl:for-each match = "TICKET[TICKETID]" >
Consider the following statements:   Statement A: XML is a text-based markup language that enables you to store data in a structured format by using meaningful tags.   Statement B: XML allows you to format data as per the requirements of the application.Which of the following is correct about the above statements? | Both, Statement A and Statement B, are True.
Consider the following statements:   Statement A: XML stand for eXtensible Markup Language.   Statement B: CSS stand for Creative Style Sheets.Which of the following is correct about the above statements? | Statement A is True, and statement B is False.
Which of the following statements correctly states the difference between HTML and XML? | HTML focuses on presentation of data, while XML focuses only on data and not on how the data is to be presented.
Which of the following set of statements will you use to process all the child nodes of the root node? | <xsl:template match= “/”> <xsl:apply-templates/> </xsl:template>
Consider the following statements:   Statement A: XML enables you to store data in a structured format by allowing you to create customized tags.   Statement B: XML documents can be easily interpreted by target systems. Which of the following is correct about the above statements? | Both, Statement A and Statement B, are True.
Consider the following statements:    Statement A: XSLT is a superset of the CSS functionality.    Statement B: XSLT is an application of XML.Which of the following is correct about the above statements? | Statement A is False, and statement B is True.
Identify the correct syntax for declaring an internal DTD | <!DOCTYPE rootelement [element and attribute declarations]>
Which of the following statement is the correct syntax for declaring an external DTD? | <!DOCTYPE rootelement SYSTEM [element and attribute declarations]>
Give the content of books.xml file in the picture.To display the title of book, the following javascript is developed: <script language=”javascript”> function fnLoadXML() { if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari xmlhttp = new XMLHttpRequest(); } else {// code for IE6, IE5 xmlhttp = new ActiveXObject(”Microsoft.XMLHTTP”); } xmlhttp.open(”GET”, ”books.xml”, false); xmlhttp.send(); xmlDoc = xmlhttp.responseXML;  var arrTitle=xmlDoc.getElementsByTagName(”title”); for (i=0; i<arrTitle.length; i++) {    ???   document.write(”<br>”); } }</script> | document.write(arrTitle[i].childNodes[0].nodeValue);
Consider the following XML document: <?xml version=”1.0”?> <ORDERDETAILS> <PRODUCT ID=”P001” NAME=”Mini Bus” PRICE=”75”><ORDER ID=”O001”>        <SHIP_ADD>10 NEWSLAND ESTATE, NY</SHIP_ADD>        <QUANTITY>30</QUANTITY> </ORDER> <ORDER ID=”O002”>        <SHIP_ADD>11 NEWSLAND ESTATE, NY</SHIP_ADD>        <QUANTITY>50</QUANTITY></ORDER> </PRODUCT> </ORDERDETAILS> Which of the following code snippets will you use to display the product of price and quantity | Choose D
The data about employees is stored in an XML document. The data is to be presented in a browser window in the ascending order of BASICPAY and descending order of EMPLOYEECODE. Which of the following code snippets should be used in the XSLT style sheet to sort the employee data? | <xsl:sort select=“BASICPAY” data-type=“number” order=“ascending”/>    <xsl:sort select=“EMPLOYEECODE” data-type=“text” order=“descending”/>
What is the correct HTML for referring to an external style sheet file named mystyle.css? | <style src="mystyle.css">
What is the correct CSS syntax for making all the <p> elements bold? | p {font-weight:bold;}
What type of method does SAX use to process XML documents? | Event-based
Which one of the following sets of interfaces are part of the SAX2 API? | ContentHandler, ErrorHandler, and DTDHandler
Which of the following is the best description of the characters() method? | It is a method of the SAX ContentHandler interface to receive notifications on the presence of character data.
Consider the following statements:  Statement A: You can point at a single document by using a hyperlink in HTML.  Statement B: HTML links are multidirectional.  which of the following is correct about the above statements? | Statement A is True, and Statement B is False.
Consider the following statements:  Statement A: Java Architecture for XML Binding (JAXB) provides a fast and convenient way to bind between XML schemas and Java representations, making it easy for Java developers to incorporate XML data and processing functions in Java applications.  Statement B: JAXB provides methods for unmarshalling (writing) XML instance documents into Java content trees, and then marshalling (reading) Java content trees back into XML instance documents. | Statement A is True, and Statement B is False.
Consider the following statements:  Statement A: The xjc schema compiler, also called the binding compiler, is an important part of a JAXB implementation. The compiler binds a source XML schema to a set of schema-derived program elements. The binding is described by an XML-based binding language in a binding file. The binding compiler produces a set of packages containing Java source files and JAXB property files.  Statement B: In most cases, the default bindings generated by the binding compiler are sufficient. However, there are cases where you might want to modify the default bindings (for example, you might want to provide more meaningful package names than are generated by default), you can use the following syntax: xjc schema_file.xsd ““g package_name | Statement A is True, and Statement B is False.
The following paragraph describes the differences between XML and HTML but there are some FEATURES are NOT correct. Please find out them.  XML features * Defined set of tags designed for web display  * Format driven  * End tags required for well-formed documents  * Quotes required around attributes values  * Slash required in empty tags   HTML features * User definable tags  * Content driven  * End tags not required  * Quotes not required  * Slash not required | It should be swap between “Defined set of tags designed for web display” and “Format driven” of XML to “User definable tags” and “Content driven” of HTML
Which one of the following XLink attributes allows you to specify the target of a link? | href
In XLink, how can you ensure that the content of a linked document appears in a new browser window | By setting the value of the show attribute to new.
Please read the following description about JAXB and choose the correct component to fill in blank in the JAXB Architectural Overview picture.A JAXB implementation consists of the following architectural components: + Schema compiler: Binds a source schema to a set of schema-derived program elements. The binding is described by an XML-based binding language. + Schema generator: Maps a set of existing program elements to a derived schema. The mapping is described by program annotations. + Binding runtime framework: Provides unmarshalling (reading) and marshalling (writing) operations for accessing, manipulating, and validating XML content using either schema-derived or existing program elements. | Schema Generator
John, an XML developer, uses DOM to define the logical structure of documents and the way a document is accessed and manipulated. He wants to use XML DOM objects to traverse, read, and manipulate the structure and content of an XML document. John wants to represent the complete document map, which contains all the information in an XML document. He also wants to create an instance of the DOMDocument object to be able to work with any XML document. Which one of the following objects should John use? | DOMDocument
What are the types of errors handled defined by the SAX ErrorHandler interface? | Warning, Error, Fatal-Error
Which of the following functions in SAX parser notifies an XML document handler about the start of an element in an XML document? | startElement()
Which of the following handler interfaces is used by the SAX API to validate error? | ErrorHandler
Which package contains the interface that provides methods to parse XML documents | org.xml.sax package
What is the full form of SAX? | Simple API for XML
Which one of the following statements can be used to process the element TICKETID, having the TICKET element as its ancestor | <xsl:for-each match = "TICKET/TICKETID" >
Property documentElement of DOMDocument object return _____. | an object representing the root element if the XML document
Consider the following statements:  Statement A: A namespace is a method of preventing conflicts between elements having the same names. Statement B: A namespace URI is the same as a Web URI. Which of the following is correct about the above statements? | Both, Statement A and Statement B, are True.
What does method characters()  of ContentHandler interface receive events for? | Character data
You want to create an attribute named “baseprice” with a default value of 200 for the “product” element. The attribute should accept integer values. Which of the following statements will you use to declare the attribute | <xsd:attribute name="baseprice"  default= “200” type="xsd:integer"/>
Which of the following is NOT a valid CSS selector? | HEAD selectors
Which is the correct way to use the union operator | <xsl:apply-templates select=’/CD/Artist |    /Tape/Artist’ />
Which of the following strings are a correct XML name? | xslNewElement
XML tags are case sensitive | True
By default the white space in elements is not truncated. | True
Are comments processed by the processor? | False
Is the DOCTYPE declaration compulsory? | no
Is the following attribute valid?      <!ATTLIST Test4 an_attribute ID #FIXED "value"> | No
An XML Schema defines how many child elements can appear in an XML document? | True
Is it legal to have an element and a complex type with the same name? | y
Match the xml data against its corresponding data type in XSD schema? <start>05:30:10.5</start> | time
If you “import” a stylesheet, the templates in it have lower precedence than those in the current stylesheet. | True
the xsl:if, xsl:else and xsl:else-if elements can be used to control program flow. | True
In the body of a style sheet, CSS rule properties are followed by a _____. | colon
Considering the following XML document, what is the result of count(//*): <?xml version="1.0" encoding="UTF-8"?> <root>       <employee id="45">                 <name>John</name>                 <salary>$100,000</salary>       </employee> </root> | 4
treaming pull parsing refers to a programming model in which _ | client application calls methods on an XML parsing library when it needs to interact with an XML infoset
DOM 2 doesn't provide mechanism for interrogating and modifying the namespace for a document | False
The DOM specification describes how strings are to be manipulated by the DOM by defining the datatype _______. It is encoded using _______ encoding scheme | DOMString, Unicode
An MNC receives at its headquarter from its subsidiaries, XML documents containing various reports of that subsidiary. These reports need to be displayed to the person responsible at the headquarter for that subsidiary in a user-friendly manner (allowing searches through the document) and the person is allowed to make any changes/comments that he/she desires. Once the user is done with all the changes/comments the information needs to be fed into the central database. Which of the following is MOST appropriate for processing these XML documents? | DOM
Which of the following is an XML-based service IDL that defines the service interface and its implementation characteristics | WSDL
Which statement about XML is true | Elements may nest but not overlap
What is the correct declaration syntax for the version of XML document | <?xml version="1.0"?>
How is an empty element field defined | All of the above
In what year did the World Wide Web Consortium release its draft of XML | 1996
You can use XSL Transformation (XSLT) to convert database files described by XML to Structured Query Language (SQL) statements, which creates the tables, indexes and views that the XML data describes | True
Which Statement about xml is true | Elements may nest but not overlap
Which syntax is used to insert comments into an XML document? | <!-This is a comment->
Which statement is true? | XML tags are case sensitive XML documents must have a root tag XML elements must be properly closed.
XML Can be Used to | Create new language.
How do you call a function named "myFunction | myFunction()
How do you write a conditional statement for executing some statements only if "i" is equal to 5? | if (i==5)
How do you write a conditional statement for executing some statements only if "i" is NOT equal to 5? | if (i != 5)
How many different kind of loops are there in JavaScript | Two. The "for" loop and the "while" loop
How does a "for" loop start? | for (i = 0; i <= 5; i++)
What is the correct way to write a JavaScript array? | var txt = new Array("tim","shaq","kobe")
How do you round the number 8.25, to the nearest whole number? | Math.round(8.25)
How do you find the largest number of 6 and 8? | Math.max(6,8)
What is the correct JavaScript syntax for opening a new window called "window5" ? | window.open("http://www.ex-designz.net","window5")
How do you put a message in the browser's status bar? | window.status = "put your message here"
How do you find the client's browser name? | navigator.appName
You define an array using | var myarray = new Array();
Onclick is equivalent to which two events in sequence | onmousedown and onmouseup
Which best describe void? | An operator
Which property would you use to redirect visitor to another page? | window.location.href
Which of the following JavaScript statements use arrays? | setTimeout("a["+i+"]",1000)
A DTD is an XML document | False
DTDs contain declarations for elements and entities | True
DTDs are used to validate XML documents | True
Each XML document can be represented as a tree structure | True
Ability to create one's own tags is XML's greatest disadvantage | False
DTDs are made up of three blocks of declarations and the DOCTYPE declaration | False
Elements, attributes and entities can be declared in any order | True
DOCTYPE declarations are specified in the prolog of the XML document | True
An XML Schema defines the structure of an XML document | True
An XML Schema is an XML-based add-on to DTDs | False
XML syntax is used as the basis to create a schema, so it can be stored with the same extension .xml (dot XML). | False
An XML Schema defines how many child elements can appear in an XML document | True
An XML Schema defines whether an element is empty or can include text | True
The order and the number of elements that appears in the mixed content cannot be specified in the schema | False
If the value of maxOccurs attribute is kept unbounded, it means that the element can appear unlimited number of times | True
Elements with complex type may contain nested elements and have attributes | True
The default value for the minOccurs attribute is 0 | False
When a minOccurs attribute is used, there cannot be a maxOccurs attribute in the same line | False
Mixed content means that an element whose structure is the complex type can contains elements with attributes | False
Element content means a complex type element that contains only elements | False
The order and the number of elements appearing in the mixed content cannot be specified in schemas | False
Element content cannot have attributes. | True
The sequence element provides an XML representation for describing a selection from a set of element types | False
The all element requires that each element in the group must occur at most once | True
For each element type associated with a sequence element, there must be an element in the XML instance in the same order | True
The choice element cannot mention the minOccurs and maxOccurs attribute | False
A custom user defined datatype can be created using the <simpleType> definition | False
Elements of simple type describe the content and data type of an element | True
Elements of simple type constitute the structure of an XML document | False
A built-in simple element can contain a default value or a facet value | False
A default value is the value that is assigned automatically to the element when there is no other value specified | True
Which of the following strings are a correct XML name | xslNewElement
What does #REQUIRED attributes mean ? | The attribute value must be included in the element
Is the following attribute valid?      <!ATTLIST Test4 an_attribute ID #FIXED "value"> | no
What does a validating parser if it encounters a valid DOCTYPE declaration but it cannot load the associated DTD file because the given URL is wrong? | This is a fatal error: the parsing will stop immediately.
Streaming pull parsing refers to a programming model in which _____. | a client application calls methods on an XML parsing library when it needs to interact with an XML infoset
Can you define list of lists in XML Schema ? | n
What kind of separator can be used in a list datatype in XML Schema ? | whitespace (" ");
Is the text node a direct child of the enclosing element in XPath | n
The child axis (XPath) can select only element nodes. | True
What is the default axis in XPath ? | child
Do you have child nodes of type entity references (internal or external) from XPath's perspective | no
Which of the following types of nodes can have children ? | document element nodes + root nodes
is the following element declaration valid in XML Schema | no
Can you nest attribute groups inside other attribute groups | y
Is the DTD element type "ANY" equivalent with the XML Schema element "anyType" ? | no
Is the following XML Schema definition valid ? | no
Which of the following can be declared as a direct child of a XML Schema element ? | element + attribute
An attribute specified in XML Schema has a default value. Is this case the attribute can also be: | optional
Can a simple type (from XML Schema ) have children | no
Can a simple type (from XML Schema ) have attributes | no
Is it legal to have an element and a complex type with the same name ? | yes
If the attribute minOccurs is specified but the attribute maxOccurs is not, what is the default value of the latter ? | minOccurs
What is the default type for an element in XML Schema ? | anyType
Parameter entities are: | used only in DTDs + always parsed entities
Are the following element declarations identical ? | no
Is the following XML instance valid | no
Is the DOCTYPE declaration compulsory ? | no
What does a validating parser if it encounters a valid DOCTYPE declaration but it cannot load the associated DTD file because the given URL is wrong ? | this is a fatal error: the parsing will stop immediately;
Can you have external entities in an attribute of type CDATA | no
Can you retrict the content of an XML element to take only values from an enumeration list (using DTDs) | no
you have an attribute of enumerated type. What are the valid values for it ? | NameChar
The values of an attribute of type ID is unique | per document instance;
Can you use the keywords IGNORE and INCLUDE in the internal subset of a DTD | no
Can you nest DTD conditional sections | y
What is the format of DTDs ? | Extended Backus-Naur Form (EBNF);
Are XML and DTD comments in the same format | y
DTD declarations from the external subset have priority over the declarations from the internal subset | False
What is the "Document Type Declaration" ? | the DOCTYPE declaration
XML was designed to describe data. | True
XML tags are predefined | False
XML consists of rules to identify and define different parts of the document | True
XML offers a standard way to add markup to documents | True
XML forms the basis to create languages like WAP and WML. | True
XML describes its data along with its presentation | False
Client reduces the server load by sending large amount of information in one XML document to the server. | True
XML uses only XSLT to be transformed to HTML | False
XML can be implemented as middle-tier for client server architectures | True
XML allows data exchange as it has no formatting instructions | True
XML documents are stored with xml extension | True
Document prolog can consist of version declaration, DTD comments and processing instructions. | True
XML declaration informs the processing agent about the version of XML being | True
Root element must not be a nonempty tag. | False
The logical structure gives information about the elements and the order in which they are to be included in the document | True
XML syntax is colored | True
XML is not validated. | False
XML parser reads the document after it is created. | True
XML is transformed only via XSLT | False
XML document is edited by keeping DTD in mind | True
XML parser is calculated against its speed and performance | True
XML parser does its work after the processor converts the document into a data | False
Browser displays the content directly after the parser passes the data. | False
Crimson and Xerces are some of the browsers | False
Comments are processed by the processor. | False
Comments appear only in the document prolog. | False
Processing instructions are application specific. | True
Processing instructions are passed to the target, | True
</PITarget <instruction>/> is a processing instruction | False
Character data is treated as regular text | False
Characters like ">" and "&" can be used in PCDATA sections. | False
Characters like ">" and "&" can be used in CDATA sections. | True
CDATA starts with "<[!CDATA[" and ends with "]]>". | True
Parameter entities use ampersand (&) and semicolon (;) as delimiters | False
Browser has the ability distinguish duplicate element names in an XML document | False
XML developer has to ensure the uniqueness of the element names and attributes in a document | True
A namespace is a collection of names that can be used as element names or attribute names in XML document | True
In XML, elements are distinguished by using DTD | False
Attributes belonging to a particular elements within some namespace is also a part of the same namespace | False
An attribute without a prefix is in default namespace | True
xmlns:localname="value" is the correct syntax for including a attribute in a namespace. | False
<Student:Name age ="12">Kevin</ Student:Name> it the correct for associating age with the student namespace. | False
The prefix used in an attribute is used as a reference to the namespace. | True
<elemencName xmlns=' URL' > is the correct syntax for declaring a default namespace | True
The descendant has the same namespace as the parent element even if it has a new namespace definition | False
A default namespace is used by an element and its child elements if the element has a namespace prefix | False
A default namespace applies to the element on which it was defined and all descendants of that element | True
A descendant having a new namespace cannot override the namespace defined by the parent element | False
An XML Schema is an XML-based add-on to DTDs. | False
Element content cannot have attributes | True
A built-in simple element can contain a default value or a facet value. | False
Cascading Style Sheets derived the term cascade from the ability to mix and match rules from different sources | True
Cascading Style Sheets lack support to define spacing between data, | False
A CSS style sheet is associated with an XML document using the processing instruction xml-stylesheet. | True
Style sheets allow you to mix presentation markup with data | False
Style sheets contain one or more rules about the appearance of data | True
Simple selectors match occurrence of an element based on a condition | False
ID selectors are used to define style rules for unique elements. | True
In simple selectors you define same property declarations for multiple elements by specifying a comma separated list of element names | True
ID selector match elements which have an id attribute. | True
Universal selectors match every occurrence of parent and child elements | False
Declarations are sorted by weight and origin | True
Inheritance enables one entity to acquire the properties of another entity | True
A child element inherits the properties of an ancestor element only if it is an immediate child | False
Declarations are sorted by the order specified | True
There is always only one style rule defined for every element | False
CSS uses complex elements to format the documents | False
XSL describes how the XML document should be displayed, | True
XSL elements can be used to perform complex calculations | True
XSL is a stylesheet application specifically for HTML, | False
CSS is a simple, styling-based approach that does not require advanced programming skills | True
XPath provides multiple syntax that can be used for queries, addressing and patterns | False
XPath can be thought of as a query language like SQL. | True
In XPath, the structure of an XML document is viewed conceptually as a pyramid, | False
XPath provides a common syntax for features shared by XSLT and XQuery | True
XPath is used to navigate through elements and attributes in an XML document | True
XSLT allows any kind of data to be transformed into a boolean value | True
A node-set is an unordered group of nodes from the input document. | True
A string is a sequence of zero or more Unicode characters, | True
The numbers like 43 or -7000 that look like integers are stored as float | False
A string is a sequence of one or more Unicode characters | False
The local-name () function returns the name of the current node or the first node in the specified node set - without the namespace prefix | True
The floor (num) function returns the largest integer that is not greater than the number argument. | True
The only allowed operation in a result tree fragment is on a number | False
In a substring o function, the index of the first character is 0. | False
The translate () function returns the first argument string with occurrences of characters in the second argument string replaced by the character at the corresponding position in the third argument string. | True
An XSLT processor takes three things as input such as XSLT stylesheet, XML document and Document Type Declaration | False
The XSLT engine begins by reading in the XSLT stylesheet and caching it as a look-up table | True
For each node it processes, it will look in the table for the best matching rule to apply | True
Starting from the root node, the XSLT engine finds rules, executes them, and continues until there are no more nodes in its context node set to work with | True
XSLT can also be called as XSLT document or transformation script | False
Document Object Model treats a document as an object? | True
Document Object Model is platform-dependent? | False
Document Models can be hierarchical model, non-linear model or object model? | False
Document Object Model allows programmers to write different set of code for interpreting document running on any platform? | False
Document Object Model allows programs and scripts to access and update content, structure and style of documents in a standard way | True
Linear Model is applied to dynamic document object? | False
The hierarchical structure of the XML document is known as the XML Tree and it consists of root, nodes and leaves? | True
Object Model is a collection of objects for accessing and manipulating the XML data? | True
W3C DOM uses both tree and object model concepts? | True
XML parser is a software package, library or module that reads XML document | True
Schema checks for the validity of the XML document? | False
DTD checks for the structure and content of the XML document | False
Well-formedness of XML documents means that each starting tag has a matching end tag | True
XML parser can perform operations on input of any data type | False
DOM parser is used for navigating the document recursively | False
StAX parser has no built-in document navigation support | True
SAX parser has high memory consumption | False
StAX parser parses the XML document once. | False
DOM parser allows random access to document. | True
A node can have more than one parent nodes | False
DOM is a W3C standard. | True
DOM considers all items present in XML document as node | True
Leaf nodes have child nodes under them | False
Element node is the starting point of the DOM tree | False
Document object is the only object that is created. | True
loadXML() method is used to load an XML file | False
load()  method is used to load a string | False
new ActiveXObject(“Microsoft.XMLDOM”); creates an XML document object. | True
ownerDocument attribute associates a child node with the parent node | True
SAX is developed by XML-DEV mailing list | True
SAX includes functions that are not supported by DOM. | True
SAX supports random access | False
SAX requires the entire document to be stored in the memory | False
SAX makes sequences of call to a handler function | True
The abc.xsd fragment<xsd:element name="person" type="personType"/> <xsd:complexType name="personType"> <xsd:sequence> <xsd:element name="firstname" type="xsd:string"/> </xsd:sequence> </xsd:complexType> The cde.xml fragment <person xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns='http://xml.netbeans.org/schema/abc' xsi:schemaLocation='http://xml.netbeans.org/schema/abc abc.xsd'> <firstname>12345</firstname> <lastname>KhanhKT</lastname> </person> Choose the correct statement Choose one answer. | The cde.xml is not valid because the parser not determine lastname
Given: <?xml version="1.0" encoding="UTF-8"?> <email> <to>Joe</to> <from>John</from> <heading>Final Exam</heaDing> <body>Try your self</body> </eMail> Choose the correct statement Choose one answer. | The document is not well-formed
Given: <HTML> <HEAD> <TITLE>DHTML Event Model - ONLOAD</TITLE> <SCRIPT LANGUAGE = " "> var value = 0;  function startTimer(){window.setInterval( "updateTime()", 1000 ); } function updateTime(){ value++; pText.innerText = value; }</SCRIPT> </HEAD> <BODY ONLOAD = "startTimer()"> <P><A ID = "pText">0</A></P> </BODY> </HTML> | It counts the number of seconds elapsed viewing the page.
Which features must the well-formed XML document have? | none
Which exception is used to catch Exception when the XMLEventReader is used | XMLStreamException
Why does DTD need? | place preconditions on the data the programs read
Which contains in XML document's prolog | XML Declaration or/and Document Type Declaration
Given: < SCRIPT LANGUAGE = " " > var theArray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]; modifyArray( theArray[ 3 ] ); document.write( theArray.join( " " ) ); function modifyArray( i ) { i = 11; } </SCRIPT> What will the browser display if the following script is executed? | 1 2 3 4 5 6 7 8 9
Given: <SCRIPT LANGUAGE = " "> var c = new Array(8) for( var i = 0; i < 10; i++ )  c[i] = i;document.write(c[9]) </SCRIPT> What would the browser display if this script was executed? | 9
Consider the Formal Public Identifier -//W3C//DTD 1.8//IND Choose the correct answer | The Formal Public Identifier is not valid because the fourth field is not valid
The simplest way to reference a DHTML element is by its ________ attribute. | id
The declaration is used to declare the xml tag library using in JSP as | none
Which ways are the CSS style rules applied to HTML? | none
What will value contain after the following code is executed? var value = new Date(); value = value.valueOf(); Choose one answer. | a large integer representing the number of milliseconds between midnight January 1, 1970 and the current date
Given: 1. <?xml version="1.0"?> 2. <note date="12/11/99"> 3. <to>Ravi</to> 4. <from>Amit</from> 5. <heading>Final Exam</Heading> 6. <body>Try yourself<body> 7. </note> Choose the correct statement | Line 6 contains error
Which statement is used to describe about multi-pipeline? | XML is mapped to Bean object, then it applied to many JSP
Consider the following HTML document. <HTML> <HEAD><TITLE>Frames collection</TITLE> </HEAD> <FRAMESET ROWS = "100, *"> <FRAME SRC = "top.html" NAME = "first"> <FRAME SRC = "" NAME = "second"> </FRAMESET> </HTML> Which of the following is the proper way to access the frame "second" from the script of an outside document? | document.frames( "second")
Given the XML code fragment <?xml version="1.0" encoding="UTF-8"?> <library xmlns="http://www.fpt.edu.vn" xmlns:article="http://www.article.fpt.edu.vn" xmlns:person="http://www.biolography.com.vn"> <book article:id="B0001" id="IB8976"> <article:title>The Firm</article:title> <person:author>John Grisham</person:author> <article:price>99</article:price> </book> </library> Choose the correct statement | The XML code fragment is not validated because no DTD document is referenced
<?xml version=”1.0” encoding=”UTF-8”?> <aaa> <bbb>ccc</bBb> </aaa> Choose the correct answer | The document is not well-formed
Given the dtd file: <?xml version="1.0" encoding="UTF-8"?> <!ELEMENT FINALs (CLASS1 | CLASS2)+> <!ELEMENT CLASS1 (#PCDATA)> <!ATTLIST CLASS1 count CDATA #REQUIRED> <!ELEMENT CLASS2 (#PCDATA)> <!ATTLIST CLASS2 count CDATA #REQUIRED> Choose the correct statement |    The dtd file is valid
Which of the following contradicts the notion of structured programming | goto
Given <?xml version="1.0" encoding="UTF-8"?> <xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema" targetNamespace="http://xml.netbeans.org/schema/mail" xmlns="http://xml.netbeans.org/schema/mail" elementFormDefault="qualified"> <xsd:element name="mail"> <xsd:sequence> <xsd:element name="to" type="xsd:language" /><xsd:element name="from" type="xsd:token"/> <xsd:element name="header" type="xsd:string"/> <xsd:element name="body" type="xsd:normalizedString"/> </xsd:sequence> </xsd:element> </xsd:schema> Select the correct statement | The XML Schema is not valid because the xsd:element must include simpleType or complexType
Given: <SCRIPT LANGUAGE = " "> var total = 0; stop: { // labeled compound statement for ( var i = 0; i < 5; ++i ) { for ( var j = 0; j < 2 ; ++j ) { if ( i == 2 ) break stop; total++; } total++; } total++; } total++; document.writeln( total ); </SCRIPT> What would the browser display if it executed the following script? | 7
Given: Xml fragment document <aaa><bbb/></aaa> XSL fragment <xsl:import href="aaa.xsl"/> <xsl:import href="bbb.xsl"/> The aaa.xsl fragment <xsl:template match="bbb">testA</xsl:template> The bbb.xsl fragment <xsl:template match="bbb">testB</xsl:template> Choose the correct statement | testB
How many type of XML parser does? | Validating Parsers and Non-Validating Parsers
How many components do the JAXB Architecture provide | Schema compiler, Schema generator, Binding runtime framework
Given: < SCRIPT LANGUAGE = "JavaScript" > var theArray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]; modifyArray( theArray[ 3 ] ); document.write( theArray.join( " " ) ); function modifyArray( i ) { i = 11; } </SCRIPT> What will the browser display if the following script is executed? | 1 2 3 4 5 6 7 8 9
What is stored inside the variable value after the following line of code is executed? | . The navigator object does not contain an attribute named version
XML Fragment <tomcat-users> <role rolename="admin"/> <role rolename="manager"/> <role rolename="user"/> <role rolename="tomcat"/> <user username="ide" password="ee1KER95" roles="manager,admin"/> <user username="tomcat" password="tomcat" roles="tomcat"/> <user username="khanhkt" password="trongkhanh" roles="manager,admin"/> <user username="guest" password="123456" roles="username"/> </tomcat-users>The Java code fragment using DOM API … Document doc = db.parse(new File(path + "WEB-INF/tomcat-users.xml")); XPathFactory xpf = XPathFactory.newInstance(); XPath xpath = xpf.newXPath(); String exp = "//user[contains(@username, 'a')]"; NodeList node = (NodeList) xpath.evaluate(exp, doc, XPathConstants.NODELIST); Choose the correct statement. Assume that all code and file path are correct | The application can get more than one node
The declaration is used to declare the xml tag library using in JSP as | <%@ taglib prefix=“x” uri= “http://java.sun.com/jsp/jstl/xml” %>
Which of the following is the proper method to apply the fliph filter to the following H1 element? | The filter cannot be applied to this element
XSL processors do parses the XML source and tries to find out the matching _______ rule | template
_ in XSL do allow the element to be processed for multiple times, each time producing different result. | modes
templates are been ordered according to their ________ which can be specified with the priority attributte. | priority
an attributes can be accessed in the way similar to the elements. Notice ____ in front of the attribute name. | @
Which of these axes which are used in XSL | grand-parent
a_____ instruction do contains the template, which is been applied to each node selected with the select attribute | xsl:for-each
The xsl:element generates the elements in at time of processing. | true
The ____ instruction do enables the conditional processing | xsl:if
The xsl:choose element is used for the purpose of selection between the several possibilities | True
value of the local variable is bounded to which element. | xsl:when
a_____ function returns number of nodes present in an argument node-set | count
it defines the document structure with a list of _______. | legal elements
if the DTD is included in your XML source file, it should be wrapped in a DOCTYPE definition with the following syntax | <!DOCTYPE root-element [element-declarations]>
if the DTD is external to your XML source file, it should be wrapped in a DOCTYPE definition with the following syntax: | <!DOCTYPE root-element SYSTEM "filename">
with DTD, each of your XML files can carry a ________ of its own format with it. | description
elements are the main building blocks of both | XML and HTML documents
attributes provide _______ about elements. | extra information
CDATA is text that _____ be parsed by a parser | will not
CDATA means | character data
An element declaration has the following syntax | <!ELEMENT element-name category>
________ can validate your XML against a DTD. | IE 5
An XML Schema describes the structure of an XML _______ | document
Which of these are not supported by XML Schema | defines which files are child elements
With XML Schemas, the senders can ________ the data in a way that the receiver will understand | describes
With an extensible Schema definition you cannot: | all
If an element has attributes, it is considered to be of complex types | True
XML DOM - defines a standard set of objects for XML documents only. | True
The XML DOM define a standard set of ______ for XML | object
How many parameters are there for replaceData() method ? | 3
The _______ method is used to remove the attribute node | removeAttributeNode()
A Markup Language is defined as a set of rules adding some meaning to the content and structure of documents. | True
Document Content is determined by | Semantic Markup
Document Structure is determined by | Structural Markup
________ is a very powerful language and the mother of all markup languages. | SGML
HTML provides the advantage of creating customized tags making it easier for the users to create their own tags. | False
Data in HTML cannot be structured. | True
HTML linking is one to one and is hardcoded in the HTML file. This indicates that HTML has a robust linking mechanism which is an advantage of using HTML. | False
XML is a Meta-Language. Select the option which best describes the statement given above. | Describes other languages.
XML data can be embedded in HTML. | True
In a 3-tier model identify the front-end, middle-tier and back-end | Browser,  WebServer, Database Server
The __________ structure of XML is much more powerful than _________ data formats. | tree-based, fixed-length
IE5 has an inbuilt XML Parser called | MSXML
The 'standalone' attribute can be set to | Yes/No
XML allows creation of multiple root elements | False
Logical structure of data can be interpreted and used in many ways by various applications due to XML tags. | True
Using DTD, _________ parser checks for validity. | Validating
Markup includes | All of the above
All processing instructions begin and end with | <? ... ?>
Assume <BODY> is used as the root element in an XML document. This indicates that | Root element can be customized. + Root element describes the function of the document.
Tags can begin with | All of the above
<xml> and <_Name> - Identify whether the following tags are valid or invalid | Invalid, Valid
Length of XML tag is dependent on the processor. | True
Is the following code for commenting in XML valid? <!-- Comment1 <!-- Comment2 --> --> | Invalid
XML declaration is also a processing instruction. | True
Height="8" Weight="70"> Here 8 and 70 when used outside XML Environment, they are taken as | Strings
To describe data XML uses a _________ | Document Type Definition
Which of these is not a correct name for an XML element? | <first name>
XML parsers support ___ bit and ___ bit Unicode encoding corresponding to ASCII. | 8 + 16
Which of the following statements is true? | All XML elements must have a closing tag.
Syntax for an XML declaration is | <?xml version="1.0"?>
WML for handheld devices is written in XML. | True
Elements inside the root are termed as child elements. | True
Which of the following statement/s are true? | All the above statements are true.
XML elements cannot be empty. | False
Attribute values must always be enclosed by double quotes. | False
Difference between XML and HTML | HTML was designed to display data and focus on how data looks
Identify if the following XML document code is valid. <?xml version="1.0"?>   <note>  <to>Joe</to>  <from>John</from>   <heading>Reminder</heading>   <body>Dont forget me this weekend!</body>   </note> | Valid
Identify if the following XML document code is valid.   <?xml version="1.0"?>   <to>Joe</to>  <from>John</from>   <heading>Reminder</heading>   <body>Dont forget me this weekend!</body> | Invalid
XML provides a software and hardware independent way of sharing data. | True
Identify if the following code is correct?      <b><i>This text is bold and italic</b></i> | Incorrect
Identify the line/s containing an error   1)<?xml version="1.0"?>   2)<note date=12/11/99>  3)<to>Ravi</to>   4)<from>Amit</from>   5)<heading>Reminder</heading>   6)<body>Make good food please</body>  7)</note> | Line 2
Match the correct entity names with the respective characters   &amp;      1) <  &gt;       2) '  &quot;     3) >  &lt;       4) "  e) &apos;     5) & | a-5 ,b-3 ,c-4 ,d-1 ,e-2
CDATA is text that will be parsed by parser. Identify whether the statement is valid. | Not Valid
End of a CDATA block is characterized by the character string | ']]'
XML documents referencing the DTD will contain the __________ declaration which specifies the location of an external DTD. | <!DOCTYPE>
External DTD is referenced at the beginning of the XML file. | True
ANY indicates that an element can contain only one child element of character data. | False
Child elements declared in a sequence need not appear in the document in the same sequence. | False
<!ELEMENT do(message+)> The "+" sign indicates that the child element 'message' must occur at least once inside the do element. | True
An attribute is another name for stating property of an element. | True
In DTD, XML element attributes are declared with a/an _________ declaration. | ATTLIST
'NMTOKENS' | The value is a list of valid XML names.
An attribute which does not have to included is indicated by the value: | #IMPLIED
The width attribute has a default value of 1. | False
Documents that follow the XML tag rules, but don't have a DTD are well-formed documents. | True
URL includes URI and URN. | False
Internal DTD and XML code are stored in a document with the file extension | xml
Verify the snippet given below: <?xml version="1.0" ?> <img src=bullet_d.gif></img | False
<!ELEMENT element-name (child-name )> Identify the sign to be placed in the syntax above so that it declares that the child name can occur zero or one time inside the element. | ?
Consider a DTD example: <!ATTLIST study type (theory | practical) theory> Is the following statement syntactically correct? |    No
The use of namespace in a document can be recognized using a ______ in the tag name. | colon
For elements in the XSL namespace, XSL uses the prefix | 'xsl:'
Identify the correct statements | None of the above.
The DOCTYPE statement represents the DTD which is termed as | Document Type Declaration
<!-- WELCOME.xml -->    <?xml version = "1.0"?>    <!DOCTYPE WELCOME SYSTEM "hello.dtd">    The following code indicates that the DTD is: | An external DTD
DTD helps define the legal building blocks of an XML document. | True
The keyword termed as the shorthand for mixed content containing all declared elements is: | ANY
URI may contain characters that are illegal in XML names. | True
Syntax for declaring an external DTD to an XML document is: | <!DOCTYPE N1 SYSTEM "show.dtd">
Writing an Internal DTD inside a DOCTYPE is known as: | Wrapping
Syntax for element declaration is | <!ELEMENT element-name (element-content type)>
Identify the correct statements | #PCDATA means that the element contains data that is to be parsed by a parser. + #CDATA means that the element contains character data that is not to be parsed by a parser.
Identify the correct syntax | <!ELEMENT element-name (child-element-name,child-element-name,....>
For declaring a child element 'message' to occur zero or more times inside the 'note' element, identify the correct syntax | <!ELEMENT element-name (child-name*)>
<!ELEMENT A((B,C) | D |   E)> Identify what the statement indicates     |    Element A consists D or E or B followed by C.
Identify the correct syntax: (One or more options are true) | 3 dap an con lai ko co #required
In the attribute-type the value which is pre-defined is indicated by: | xml;
Namespaces ensure that there is no conflict within element names and also determines how to process them. | False
<?xml version="1.0" ?> <!DOCTYPE APTECH [ <!ELEMENT APTECH (CLASS1 | CLASS2)+> <!ELEMENT CLASS1 (#PCDATA)> <!ATTLIST CLASS1   count CDATA #REQUIRED> <!ELEMENT CLASS2 (#PCDATA)> <!ATTLIST CLASS2   count CDATA #REQUIRED> ]> <TRIAL>ELECTRONIC GOODS   <CLASS1 count="8">10students</CLASS1>   <CLASS2 count="10">20students</CLASS2> </TRIAL> The following code will execute without displaying any errors? |    t 
<!ELEMENT trial (targets+, source,title+,message*,#PCDATA)>   The above example declares that the element trial must contain: | at least one 'target', exactly one 'source', at least one 'title', zero or one 'message', and some other parsed character data.
<?xml version="1.0"?> <script> <![CDATA [function matchwo(a,b) { if (a < b && a < 0) then   {    return 1    } } ]]> </script> The above code: | Executes without any error
(eval | eval |   ___) the following value indicates that    |    None of the above.
<!ELEMENT Circle EMPTY>   <!ATTLIST Circle radius CDATA "20">   The following code indicates that the circle is defined as an empty element,with the radius attribute having a default value of 20 and type CDATA. | True
Prefix is: | An alias selected by a document author
Identify the correct statements: | Tags from multiple namespaces can be mixed. + XSL uses the prefix ‘xsl:’ for elements in the XSL namespace
XML vocabulary is used for specifying formatting semantics. | True
XSLT is used to convert documents written in one XML DTD, into another DTD. | True
XML documents can be formatted using text editors. | False
In order to format an XML document we combine it with a | Style sheet
Identify the correct statements | CSS is an extension of HTML + XSL is an extension of XML
It is possible to have a property with multiple values | True
Inheritance of a style is a property in which a style rule for an element also applies to the element it contains. | True
Identify the attribute applied to a property to give it precedence over other properties. | !important
The 'type' attribute in the <?xml-stylesheet?> processing instruction is the MIME type of style sheet. | True
The font-size option 'larger' is used for | <relative-size>
'small-caps' is a value supported by font-style. | False
The marging option can take a maximum of _________ values. | 4
Identify the correct statements: | XML documents can be sent + XML documents, which are not displayed to the users, do not require stylesheets.
Assigning a style to a tag helps the user agent to interpret the data following specific rules. | True
Selectors helping us to differentiate between different occurrences of a tag are termed as | Contextual Selectors
In case of 3 style sheets containing a reference to the same element, then identify the style sheet used. | Last
IN CSS styling property value may be | All of the above
Identify the valid font properties and font related options are: | font-family + font-variant
Even if all the border options are set using 'solid' as the border style option will remove, or turn off all the borders | False
Space between the border and its contents is done by using the ________ property. | padding
Boxes can be overlapped using the z-index property. | True
The CSS Layout can control layout of the box on the screen. | True
The 'border' is used to set the width, color and style of the two borders. | False
Identify the correct syntax used by the XML document for displaying a stylesheet. | <?xml-stylesheet type="txt/css" href="abc.css"?> + <?xml-stylesheet type='txt/css' href='abc.css'?>
Consider and xml document <?xml version="1.0"?> <?xml-stylesheet type="text/css" href=xsampdoc.css ?> <xsampdoc>  <greeting>All The Best!</greeting> </xsampdoc>  The code for the style sheet xsampdoc is given as:  greeting {  display:block;  font-family:Arial,Helvetica, sans-serif;font-size:32pt;   width:30em;   color:red; }               What will be the output of the above code? | The xml document will be displayed in the tree format
In CSS, identification of a selector context is done by using a: | Period
In CSS, separation of multiple value combinations is by using a: | Semi-colon
Match the following Absolute units & Relative units with their respective values  a)Ex        1)Inches  b)In        2)Pixel   c)Px        3)Pica  d)Em        4)Fonts height  e)Pc        5)Height of the letter 'x' | a-5,b-1,c-2,d-4,e-3
Selectors allowing us to differentiate between different occurrences of <extension> are termed as | Contextual selectors
Each box has a border that separates it from the edge of the canvas | True
When two values are specified for the margin then | the first value is set as the top and bottom margins.
To assign the same style rule to different elements, we apply the same number of declarations  as the number of elements to several selectors. | False
The value of the CSS styling property can be a color value. | True
Syntax for referencing a cascading style sheet in an XML document is: | <?xml-stylesheet type="text/css" href="url"?>
CSS understands _____ number of colours defined by their names: | 16
Values used in font-weight are | normal+bolder+lighter
S{margin-right:-3cm;}   Is the above statement valid? | No
H1{font-size xx-large} Is the above statement syntactically correct to make the heading font extra large? | No
Select the flawless tags used to create a margin : | A{margin-left:10cm;} + A{margin-left:10%;}
In order to indicate to an application processing the style sheet to look for <All> tags followed by<Perfect> tags the syntax is: | All.Perfect
Differentiating between the different occurrences of a tag is by: | None of the above
The logical structure of XML can be manipulated by XSL. | True
The formatting components of XSL are not supported by IE5. | True
XSL provides a transformation language called: | XSLT
Sorting, filtering, pattern matching are few of the things that XSL cannot be used for. | False
XSL does not provide support for: | It provides support for all the options stated.
In XSL the sign that indicates that sorting takes place in the descending order is: | '-'
Select the correct attribute for sorting in an XSL document: | order-by
The processing part in a template in XSL defines the way the styling is to be applied to the child nodes. | True
Normally for enclosing a generic term when defining code we use | square brackets
A Data Island is a way to hold XML code within an HTML page. | True
Data Islands are also referred to as: | DSO’s
Instructions that control how an element and its content should be converted in XSL style sheets, are called: | templates
Identify the correct syntax | <?xml-stylesheet type="text/xsl" href='url'?>
"/" in the beginning of the XSL declaration indicates that: | this node applies to the root level node of XML document
In XSL the different source elements are separated by a: | pipe-stem
We can create documents, which can switch styles without submitting   the file back to the server. | True
Styles can change without waiting for the page to be reloaded. | True
XSL in Internet Explorer 5.0 is 100% compatible with the latest released W3C XSL standard. | False
Identify the correct tag for indicating that a document is a style sheet file and provides a location for declaring the XSL namespace | <xsl:stylesheet xmlns:xsl="url">
Identify the operator used to search across any number of levels of the hierarchy from the current context. | .//
Identify the operator used to search across any number of levels of the hierarchy from the root of the document. | //
Identify the tag required to match the entire document. | <xsl:template match= "/ |   ">
Identify the correct statements related to XSLT | It is a template-based language.+It lets one map a pattern in the source document with the output in XML.
XSLT and CSS are compatible standards. | True
Identify the statements which hold true for CSS: | none
Syntax for a typical template element is: | <xsl:template match = "myElement">
The process of turning the result of an XSL transformation into a suitable output form for a reader or listener is identified as: | Formatting
"*/*" this syntax used in XSL will search all the elements that are the grandchildren of the root. | False
Identify the elements, operators in XSL can be used with: | <xsl:template> + <xsl:for-each>
XSL uses XSLT to transform an XML ____________ into an XML _______________. | source tree+result tree
Treating a document as an object, extracting information, making changes and querying the document through code is termed as: | DOM
If an application supports DOM it is irrelevant whether the program is written in VB or | True
The available document models of DOM are: | Tree Model+Linear Model
Manipulating the XML document through DOM does not require any objects of the document to be created. | True
'parseError' is identified as a method due to which if an error is detected: | the document is not loaded
The root nodes can make multiple appearances in the document. | True
The 'appendChild()' method of the DOMDocument Object adds: | a new node
The 'readyState' property in the DOMDocument Object defines several states that specify the current status of the asynchronous download. | True
The property 'nextSibling' in DOMDocument Object contains the next node of the previous nodes in the parent's child list. | True
The 'xml' property always returns a UNICODE string. | True
'XMLDOMNodeList' property is: | Read only
The 'nextNode' method in the XMLDOMNodeLis Object returns a NULL value if there is no next node. | True
A model applied to dynamic documents is known as: | Tree Model
A model applied to static document objects is: | Linear Model
In a tree model wherein we take the example of a book in which the chapters and paragraphs correspond to an individual character in the document. These are termed as: | leaves
Considering a linear model applied to a book the only disadvantage that occurs is that if the book is revised and the page number and line number of the topic changes the model fails to work. Is the statement a valid statement? | Valid
The model which is identified as a collection of objects used to access and manipulate data stored in an XML document is an: | Object Model
In DOM, it is not necessary that an object for a valid node type will always be returned. | True
A lot of properties and methods are repeated in each of the DOM objects as they inherit the XMLDOMNode object. | True
Xml property of the XMLDOMNode object is a read only property. | True
XTLRuntime,XMLDOMNotation are exceptions that do not inherit methods and properties from the XMLDOMNode object. | False
Identify the statements which correctly relate to XMLDOMNamedNodeMap Object: | These objects can be accessed by an index.+ It is used to iterate through the attributes for a specific element.
Though the tree model is a dynamic model if there arises any change in the document a major part of the tree requires to be redrawn, | True
Identify the correct syntax for creating an XML document through DOM. | Set xmlDoc = CreateObject("Microsoft.XMLDOM")
'XMLDOMNode' is an XML DOM Object that: | represents the base interface for accessing data in the XML Object model.
'XMLDOMNamedNodeMap' is an XML DOM Object that: | provides iteration and access by name to the collection of attributes.
'XMLDOMEntity' is an XML DOM Object that: | None of the options given
'XMLDOMCDATASection' is an XML DOM Object that: | quotes or escapes blocks of text so that text is not interpreted as markup language.
'childNodes' is a property of the DOMDocument Object: (Select the correct statements) | Read-only.+Contains a node list containing the children.
Identify the correct statements related to 'createNode method': | When a node is created, it is created in context of the namespace mentioned.
The chroma filter is used to ________ | apply transparency effects dynamically
What does JAXB stand for? | Java Architecture for XML Binding
Consider the following declaration: !ATTLIST student age CDATA ???? Which one of the following can be used to replace ???? in the above definition? | #IMPLIED
XML defines the way elements relate to one another within the document’s tree structure, and specifies the attributes | False
Which one is used to declare an entity in DTD? | !ENTITY AUTHOR "Nguyen Ngoc Anh"
Identify the correct statements: | Both are correct
DOM supports go-forward only when traversing the XML documents. | False
Which one of the following classes is used to create an instance of XMLReader? | SAXReader
What is the javascript? | 3 cau co chu js o dau
Identify the correct statements about style sheets: | A Style sheet is a set of instructions to display the+A style sheet separates presentation layer from the content data of the document.
DTD doesn’t support namespaces. | True
Which of followings are features of SGML? | It needs a separate+It describe+SGML application is
Which one is most appropriate to parse large document? | SAX
___ exists outside the content of a document | An external DTD
An XML document can be displayed in different formats in different display devices such as computer, printer, and the like | True
Which XML parser supports XPath capability? | DOM
The markup languages are classified as ____, ____ and _____ | Structure Markup+Semantic Markup+Stylistic Markup
How to use external javascript file in a HTML file? | script language="JavaScript" src="filename.js"
An _____ XML document conforms to the rules of a Document Type Definition ( DTD. | Well-formed
What markup language categorization determines the content of the document? | Semantic Markup
What does the value string contain after the following code is executed? var string = "Good luck on the test"; string = string.split( " " ) | Good luck on the test
What will value contain after the following code is executed var value = new Date(); value = value.valueOf(); | a large integer representing the number of milliseconds between midnight January 1, 1970 and the current date
________ allow you to specify the style of your page elements (spacing, margins, etc.) separately from the structure of your document | cascading Style Sheets
If an element's position is declared as absolute then | positioning is set according to the margins of its parent element
Setting an element's position to relative is done within which of the following | STYLE></STYLE>
When using the width, height and overflow properties of an element, position must be | not absolute
In order for elements to be floated, position must be | not absolute
The outermost layer of the box model is the | margin
The CSS specification gives precedence to | author styles over user styles
What does the following CSS rule do? .note { font-size: 1.5em } | It multiplies all text object font sizes with CLASS = "note" by 1.5
Consider the following HTML document. 1 <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN"> 2 <HTML> 3 <HEAD> 4 <TITLE>Object Model</TITLE> 5 6 <SCRIPT LANGUAGE = "JavaScript"> 7 function start() 8 { 9 alert( pText.innerText ); 10 pText.innerText = "Thanks for coming."; 11 } 12 </SCRIPT> 13 14 </HEAD> 15 16 <BODY ONLOAD = start()> 17 18 <P ID = "pText">Welcome to our Web page!</P> 19 20 </BODY> 21 </HTML> Which of the following selections a true statement? | The pText object does not have an innerText attribute
With the ________, scripts can respond to a user moving the mouse, scrolling up or down the screen or entering keystrokes. | event model
The ________ attribute of the ________ element specifies another element that is identified by its ________ attribute | FOR, SCRIPT, ID
The ONLOAD event fires ________. | whenever an element finishes loading successfully
What does the following HTML document do? <HTML> <HEAD> <TITLE>DHTML Event Model - ONLOAD</TITLE> <SCRIPT LANGUAGE = "JavaScript"> var value = 0; function startTimer(){ window.setInterval( "updateTime()", 1000 ); } function updateTime(){ value++; pText.innerText = value; } </SCRIPT> </HEAD> <BODY ONLOAD = "startTimer()"> <P><A ID = "pText">0</A></P> </BODY> </HTML> | It counts the number of seconds elapsed viewing the page
The ONERROR event is used to handle all of these except | User errors.
Which of these is the command to enable error handling on a Web page | window.onError
Event ________ fires constantly whenever the mouse is in motion | ONMOUSEMOVE
If you used the ONMOUSEMOVE event to capture mouse events over an image, which of the following event properties would you use to capture the location of the mouse cursor relative to the image boundaries | offsetX / offsetY
What does the srcElement event property contain | reference to the element that fired the event
When the mouse moves over an element which of the following is triggered | ONMOUSEOVER
11 The ONFOCUS event fires when ________. | an element is clicked.
The ONBLUR event is associated with ________ | an element losing focus.
Event bubbling is _______. | the process of child elements passing events to their parent elements
The | character is referred to as a________. |    field delimiter
What does the following statement do? <SPAN ID = "colorName" STYLE = "font-family: monospace" DATASRC = "#Colors" DATAFLD = "ColorName"></SPAN><BR> | It assigns the TDC control named Colors to a span element for display purposes
What will value contain after the following code is executed assuming that Colors is a valid TDC control? value = Colors.recordset; | It will contain the current indexed item of the datasource
Microsoft's Internet Explorer Web browser contains a ________ that executes VBScript code | interpreter
________ is a technology that allows a server-side script to create dynamic content that is sent to the client's browser | ASP
What is wrong with the following VBScript code? 1 Select Case x 2 Case 1 3 Call MsgBox("1") 4 Case 2 5 Call MsgBox("2") 6 Case Else 7 Call MsgBox("?") 8 End Select | Nothing
See the snipset below and choose one answer: <xsl:for-each select="LIST//TITLE">...</xsl:for-each> | Match all <TITLE> elements one or more level deep in the <LIST> element
See the snipset below and choose one answer: <xsl:template match="BOOK*position()!=2+"> <xsl:value-of select="."/> </xsl:template> | Select all BOOK elements that are not the second child of their parents
See the snipset below and choose one answer: <xsl:value-of select="floor(-2.3)"/> | -3
Method getElementsByTagName return a node of list which will be stored as | MLDOMNodeList object
xmlDoc.async= 'false' mean: | Complete document must be loaded before futher processing
In SAX, to provide customized DTD handling, application need to implement : | dTDHandler
With XML Schemas, the senders can ________ the data in a way that the receiver will | understand ...
To specify how whitespace characters should be handled, we would use the whitespace | constraints
A variable that your webpage can store on or retrieve from the users computer is known as | Cookie
You must use a parser to read an XML document | True
Which of the following code snippets would you use to specify a default declaration of a namespace | <schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
What does the "sequence" element of XSD indicate? | All the elements specified within this element must compulsorily appear in the XML document, and they must appear in the specified order
John is an XML programmer. He writes the following code to represent the items of a toy company: <?xml version="1.0" encoding="UTF-8"?> <!--PRODUCTDATA is the root element--> <PRODUCTDATA> <PRODUCT PRODID="P001"> <PRODUCTNAME>Barbie Doll</PRODUCTNAME> <DESCRIPTION> The price of this toy is < 200</DESCRIPTION> <PRICE>$20.00</PRICE> <QUANTITY>12</QUANTITY> </PRODUCT> </PRODUCTDATA> Identify the error in the above code and suggest a solution for the same. | Error on line: <PRODUCT PRODID="P001"> Solution: He should use quotP001; instead of "P001".
Consider the following statements: Statement A: You can use the <!ATTLIST> statement in a DTD to declare an attribute for an element. Statement B: A single <!ATTLIST> statement can be used to declare multiple attributes for an element.Which of the following is correct about the above statements? | Statement A is True, and Statement B is False.
You want to create an attribute named "baseprice" with a default value of 200 for the "product" element. The attribute should accept integer values. Which of the following statements will you use to declare the attribute? | <xsd:attribute name="baseprice" default= 200 type="xsd:integer"/>
HTML code:<B> Customer </B><p>Michelle Abraham <br> Salmonella Apartments<br> Programmer<br></p>Peter is asked to represent the information given in the HTML code snippet above in XML. He represents the information as follows: <CUSTOMER> <NAME> Michelle Abraham <ADDRESS> Salmonella Apartments </NAME> </ADDRESS>  PROFESSION> Programmer </PROFESSION> </CUSTOMER> Identify the error in the above code and suggest a solution for the same. | Error on line: <NAME> Michelle Abraham <ADDRESS> Salmonella Apartments </NAME> </ADDRESS> . Solution: The closing tag of the Name element should be written before the ADDRESS element.
Identify the type of content of the PRODUCT element in the following XML code fragment. <PRODDET> <PRODUCT> <PRODID="P001"></PRODID><font face="fnt__2013101081549_0" size="14" color="#000000" letterspacing="0" kerning="1"> <PRODDESC>Baby Food </PRODDESC><font face="fnt__2013101081549_0" size="14" color="#000000" letterspacing="0" kerning="1"> <PRICEPERUNIT> 12 </PRICEPERUNIT> </PRODUCT> </PRODDET> | ComplexType
Consider the following statements: Statement A: XML is a text-based markup language that enables you to store data in a structured format by using meaningful tags. Statement B: XML allows you to format data as per the requirements of the application.Which of the following is correct about the above statements? | Both, Statement A and Statement B, are True.
Consider the following statements: Statement A: XML stand for eXtensible Markup Language. Statement B: CSS stand for Creative Style Sheets.Which of the following is correct about the above statements? | Statement A is True, and statement B is False.
Which of the following set of statements will you use to process all the child nodes of the root node? | <xsl:template match= "/"> <xsl:apply-templates/> </xsl:template>
Consider the following statements: Statement A: XML enables you to store data in a structured format by allowing you to create customized tags. Statement B: XML documents can be easily interpreted by target systems. Which of the following is correct about the above statements | Both, Statement A and Statement B, are True.
Consider the following statements: Statement A: XSLT is a superset of the CSS functionality. Statement B: XSLT is an application of XML.Which of the following is correct about the above statements? | Statement A is False, and statement B is True.
Give the content of books.xml file in the picture.To display the title of book, the following javascript is developed: <script language="javascript"> function fnLoadXML() { if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari xmlhttp = new XMLHttpRequest(); } else {// code for IE6, IE5 xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); } xmlhttp.open("GET", "books.xml", false); xmlhttp.send(); xmlDoc = xmlhttp.responseXML; var arrTitle=xmlDoc.getElementsByTagName("title"); for (i=0; i<arrTitle.length; i++) { ??? document.write("<br>"); } }</script> | document.write(arrTitle[i].childNodes[0].nodeValue);
Consider the following XML document: <?xml version="1.0"?> <ORDERDETAILS> <PRODUCT ID="P001" NAME="Mini Bus" PRICE="75"><ORDER ID="O001"> <SHIP_ADD>10 NEWSLAND ESTATE, NY</SHIP_ADD> <QUANTITY>30</QUANTITY> </ORDER> <ORDER ID="O002"> <SHIP_ADD>11 NEWSLAND ESTATE, NY</SHIP_ADD> <QUANTITY>50</QUANTITY></ORDER> </PRODUCT> </ORDERDETAILS> Which of the following code snippets will you use to display the product of price and quantity | Choose D
The data about employees is stored in an XML document. The data is to be presented in a browser window in the ascending order of BASICPAY and descending order of EMPLOYEECODE. Which of the following code snippets should be used in the XSLT style sheet to sort the employee data? | <xsl:sort select="BASICPAY" data-type="number" order="ascending"/> <xsl:sort select="EMPLOYEECODE" data-type="text" order="descending"/>
Consider the following statements: Statement A: You can point at a single document by using a hyperlink in HTML. Statement B: HTML links are multidirectional. which of the following is correct about the above statements? | Statement A is True, and Statement B is False.
Consider the following statements: Statement A: Java Architecture for XML Binding (JAXB) provides a fast and convenient way to bind between XML schemas and Java representations, making it easy for Java developers to incorporate XML data and processing functions in Java applications. Statement B: JAXB provides methods for unmarshalling (writing) XML instance documents into Java content trees, and then marshalling (reading) Java content trees back into XML instance documents. | Statement A is True, and Statement B is False.
Consider the following statements: Statement A: The xjc schema compiler, also called the binding compiler, is an important part of a JAXB implementation. The compiler binds a source XML schema to a set of schema-derived program elements. The binding is described by an XML-based binding language in a binding file. The binding compiler produces a set of packages containing Java source files and JAXB property files. Statement B: In most cases, the default bindings generated by the binding compiler are sufficient. However, there are cases where you might want to modify the default bindings (for example, you might want to provide more meaningful package names than are generated by default), you can use the following syntax: xjc schema_file.xsd ""g package_name | Statement A is True, and Statement B is False.
The following paragraph describes the differences between XML and HTML but there are some FEATURES are NOT correct. Please find out them. XML features Defined set of tags designed for web display Format drivenEnd tags required for well-formed documents Quotes required around attributes values Slash required in empty tags HTML features User definable tags Content driven End tags not required Quotes not required Slash not required | It should be swap between "Defined set of tags designed for web display" and "Format driven" of XML to "User definable tags" and "Content driven" of HTML
Which one of the following XLink attributes allows you to specify the target of a link? | Href
Property documentElement of DOMDocument object return | an object representing the root element if the XML document
Consider the following statements: Statement A: A namespace is a method of preventing conflicts between elements having the same names. Statement B: A namespace URI is the same as a Web URI. Which of the following is correct about the above statements? | Both, Statement A and Statement B, are True.
What does method characters() of ContentHandler interface receive events for? | Character data
You want to create an attribute named "baseprice" with a default value of 200 for the "product" element. The attribute should accept integer values. Which of the following statements will you use to declare the attribute | <xsd:attribute name="baseprice" default= "200" type="xsd:integer"/>
Which is the correct way to use the union operator | <xsl:apply-templates select='/CD/Artist |    /Tape/Artist' />
Is the following attribute valid? <!ATTLIST Test4 an_attribute ID #FIXED "value"> | No
If you "import" a stylesheet, the templates in it have lower precedence than those in the current stylesheet. | True
Considering the following XML document, what is the result of count(//*): <?xml version="1.0" encoding="UTF-8"?> <root> <employee id="45"> <name>John</name> <salary>$100,000</salary> </employee> </root> | 4
What organization presented the first version of Starndardized Generalized Markup | Language (SGML) in 1980?
What does #REQUIRED attributes mean | The attribute value must be included in the element
Is the following attribute valid? <!ATTLIST Test4 an_attribute ID #FIXED "value"> | no
Can you nest attribute groups inside other attribute groups | Y
If the attribute minOccurs is specified but the attribute maxOccurs is not, what is the  default value of the latter ? | minOccurs
What is a correct way of referring to a stylesheet called "mystyle.xsl”? | <link type="text/xsl" href="mystyle.xsl" />
The World Wide Web Consortium (W3C) started to develop XSL because there was a need for: | XML-based Stylesheet Language
XSL consists of three parts. Which are? | XSLT, Xpath, XSL-FO
Value of the local variable is bounded to which element. | xsl:when
A _____ function returns number of nodes present in an argument node-set. | count
If the DTD is external to your XML source file, it should be wrapped in a DOCTYPE definition with the following syntax: | <!DOCTYPE root-element SYSTEM "filename">
An element declaration has the following syntax: | <!ELEMENT element-name category
<!-- WELCOME.xml --> <?xml version = "1.0"?> <!DOCTYPE WELCOME SYSTEM "hello.dtd"> The following code indicates that the DTD is: | An external DTD
The keyword termed as the shorthand for mixed content containing all declared elements is | Any
Identify the correct statements | PCDATA means that the element contains data that is to be parsed by a parser. + #CDATA means that the element contains character data that is not to be parsed
For declaring a child element 'message' to occur zero or more times inside the 'note' element, identify the correct | <!ELEMENT element-name (child-name*)>
<!ELEMENT A((B,C) | Identify what the statement indicates
In the attribute-type the value which is pre-defined is indicated by: | xml
<?xml version="1.0" ?> <!DOCTYPE APTECH [ <!ELEMENT APTECH (CLASS1 | CLASS2)+> <!ELEMENT CLASS1 (#PCDATA)> <!ATTLIST CLASS1 count CDATA #REQUIRED> <!ELEMENT CLASS2 (#PCDATA)> <!ATTLIST CLASS2 count CDATA #REQUIRED> ]> <TRIAL>ELECTRONIC GOODS <CLASS1
<!ELEMENT trial (targets+, source,title+,message*,#PCDATA)> The above example declares that the element trial must contain: | at least one 'target', exactly one 'source', at least one 'title', zero or one 'message', and some other parsed character data.
<?xml version="1.0"?> <script> <![CDATA [function matchwo(a,b) { if (a < b && a < 0) then { return 1 } } ]]> | Executes without any error
<!ELEMENT Circle EMPTY> <!ATTLIST Circle radius CDATA "20"> The following code indicates that the circle is defined as an empty element,with the radius attribute having a default value of 20 and type CDATA. | True
Identify the correct statements: | Tags from multiple namespaces can be mixed. + XSL uses the prefix 'xsl:' for elements in the XSL namespace
XML vocabulary is used for specifying formatting | True
Which of the following is NOT done with JavaScript | RGB Colors
Which of these characters can be included within the text in an XML document in literal form? | ; -
Which of these is a valid comment in XML? | <!- -This data should be hidden
<!DOCTYPE Book SYSTEM “book.dtd”> | Book.dtd is an external DTD
23 Giving a local function variable the same name as a global variable will result in which of the following? | The local variable will "hide" the global variable.
1 _________ are data structures consisting of related data items (sometimes called collections of data items). | arrays
2 c = new Array( 12 ); | declares, allocates
document.write(c[8]) | undefined
</SCRIPT> | 9
10 Which of the following is an illegal array initialization statement? | var n = new Array( 5 );
total2 += theArray[ element ]; g) | 0 to the array length - 1
++test[ 7 ]; | 4
13 In JavaScript, all objects and Arrays are passed to functions by ________. | reference
var value = theArray1.join( " " ); | The join method will create a string from the values in theArray1.
</SCRIPT> | 1 2 3 4 5 6 7 8 9
By starting at the _______ element, we can select any element in the XML document by carefully creating a chain of children elements. | Root
When creating our XPath statement, each element is separated by a _________. | forward slash
In XPath, you reference an element by using it's __________. | Name
At the end of your XPath expression, add the symbol _________ plus the name of the attribute you wish to select. | @
If we want to select the supplier attribute of it's parent element, chips, our expression would be__________. | chips@supplier
When selecting elements, the method of using the complete path is referred to as the ________ path, and it is useful for selecting specific elements. | Absolute
When you are using the absolute path to locate an element, your expression must start with the _________ element of your XML document. | Root
In designating an element in an XML structure, if you wanted to refer to one of the sub elements, you will have to create a string of child elements from the root to the desired child element. | True
Xpath expressions can be created using _________ paths, so that instead of starting at the root element, you can simply reference the element from within the path structure and go from there. | Relative
To construct a relative path expression to select every count element, what would the correct expression look like? | count
If you wanted to select every cost element that had a book parent, you would use a relative expression like this: | book/cost
With XPath expressions, _______ are used to select the descendants of an element. | // (double forward slashes)
To construct a relative XPath expression to select every count element that has a book ancestor, you would use the code: | book//count
In an XPath expression, if you put _______ where an element would normally go, you can select the parent element. | .. (2 periods)
In an XPath expression, the element to the right of the double period will have its parent selected. | False
In an XPath expression, the wildcard _________ can select every child element at once because it automatically matches everything possible. | * (asterisks symbol)
When working with XPath expressions, the ability to combine multiple expressions into one can be done by _________. | (vertical bar aka "pipe")
There is NO LIMIT to the number of XPath statements that can be combined into one. | True
An XPath _________ is similiar to a programming if...then conditional statement that allows you to select elements based upon certain criteria. | Predicate
An XPath predicate is contained within _________, and comes _______ the parent element of what will be tested. | [ ] , after
The format for writing an element-related predicate is: | parent[child some test here]
Besides testing the values of elements, you can also use predicates to check the values of attributes. | True
The format for writing an attribute-related predicate is: | element[@element's attribute some test here]
Whenever you need to select an element and use a predicate on that same element, you will need to use a ______ to access that element's value. | . (period)
The acronym XSLT stands for __________. | Extensible Stylesheet Language Transformations
XSLT is used style and transform XML documents. | True
XSLT files must be save with _______ extension. | .xsl
XSLT does not physically change an XML document- just how it is displayed. | True
Unlike XML documents, XSLT documents do not need to include an XML declaration statement at the top of each XSLT document. | False
Every XSLT file must include the root element: xsl:stylesheet . | True
The XSLT root element has which two required attributes? | version & xmlns:xsl
The standard for of an XSLT element is: | xsl:element
Using the xsl:prefix before every XSL element is recommended by NOT required. | False
xml:stylesheet is a special declaration for linking XML documents wit XSLT stylesheets, and it must be placed before your xml declaration to successfully link your XML file to your XSLT code. | False
The xml-stylesheet element has which two attributes? | type & href
The ________ attribute added to the ________ element uses your knowledge of XPath to find information in your XML document. | match & xsl:template
If we wanted to find book elements in an XML document, we would set the match attribute to a simple XPath expression: book, and the code would look like this: | <xsl:template match="book">
The ________ element lets you decide when and where your template elements are used. | xsl:apply-templates
The _________ attribute lets you chose specific child elements when working with the xsl:apply-templates element. | select
The XSLT processor begins at the ______ element when looking for template matches. | Root
The _________ element uses the select attribute to chose elements and obtain their contents. | xsl:value-of
The xsl:value-of element can only be used to retrieve the value of the xml elements; attributes must be retrieved with the xsl:attrib-value element. | False
To select the id attribute's value from the code: <student id="1">Jack</student>, you would use the following code: | <xsl:value-of select="@id" />
Xslt's styles can be applied to XML elements selectively based on the element's attribute value. | True
All major browsers have support of XML and XSLT. | True
Firefox supports XML, XSLT, and XPath from version _____. | 3
Internet Explorer supports XML, XSLT, and XPath from version ____. | 6
Google Chrome supports XML, XSLT, XPath from version _____. | 1
Opera supports XML, XSLT, and XPath from version _____. | 9
Apple Safari supports XML and XSLT from version _____. | 3
What is XML | Extensible Markup Language: an application- and platform-independent way to represent data
What makes XML Unique | It is a standard that lets users create their own tags to structure and store data
Who created it, when? | Also a creation of W3C - first developed in 2001. |    Current version: XML 1.0 and XML 1.1
What are characteristics of XML documents | The documents are self-describing |    The documents are a hierarchy of nested objects
what is the purpose of HTML | HTML - designed to display data, with focus on how data looks
what is the purpose of XML | XML - designed to transport and store data, with focus on what data is
What are characteristics of HTML tags | HTML tags are predefined with a set meaning
What are characteristics of XML tags | lets the developers create |    -XML needs to be well formed and validated
What are some features of XSD | Written in XML , Support data-types
What are 2 styling options for XML? | CSS and XSLT (Extensible Stylesheet Language Transformation)
What are some CSS limitations when used with XML | Adding functionality , Reordering and sorting , Generation of text
What are some Features of XSLT | Add/remove elements and attributes
With XML Schemas, the senders can ________ the data in a way that the receiver will understand | ...
XML DOM - defines a standard set of objects for XML documents only | true
what does the Option Explicit statement do | It does not allow the programmer to use variables without declaring them first.
The character is referred to as a________. | field delimiter
which of the following is a JavaScript repetition structure | do/while
What would the browser display if the following script is executed? <SCRIPT LANGUAGE = "JavaScript"> var count = 5, total = 0; while ( count > -1 ) { total = total - 10; count = count - 1; } document.write(total); </SCRIPT> | -60
The "prepackaged" functions that belong to JavaScript objects such as Math.pow and Math.round are often called ________. | methods
What would the function cube return, assuming it is called with the line cube(3). function cube(y); { return y y y; } | JavaScript runtime error
The ________ attribute is added to a TABLE element's opening tag to bind a data island to a table | DATASRC
In the following line, the word document is a ________ which resides in the computer's memory and contains information used by the script. document.writeln("Hello World"); | object
Consider the following script. What is wrong with the following code? 1 <SCRIPT LANGUAGE = "JavaScript"> 2 var firstNumber, 3 secondNumber; 4 thirdNumber; 5 6 thirdNumber = 7 parseInt( window.prompt( "Enter an integer", 0 ) ); 8 document.write( thirdNumber ); 9 </SCRIPT> | The word var must be placed before thirdNumber in line 4
Which of the following selections does not follow the rules of operator precedence? Assume that the operators on the left are evaluated first | parentheses, subtraction, modulus
A program in which all statements are executed one after the other in the order in which they are written exhibit ________. | ...
With reference to the snippet of code given below, choose the correct syntax to complete the second line in order to create a XML Document Object var sample sample = ________________________ | new ActiveXObject("microsoft.XMLDOM")
What would the browser display if this script was executed? <SCRIPT LANGUAGE = "JavaScript"> var c = new Array(8); for( var i = 0; i < 10; i++ ) c[i] = i; document.write(c[9]) </SCRIPT> | 9
With the ________, scripts can respond to a user moving the mouse, scrolling up or down the screen or entering keystrokes | event model.
What would the browser display if the following code is executed in a script? var grade = 59 if ( grade >= 60 ) document.writeln( "Passed." ); else document.write( "Failed. " ); document.writeln( "You must take this course again." ); | Failed
The value a in the following statement is called the ________ and the value b is called the ________. face = Math.floor( a + Math.random() * b ); | shifting value, scaling factor |    See More
Which of these is a valid comment in XML? | <!- -This data should be hidden <FIRSTNAME>Joe</FIRSTNAME> <LASTNAME>Johnson</LASTNAME> - ->
What does the keyword SYSTEM indicate in the following code? <?xml version ="1.0"?> <!DOCTYPE Book SYSTEM "book.dtd"> | Book.dtd is an external DTD
Which of the following is not a keyword used for default settings in an! ATTLIST element? | DEFINE
An XML Schema defines whether an element is empty or can include text. | true
The StAX cursor API represents _______________. | cursor with which you can walk an XML document from beginning to end.
To compose a schema with the same target namespace you can use | <include schemaLocation="..." />
What does the keyword SYSTEM indicate in the following code? <!DOCTYPE Book SYSTEM "book.dtd"> | Book.dtd is an internal DTD
What is the significance of the '+' sign in the code given below? <!ELEMENT BOOK (AUTHOR+)> | Indicates that AUTHOR tag must occur at least once inside the BOOK element
What would the browser display if this script was executed? <SCRIPT LANGUAGE = "JavaScript"> var c = new Array(8); for( var i = 0; i < 8; i++ ) c[i] = i; document.write(c[8]); </SCRIPT> | undefined
Which of the following XML code snippets is/are correct? | <BOOK> <AUTHOR> abc...</AUTHOR> </BOOK># Which statements are true? |    The DTD specifies ... + The DTD contains the list of tags allowed within the XML document, and their types and attributes.
An Entity bean must be capable of forming ____ | relationships
___ types of relationships can exist between entity beans | Seven
What are the 4 types of cardinality | 1..1 , 1.. , ..1 and ..
Each relationship can be either ___ or __ | unidirectional or bidirectional
Annotation for 1..1 | @OneToOne
Annotation for 1..* | @OneToMany
Annotation for *..1 | @ManyToOne
Annotation for .. | @ManyToMany
The CascadeType is defined as a Java ___ | enumeration
The ALL value represents all of the cascade ____. For example: @OneToMany(cascade={CascadeType.ALL}) | operations
Default Fetch Behavior for One-To-One | Eager
Default Fetch Behavior for One-To-Many | Lazy
Default Fetch Behavior for Many-To-One | Eager
Default Fetch Behavior for Many-To-Many | Lazy
A _____ _____ is used to receive a message from a queue | Message Listener
A ____ _____ allows you to build app that is interoperable applications | Web Service
SOAP uses ___ and ____ | XML and HTTP
What does SOAP stand for | Simple Object Access Protocol.
What does WSDL stand for | Web service Description Lanaguage
What does UDDI stand for | Universal Description, Discovery and Integration
____ is a text based language | XML
____ is a java api for xml parsing | SAX
Two styles of soap binding: | rpc and document style
What are the four key elements of a wsdl file | types, messages, port type, binding,
What does JAXB stand for | Java Architecture for xml binding
____ allows you to map xml context to and from java objects | JAXB
JAX-WS supports which type of web service | SOAP
What are the two prevailing styles of web services | RESTFUL and SOAP
What does REST stand for | Representational State Transfer
RESTful WS place a emphasizes on ____ communication | stateless
What does JAX-RS standfor | Java API for XML and RESTful services
___ annotation is used to specify URI of the resource | @Path
___, ____ annotations are used to specify data format to be sent out or recieved | @Produces, @Consumes
What are the four annotations used to annotation most methods to specify which operation to invoke | @GET, @POST, @PUT, @DELETE
The _____ annotation can be used to bind template parameters to a resource class field | @PathParam
JAXB ___ method takes a string and converts it into xml | marshal
The JAXB _____ method is used to read from a URL and convert it from XML to Java String | unmarshal
Struts2 flow of controler (5 things) | filter dispatcher, web.xml, intercepterors, actions, resulting JSP
Web server responses can be ____ or ____ | static or dynamic
What does CGI stand for | Common gateway interface
____ are small java classes that process HTTP request and return HTTP responses | Servlets
Servlets are deployed in a Servlet ____ | container
Servlets do ___ have a main() method | not
What are the two methods that are considered to be the entry point to a servlet | doGet(), doPost()
Servlet output is usually ___ | html
Any class that extends ____ is a servlet | HTTPServlet
What are the five principal methods to manage the servlets life cycle | init, service, destroy, getServletConfig, getServletInfo
The ____ method is called by the container before the servlet instance is killed | destroy()
Post request put form data in the ___ of the HTTP request | body
Use the ____ request when sending data to the server | POST
Use the ___ request when no data is sent | GET
The do-do methods in a servlet should throws what exception | throws ServletException
The servlet container is responsible for the ____ of the servlet | lifecycle
The web clients interact with a servlet using a ___/____ pattern | request/response pattern
_____ method is called when the servlet starts | init()
___ method is called to process request | service()
___ method is called before servlet process ends | destroy()
____ method is called so that the servlet can access information about the servlet container | getServletConfig()
____ method is called so that the servlet container can access information about the servlet | getServletInfo()
The HttpServlet extends _____ | GenericServlet
Example JSP expression. This expression is evaluated and turned into a string | <%= string %>
Example JSP scriptlet | <% for () {} %>
Example JSP scriptlet Declaration | <%! ... %>
What is the major difference between Servlet 2.5 and Servlet 3.0 | web.xml
What are the three JSP Servlet Methods | jspInit()
What happens when you try to access a JSP | - Browser sends HTTP request to web server
- JSP engine loads the JSP page from disk and converts it into a servlet content. | - JSP engine compiles the servlet
JSP1.2 vs. JSP2.0 | Version 2.0 incorporated the expression language, which makes your life a lot easier. Otherwise you |    have to go through the get property and set property
What does DDL stand for | Data Definition Language
The method used most often for executing SQL statements is ____ | executeQuery
What are the two main purposes of Transaction Support | Recovery, Concurrency
A database transaction must be ___ | ACID
What does ACID standfor | Atomic, Consistent, Isolated, Durable
<?xml version="1.0"> | xml declaration
_____ can be used to validate xml documents | Schemas
XML Schema file extension is what | xsd
What are two types of XML Parsers | SAX, DOM
DOM VS. SAX | -DOM loads the entire document into memory
____ allows you to randomly access stuff in the document unlike SAX | JAXB
What does SAX stand for | Simple API for XML
Extensible Markup Language | XML (acronyn)
XML (definition) | a set of rules for encoding documents in machine-readable form
carrying | HTML is a about displaying information, while XML is about _____________ data (transport and storage)
markup language | a system of symbols (tags) and rules embedded in a document that govern its structure (content) and format (appearance)
structure, store, transport | XML was created to _______, ________, and ________ information
complement | XML is a _______________ to HTML
root element | XML documents must contain a ______________
root element | this element encloses all other elements and is therefore the sole parent of them all
child element | any element located within the root element
closing tag | in XML, all elements must have a ____________
case | XML tags are _____________ sensitive
www.w3schools.com | an excellent XML tutorial can be found here
no | XML has __________ predefined tags
independent | XML is a software and hardware __________ tool for carrying information
data transmissions | XML is the most common tool for __________ between all sorts of applications
plain text format | XML data is stored in __________
nested | XML elements must be properly __________
quoted | XML attribute values must be __________
&lt;, &gt;, &amp;, &apos;, &quot; | these are the five predefined entity references
not truncated | in XML, the white-space in a document is __________
LF | XML stores a new line as __________
other elements, text, attributes, a mix | in XML, an element can contain _________, __________, __________, or __________
letters, numbers, other characters | XML names can contain __________, __________, and __________
number, punctuation character | XML names cannot start with a __________ or a __________
xml, variation | XML name cannot start with the letters __________ or any __________ of them
spaces | XML names cannot contain __________
reserved words | in an XML name there are no __________
dash, period, colon | for XML best naming practices, what three characters should you avoid?
attributes | these provide additional information about an element
single quotes, &quot;data&quot; | if an attribute value itself contains double quotes you can use __________ or __________
attributes | it is the advice of w3schools to use tags rather than __________
multiple values, tree structures, expandable | attributes cannot contain __________ or __________ and are not easily __________
metadata, data itself | __________ should be stored as attributes, and the __________ should be stored as elements
well formed | XML with correct syntax is __________ XML
valid | XML validated against a DTD is __________ XML
Document Type Definition | DTD (acronym)
DTD (document type definition) | the purpose of this is to define the structure of an XML document
XML Schema | an XML-based alternative to DTD
stop processing | The W3C XML specification states that a program should __________ an XML document if it finds an error
errors | With XML, __________ are not allowed
raw XML | __________ files can be viewed in all major browsers
right click the page, View Source | to view raw XML on a webpage you must __________ and select __________
invented | XML tags are __________ by the author of the XML document
display | XML documents do not carry information about how to __________ the data
CSS (Cascading Style Sheets) | With __________ you can add display information to an XML document
Cascading Style Sheets | CSS (acronym)
XSLT | W3C recommends using __________ instead of CSS
eXtensible Stylesheet Language Transformation | XSLT (acronym)
XSLT | with __________ you can transform an XML document into HTML
sophisticated | XSLT is far more __________ than CSS
displayed by a browser | XSLT can be used to transform XML into HTML, before it is __________
is an XML-related technology that is used to find elements, attributes, and other information in your XML document. | XPath
XPath can locate any type of information in an XML document with one line of code that returns a value when executed and is referred to as a(n) ________. | Expression
______ and ______ are both new XML-related technologies that extend or borrow from XPath. | XPointer & XQuery
An Xpath expression describes the location of an element or attribute in our XML document | True
Which of the following nodes in a DOM tree are always leaf nodes (nodes with no children)? | Processing Instruction Notation CDATA Section
Which of the following statements MOST accurately describes a "linkbase" ? | An XML document, which contains inbound or third party links is called a linkbase
During the redesign of a legacy system, it is decided to use XML as the data exchange format between | key/keyref
Which of the following represents an abstraction of an unordered collection of nodes in DOM? | NamedNodeMap
In a B2B organization, it is required to exchange XML messages conforming to a single vocabulary | Is the parser at the receiving end a validating parser? Does the parser handle XML Schemas or DTDs? Does the document instance override the internal DTD subset?
Which of the following DOM interfaces could be used to filter a set of nodes from a tree based on some criteria? | NodeFilter
Which of the following statements does not correctly identify the limitations of DTDs ? | DTD can be changed programatically using the DocumentType interface in DOM
Assuming that the xsd prefix is mapped to the namespace URI for XML schema, what is the type | xsd:anyType
Which of the following are valid combinations of minOccurs and maxOccurs for any element in a xsd:all group ? | minOccurs = 1 maxOccurs = 1 minOccurs = 0 maxOccurs = 1
Which of the following XSLT functions can be used to return a nodeset with the current context node? | current()
What schema groups should a group of elements be defined under in order to allow them all to appear in any sequence in a document instance? | xsd:all
XSL is BEST described as a | Declarative language
Which of the following resources can be signed using an XML signature? | XML encoded data specific section of an XML file Binary encoded data
Which of the following schema fragments is the same as the DTD fragment below ? <!ELEMENT myElement EMPTY> | None of the above
Which of the following cannot be a part of a SOAP message? | DTD Processing Instruction
The above line is parsed using a SAX2 parser. What is the sequence of events passed by the parser to the handler ? | startPrefixMapping(),startElement(),endElement(),endPrefixMapping()
A DTD is written for the above XML document such that the above XML document is validated successfully | The DTD needs to declare xml:space as an attribute of the root element
Which of the following XML Schema elements can be used to make schemas more readable ? | xsd:annotation xsd:appInfo
Which of the following value pairs for the parameters minOccurs and maxOccurs can be used to indicate the cardinality operator "?" | minOccurs = "0" maxOccurs = "1"
Which of the following statements about XSL formatting objects are false ? | Elements in XSL-FO objects map to the boxes on the page in a one to one fashion
Which of the following Document type definitions will validate the below XML document successfully ? | <!ELEMENT root EMPTY><!ATTLIST root rootattr CDATA #FIXED "value">,<!ELEMENT root (#PCDATA)>,<!ELEMENT root ANY><!ATTLIST root rootattr CDATA "value">
Which of the following statements about namespaces and DTDs are false? | DTDs for a document with namespace qualified elements cannot be written since DTDs do not support namespaces
Which of the following XML documents will NOT get successfully validated against the DTD below | <root><root1/><root3/><root3/><root2/></root>
which of the following SAX2 methods is used by a non validating parser to report that an entity reference is not resolved | skippedEntity()
Which of the following XSLT functions returns the number of nodes present in the nodeset, passed as an argument | count()
Which of the following XML based technologies can be considered as XML metadata? | Document Type Definition, XML Schema
Nebula communications Inc is currently in the process of optimizing their database driven XML based web | Change the application's parser to SAX instead of DOM
A small retailer maintains inventory data in an XML document. This inventory data is read by an application. | DOM Parser
Which of the following statements regarding WSDL are true ? | WSDL can be used to indicate the operations that are considered valid and supported for a given service, To specify where a particular service is implemented
An XML based application maintains a very large configuration file in XML format. | SAX
Which of the following entries in an XML document will cause an application reading the document to use null values for the field named "customerAddress"? | <customerAddress xsd:nill="true"/>
A valid SOAP message should contain which of the following XML elements ? | Envelope, Body
Which of the following values of minOccurs and maxOccurs respectively represent the cardinality operator "+" ? | 1, unbounded
Which of the following statements correctly describe the differences between key/keyref and ID/IDREF ? | key/keyref allows the key to be defined for a set of elements while ID/IDREF allows keys to be defined only for the entire document, key/keyref can be used with elements and attributes, while ID/IDREF can only be used with attributes
Which of the following unabbreviated XPath expressions is the same as the abbreviated XPath expression below?/book/chapter[4]/paragraph[2]/sentence[1] | /child::book/child::chapter[position()=4]/child::paragraph[position()=2]/child::sentence[position()=1]
Which of the following statements about XML signatures are true ? | XML signatures have support for non-repudiation of the data that they sign, XML signatures can be used for XML data authentication
A University wants to unify all their applications from the various departments in order | Use an XSLT stylesheet to convert the incoming or outgoing XML document into the format used within the division
Which of the following statements regarding the differences between DOM and SAX are false ? | DOM is ideally suited than SAX for handling large documents, that may need to be searched efficiently, If random access to an XML document is desired, SAX is better suited than DOM
Which of the following statements w.r.t XLinks and HTML links are true ? | HTML links cannot be used for multi directional navigation, XLinks can be used to link documents without modifying the documents to include the links
Which of the following XML documents are NOT well formed ? | <?xml version="1.0"?><root attr1="val1" attr2="" attr1="test"><root/></root> </root>, <?xml version="1.0"?><root attr1="1value" attr2=""><root> 5 is < than 4 </root> </root>
Which of the following axes can be used together to reference all the nodes in any XML document ? | ancestor, descendant, self, following, preceding
An XML based web application to process audio files which are binary in nature needs to be written. | UDDI
Which of the following statements about XSL formatting objects are true ? | It is possible to perform conditional formatting using XSL FO, It is possible to render a page with multi column layouts using XSL FO, Formatting objects can be used to describe the layout of a rendered page
Which of the following statements regarding processing instructions are true ? | Processing instructions can be used as a mechanism for extending schemas that cannot otherwise be modified, The target for a processing instruction must be a valid XML name
Which of the following statements regarding messaging with SOAP are true? | SOAP is a protocol agnostic methodology of transmitting data to other SOAP enabled applications
Which of the following lines can be used in an XML document named Test.xml to associate it with a stylesheet named Test.css | <?xml-stylesheet href="Test.css" type="text/css"?>
A county library uses an XML based application to query an XML database of books maintained | SAX
UDDI stands for which of the following | Universal Description Discovery and Integration
Which of the following XSLT functions can be used to generate a string that can be used as the value of an ID type attribute? | generate-id()
Which of the following values correctly represent the default values of the minOccurs and maxOccurs attributes respectively ? | 1,1
Which of the following statements regarding XLinks are FALSE? | XLinks can be used to connect only two resources
Which of the following abbreviated XPath expressions is equivalent to the following unabbreviated XPath expression ?child::chapter[attribute::number and attribute::title] | chapter[@number and @title]
Consider the following XML document and the attached stylesheet. What is the result of applying | FALSE
Which of the following XML Schema element definitions are equivalent to the element definition below ? <xsd:element name="myElement" type="xsd:anyType" /> | <xsd:element name="myElement" />
Which of the following XPath function calls will return the value 10 when invoked ? | string-length("XML-Schema")
Which of the following statements relating to cascading style sheets and formatting objects is FALSE ? | CSS is an XML syntax that can be used to describe the appearance of particular elements in an XML document, Cascading style sheets can only be applied to non XML documents.
When the TDC is bound to an element, the element's DATASRC attribute should be set to ________. | the name of the TDC object preceded by a The binding of TDC to a table requires setting the DATASRC property in the ________ |    table element 
Which of the following statement correctly store an object associated with a name at a place where all the servlets/jsps of the same webapp participating in a session can access it? Assume that request, response, name, value etc. are references to objects of appropriate types.(Choose one) | request.getSession().setAttribute(name, value);
Which of the following lines of code, in the doPost() method of a servlet, uses the URL rewriting approach to maintaining sessions? (Choose one) | out.println("<a href=' "+response.encodeURL("/servlet/XServlet")+" '>Click here</a>"));
Which of the following statements is true? (Choose one) | Session data is shared across multiple webapps in the same webserver/servlet container.
Which of these is legal attribute of page directive?. | errorPage
What is the result of attempting to access the following JSP page?<question><html><question><body><question><%! public String methodA() {<question> return methodB();<question>}<question>%><question><%! public String methodB() {<question> return "JAD Final Test";<question>}<question>%><question><h2><%= methodA() %></h2><question></body><question></html> | "JAD Final Test" is output to the resulting web page.
What is the consequence of attempting to access the following JSP page?<question><html><question><body><question><%!<question> public void _jspService(HttpServletRequest request, HttpServletResponse response) {<question> out.write("A");<question> }<question> %><question><% out.write("B"); %><question></body><question></html> | Duplicate method compilation error.
Which of the following are correct JSP expressions | <%= new Date() %>
Objects with application scope are part of a particular Web application. | True
Which of the following is a correct JSP declaration for a variable of class java.util.Date? | <%! Date d = new Date(); %>
Which of the following task may happen in the translation phase of JSP page? (Choose one) | Creation of the servlet class corresponding to the JSP file.
Select the correct directive statement insert into the first line of following lines of code (1 insert code here): | <%@page import='java.util.*' %>
The following statement is true or false? <question>â€oeIf the isThreadSafe attribute of the page directive is true, then the generated servlet implements the SingleThreadModel interface.â€ | True
Which of the following statement is a correct JSP directive?(Choose one) | <%@ tagliburi="http://www.abc.com/tags/util" prefix="util" %>
Which is NOT a scope of implicit objects of JSP file? | application
Which statements are BEST describe <jsp:getProperty> Action? | Sets a property in the specified JavaBean instance. A special feature of this action is automatic matching of request parameters to bean properties of the same name.
A bean present in the page and identified as 'mybean' has a property named 'name'. Which of the following is a correct way to print the value of this property? | <jsp:getProperty name="mybean" property="name"/>
Which statements are BEST describe errorPage attribute of <%@ page errorPage=â€¦.%> directive? | Any exceptions in the current page that are not caught are sent to the error page for processing. The error page implicit object exception references the original exception.
Which statements are BEST describe property attribute of <jsp:setProperty property=â€¦. /> Action? | The ID of the JavaBean for which a property (or properties) will be set.
Which of the following xml fragments correctly define a security constraint in web.xml? (Choose one) | <security-constraint>a. <web-resource-collection>a. <web-resource-name>Info</web-resource-name>a. <url-pattern>/info/*</url-pattern>a. <http-method>GET</http-method>a. </web-resource-collection>a. <user-data-constraint>a. <transport-guarantee>CONFIDENTIAL</transport-guarantee>a. </user-data-constraint>a. </security-constraint>
You need to make sure that the response stream of your web application is secure. Which factor will you look at? (Choose one) | data integrity
Which of the following element are required for a valid <taglib> tag in web.xml?(Choose one) | <taglib_uri>
Which of the following deployment descriptor snippets would you use to declare the use of a tag library? | <taglib> <taglib-uri>http://abc.net/ourlib.tld</taglib-uri>c. <taglib-location>/WEB-INF/ourlib.tld</taglib-location>c. </taglib>
Which of the following elements defines the properties of an attribute that a tag needs? | attribute
Which statements are BEST describe prefix attribute of <%@ taglib prefix=â€¦%>directive of JSP file? | Specifies the relative or absolute URI of the tag library descriptor.
Which element defined within the taglib element of taglib descriptor file is required? Select one correct answer. | Tag
Which is NOT associated with the business tier in a JEE (J2EE) web-based application? | JSP
Which statement is true about EJB 3.0 containers? | javax.naming.initialContext is guaranteed to provide a JNDI name space
A Java developer needs to be able to send email, containing XML attachments, using SMTP. Which JEE (J2EE) technology provides this capability? | JavaMail
Which is NOT Enterprise Beans? | Business Beans
A developer is working on a project that includes both EJB 2.1 and EJB 3.0 session beans. A lot of business logic has been implemented and tested in these EJB 2.1 session beans. Some EJB 3.0 session beans need to access this business logic. Which design approach can achieve this requirement? | Add adapted home interfaces to EJB 3.0 session beans to make EJB 3.0 and EJB 2.1 session beans interoperable.
Which statement is true about EJB 3.0 stateful session beans and stateless session beans? | Both can have multiple remote and local business interfaces
Which is NOT true about stateless session beans? | They are used to represent data stored in a RDBMS
If you want to send an entity object as the pass by value through a remote interface, which of the following statements are valid? (Choose one) | @Entity public class Employees implements Serializable{b. ...b. }
Which statement about entity manager is true? | A container-managed entity manager must be a JTA entity manager.
Can we use the annotation @PrePassivate for more than one method in a Entity bean? | No
Which is NOT a correct statement about entity beans? | They are used to implement business processes
Which statement about an entity instance lifecycle is correct? | A managed entity instance is the instance associated with a persistence context.
Which is a valid PostConstruct method in a message-driven bean class? | @PostConstruct private void init() {}
Which statement describe about Message-Driven Beans is correct? (Choose one) | Message-Driven Beans are stateful
Which statement describe about JMS is NOT true? | JMS use JNDI to locate the destination
Which of the following are valid iteration mechanisms in jsp? | <% int i = 0;  for(;i<5; i++)  { %>  "Hello World"; <% i++; } %>
Which of the following methods will be invoked if the doStartTag() method of a tag returns Tag.SKIP_BODY? | doEndTag()
Select the BEST case to use message-driven bean?(Choose one) | Need to avoid tying up server resources andneed the applications to process messages asynchronously
Which is NOT the role of EJB Deployer? | Write the code that calls on components supplied by bean providers
Which of the following method can be used to add cookies to a servlet response? | HttpServletResponse.addCookie(Cookie cookie)
What is output to the web page on the second access to the same instance of the following JSP? <html><body><% int x = 0; %><%= x++ %></body> </html> | 0
In EJB 2.0, ejb-jar.xml deployment descriptor file must be placed in ___________ folder. | META-INF
The page directive is used to convey information about the page to JSP container. Which statement is legal page directive. Select one correct statement | <%@ page info="test page" session="false"%>
A JSP page called test.jsp is passed a parameter name in the URL using http://localhost/Final/test.jsp?name=John. The test.jsp contains the following code.<% String myName=request.getParameter("name");%><% String test= "Welcome " + myName; %><%=test%>What is the output? | The page display "Welcome John"
What will happen when a servlet makes the following call within its doGet() method? getServletContext().setAttribute("userid", userid); | The userid attribute is placed in application scope.
Which of the following is true statement about the JavaServer Page life cycle?(Choose one) | The _jspService() method is called from the generated servlet’s service() method
Which is NOT the main type of JSP constructs that you embed in a page? | actions
Which statement(s) about Servlet Life Cycle is(are) correct? (Choose one) | All the others
_______________ sends a request to an object and includes the result in a JSP file | <jsp:include>
Which syntax is correct for JSP Declarations? | <%! code %>
Which statement is correct about Container-managed persistent (CMP)? | Container-managed persistent persisted by the Enterprise Java Beans container
Your jsp page uses classes from java.util package. Which of the following statement would allow you to import the package? (Choose one) | <%@ page import="java.util.*"%>
Which of the following is a valid standard action that can be used by a jsp page to import content generated by another JSP file named another.jsp? | <jsp:include page='another.jsp'/>
Which class that includes the getSession method that is used to get the HttpSession object? | HttpServletRequest
If a ______________is being used then all the operations need to be written by the developer to a persistent API. | Bean-Managed persistent entity bean
Which is the CORRECT statement? | Entity beans represent persistent state objects (things that don’t go away when the user goes away)
Study the statements:1) URL rewriting may be used when a browser is disabled cookies. 2) In URL encoding the session id is included as part of the URL. Which is the correct option? | Both 1 and 2 are true
A ___________________________ in EJB is an object that is deploy on any EJB Server | Component
You can set a page to be an error page either through web.xml or by adding a page directive _____ | <%@page errorPage="errorPage.jsp" %>
A ……………….. manages the threading for the servlets and JSPs and provides the necessary interface with the Web server | Web Container
create() method of entity bean home interface returns _____________ | null
The _________________ is the overall application architect. This party is responsible for understanding how various components fit together and writes the applications that combine components | Application Assembler
Identify correct statement about a WAR file.(Choose one) | It contains web components such as servlets as well as EJBs
Which of the following statement is correct? (choose one) | Authorization means determining whether one has access to a particular resource or not.
A session bean being used by a client can also be used by another client. | False
Which of the following is example of JSP directive? Select one correct answer. | include
Which interface and method should be used to retrieve a servlet initialization parameter value? (Choose one) | ServletConfig : getInitParameter(String name)
Which is NOT the BEST case to use Enterprise Java Beans? (Choose one) | The applications are small or medium size.
Which of the following classes define the methods setStatus(...) and sendError(...) used to send an HTTP error back to the browser? | Both are defined in HttpServletResponse
Which is NOT EJB container? | Apache Tomcat 5.5
Which of the statements regarding the following code are correct? public void doPost(HttpServletRequestreq, HttpServletResponse res) throws IOException, ServletException{res.getWriter().print("Hello ");RequestDispatcherrd = getServletContext().getRequestDispatcher("/test.jsp");rd.include(req, res);res.getWriter().print("World");} | "Hello" and "World" both will be a part of the output.
Which statement is true? | When isThreadSafe attribute of page directive is set to true, a thread is created for each request for the pag
A ____________ session bean is a bean that holds conversations that span a single method call. | stateless
Which of the following elements are used for error handling and are child elements of <web-app> of a deployment descriptor? | <error_page>
Message-driven beans do not have any return value. | True
Given the following deployment descriptor:<web-app> context-param><param-name>jdbcDriver</param-name><param-value>sun.jdbc.odbc.JdbcOdbcDriver</param-value></context-param><servlet><servlet-name>InitParams</servlet-name><servlet-class>InitParamsServlet</servlet-class></servlet> ..</web-app>What is the outcome of running the following servlet? (Choose one.)public class InitParamsServlet extends HttpServlet { protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {ServletContextsc = this.getServletContext(); PrintWriter out = response.getWriter(); out.write("Initialization Parameter is: " + sc.getInitParameter("jdbcDriver")); }} | "Initialization Parameter is: null" returned to the requester
Consider the contents of 2 jsp files:<!-- In File : test.jsp --><html><body><% String s = "Hello"; %>//1 insert LOC here.<%=s%></body></html><!-- In File : test2.jsp --><% s = s+" world"; %>What can be inserted at //1 so that it prints "Hello world" when test.jsp is requested? | <jsp:include page="test2.jsp"/>
Which of the following is true about Data Integrity? | The information/data is not tampered with, in transit from host to client.
To be a servlet, a class should extend HttpServlet and override doGet or doPost, depending on whether the data is being sent by GET or by POST. | True
Name the default value of the scope attribute of <jsp:useBean> | page
The properties that characterize transactions are known as ACID properties. | True
In ejb-jar.xml file, <persistence-type> element value is _________________ | Bean or Container
Identify correct statement about a WAR file.(Choose one) | It contains web components such as servlets as well as EJBs.
Select the word to replace ???to make the diagram about messaging domain correct | Topic
A web application is located in "helloapp" directory. Which directory should it's deployment descriptor be in? | helloapp/WEB-INF
Which statement is correct about Message-Driven Beans exception handling? | Message-Driven Beans cannot send any exceptions back to clients
HTTP is a "stateless" protocol: each time a client retrieves a Web page, it opens a separate connection to the Web server, and the server does not automatically maintain contextual information about a client. | True
Which statement is correct about Bean-managed persistent (BMP)? | Bean-managed persistent persisted by the developer, who write the code for the database access calls
Regarding URL rewriting for session support, which of the following is true? | Every URL that the client uses must include jsessionid.
Which syntax is correct for JSP Scriptlets? | <% code %>
What is output to the web page on the second access to the same instance of the following JSP?<html><body><%! int x = 0; %><%= x++ %></body> </html> | 0
Which of these is legal return type of the doStartTag method defined in a class that extends TagSupport class? | EVAL_BODY
Select the correct JMS programming model. | Locate the JMS Driver->Create a JMS connection->Create a JMS session->Locate the JMS destination->Create a JMS producer or a JMS consumer->Send or receive message.
___________________ includes a static file in a JSP file, parsing the file's JSP elements | include directive
Which of the following JSP variable is not available within a JSP expression? Select one correct answer | httpsession
The sendRedirect method defined in the HttpServlet class is equivalent to invoking the setStatus method with the following parameter and a Location header in the URL. Select one correct answer. | SC_MOVED_TEMPORARILY
You do not want the user to see the data and the format being passed to your server when the user tries to submit the information for registering with your site. Which HTTP method would you use? (Comment: You can set some hidden parameters such as server location, in the page when the user loads it. Such parameters mean nothing to the user and are generally not displayed. However, determined users can still view them using "View Source" for the page). | POST
The ______________ supplies business components, or enterprise beans. | Bean provider
Which is the BEST case use Container-managed persistent (CMP)? | When you require some kind of special bean, like multi-tables, that cannot be completely realized with a single bean
Which statement is correct about Message-Driven Beans?(Choose one) | Message-Driven Beans stateless
Every method of the remote interface must throw a __________________ | RemoteException
Which of these is true about deployment descriptors? Select one correct answer | None of the others
The instantiation of a session bean is done by the ____________________ while the management of the lifetime of the bean is done by the ___________________________. | Container/EJB server
Which of the following code snippet of HTML document are correct structured? | <HTML><HEAD><TITLE>...</TITLE>...</HEAD><BODY ...>...</BODY></HTML>
What is the result of attempting to access the following JSP page?<html><body><%! public String methodA() { return methodB();}%><%! public String methodB() { return "JAD Final Test";}%><h2><%= methodA() %></h2></body></html> | "JAD Final Test" is output to the resulting web page
______and _______methods do not apply to stateless session beans. | ejbActivate()
A JavaBeans component has the following field | public void setEnabled( boolean enabled) public booleangetEnabled()
Which of the following is indicated by URL, which is used on the Internet? | Information resources(sources) on the Internet
You want to use a bean that is stored in com/enthu/GUI.ser file. Which of following statements correctly defines the tag that accesses the bean? | <jsp:useBean id="pref" beanName="com.enthu.GUI" type="com.enthu.GUI"/>
A JSP page has the following page directives:<%@page isErrorPage='false' %> <%@page errorPage='/jsp/myerror.jsp' %> Which of the following implicit object is NOT available to the jsp page? | exception
A bean with a property color is loaded using the following statement <jsp:useBean id="fruit" class="Fruit"/>Which of the following statements may be used to print the value of color property of the bean?. Select the one correct answer. | <jsp:getProperty name="fruit" property="color"/>
The ____________ interface is a Java interface that enumerates the business methods exposes by the enterprise bean class. | remote
A ____________ is a group of operations, which appear as one large operation during execution. | Transaction
Select the BEST case to Use Entity Beans? (Choose one) | At any given time, only one client has access to the bean instance.
Which are the types of messaging domains? (choose 2) | Publish/Subscribe
Message-Driven Bean does not have a home interface, local home interface, remote interface, or a local interface. | True
For what reason does the following JSP fail to translate and compile? <html><body><%! int x; %><%=x ; %></body></html> | Error in JSP Expression
Which of the following statement is true about the Entity class? | Entity class must be declared as top level class
A bean with a property color is loaded using the following statement <jsp:useBean id="fruit" class="Fruit"/> Which statement may be used to set the color property of the bean | <jsp:setProperty name="fruit" property="color" value="white"/>
Which of the following xml fragments correctly define a security constraint in web.xml? (Choose one) | <security-constraint><web-resource-collection><web-resource-name>Info</web-resource-name><url-pattern>/info/*</url-pattern><http-method>GET</http-method></web-resource-collection><auth-constraint><role-name>manager</role-name></auth-constraint></security-constraint>
Study the statements about web.xml file: 1) The deployment descriptor file is called web.xml, and it must be located in the WEB-INF directory.2) web.xml is in XML (extended markup language) format. Its root element is <web>. | Only statement 1 is true
A JSP expression is used to insert values directly into the output. | True
A JSP page will not have access to session implicit variable if: | the session attribute of page directive is set to false
The ______________ is the container-generated implementation of the remote interface | EJB Object
Which of the following is NOT a valid attribute for a useBean tag? | className
What gets printed when the following JSP code is invoked in a browser? Select one correct answer. <%= if(Math.random() < 0.5) %> hello<%= } else { %> hi<%= } %> | The JSP file will not compile
Is it possible to share aHttpSession object between a Java Server Page and Enterprise Java Bean? | Yes, you can pass the HttpSession as parameter to an EJB method, only if all objects in session are serializable
Deployment properties are stored in a _______________________ file. | XML
Which is the correct sequence? | Jsp page is translated -->jsp page is complied-->jspInit is called ->_jspService is called -->jspDestroy is called
The HttpServletRequest has methods by which you can find out about incoming information such as: | All of the others
The ____________________class makes every entity bean different. | primary key
JavaServer Pages (JSP) technology enables you to mix regular, static HTML with dynamically generated content from servlets. You simply write the regular HTML in the normal manner, using familiar Web-page-building tools | True
Which of the following is INCORRECT statement about implicit objects and scope? | application can't be used to access other web application resources
The exception-type element specifies an exception type and is used to handle exceptions generated from a servlet. Which element of the deployment descriptor includes the exception-type as a sub-element? Do not include the element in enclosing parenthesis | error-page
Which of the following is legal JSP syntax to print the value of i. Select the one correct answer | <%int i = 1;%> <%= i %>
A JSP page called test.jsp is passed a parameter name in the URL using http://localhost/test.jsp?name="John". The test.jsp contains the following code. <%! String myName=request.getParameter();%><% String test= "welcome" + myName; %><%= test%> | The program gives a syntax error because of the statement <%! String myName=request.getParameter();%>
Which of the following correctly represents the following JSP statement. Select the one correct answer. <%=x%> | <jsp:expression>x</jsp:expression>
Which of the following correctly represents the following JSP statement. Select the one correct answer. <%x=1;%> | <jsp:scriptlet>x=1;</jsp:scriptlet>
What gets printed when the following JSP code is invoked in a browser. Select the one correct answer. <%= if(Math.random() < 0.5) %>  hello<%= } else { %>  hi <%= } %> | The JSP file will not compile.
Which of the following are correct. Select the one correct answer | To use the character %> inside a scriptlet, you may use %\> instead.
What gets printed when the following is compiled. Select the one correct answer.<% int y = 0; %> <% int z = 0; %> <% for(int x=0;x<3;x++) { %> <% z++;++y;%> <% }%> <% if(z<y) {%> <%= z%> <% } else {%> <%= z - 1%> <% }%> | 2
Which of the following JSP variables are not available within a JSP expression. Select the one correct answer. | httpsession
A bean with a property color is loaded using the following statement <jsp:usebean id="fruit" class="Fruit"/> Which of the following statements may be used to print the value of color property of the bean. Select the one correct answer | <jsp:getProperty name="fruit" property="color"/>
A bean with a property color is loaded using the following statement | <jsp:setProperty name="fruit" property="color" value="white"/>
A bean with a property color is loaded using the following statement <jsp:usebean id="fruit" class="Fruit"/> What happens when the following statement is executed. Select the one correct answer. <jsp:setProperty name="fruit" property="*"/> | All the properties of the fruit bean are assigned the values of input parameters of the JSP page that have the same name
Which of the following represents a correct syntax for usebean. Select the two correct answers | <jsp:usebean id="fruit type ="String"/> <jsp:usebean id="fruit type ="String" beanName="Fruit"/>
Name the default value of the scope atribute of <jsp:usebean>. | page
Which of the following statements are true for <jsp:usebean>. Select the two correct answers. | The id attribute must be defined for <jsp:usebean>. The <jsp:usebean> must include either type or class attribute or both.
Which of these are legal attributes of page directive. Select the two correct answers | errorPage . session
Which of the following represents the XML equivalent of this statement <%@ include file="a.jsp"%> . Select the one correct statement | <jsp:directive.include file="a.jsp"/>
Assume that you need to write a JSP page that adds numbers from one to ten, and then print the output.<% int sum = 0;for(j = 0; j < 10; j++) { %>// XXX --- Add j to sum<% } %>// YYY --- Display the sum Which statement when placed at the location XXX can be used to compute the sum. Select the one correct statement | <% sum = sum + j; %>
Now consider the same JSP example as last question. What must be added at the location YYY to print the sum of ten numbers. Select the one correct statement | <%= sum %>
JSP pages have access to implicit objects that are exposed automatically. One such object that is available is request. The request object is an instance of which class? | HttpServletRequest
JSP pages have access to implicit objects that are exposed automatically. Name the implicit object that is of type HttpSession. | session
A Java bean with a property color is loaded using the following statement <jsp:usebean id="fruit" class="Fruit"/> What is the effect of the following statement. <jsp:setproperty name="fruit" property="color"/> Select the one correct answer. | If there is a non-null request parameter with name color, then its value gets assigned to color property of Java Bean fruit.
The page directive is used to convey information about the page to JSP container. Which of these are legal syntax of page directive. Select the two correct statement | <%@ page info="test page" session="false"%> <%@ page session="true" %>
Is the following JSP code legal? Select the one correct statement. <%@page info="test page" session="false"%>  <%@page session="false"%> | No. This code will generate syntax errors
A JSP page uses the java.util.ArrayList class many times. Instead of referring the class by its complete package name each time, we want to just use ArrayList. Which attribute of page directive must be specified to achieve this. Select the one correct answer | import
A JSP page needs to generate an XML file. Which attribute of page directive may be used to specify that the JSP page is generating an XML file. | contentType
Which of these are true. Select the two correct answers | The default value of isThreadSafe attribute of page directive is true .When isThreadSafe attribute of page directive is set to true, a thread is created for each request for the page
Which of the following are examples of JSP directive. Select the two correct answers.(?)(not checked yet) | include, taglibrary, page
Which of these is true about include directive. Select the one correct answer | When using the include directive, the JSP container treats the file to be included as if it was part of the original file
Name the implicit variable available to JSP pages that may be used to access all the other implicit objects | pageContext
Which of the following files is the correct name and location of deployment descriptor of a web application. Assume that the web application is rooted at \doc-root. Select the one correct answer | \doc-root\WEB-INF\web.xml
Which element of the servlet element in the deployment descriptor is used to specify the parameters for the ServletConfig object. Select the one correct answer. | init-param
Which of these is true about deployment descriptors. Select the one correct answer | The order of elements in deployment descriptor is not important. The elements can follow any order
The exception-type element specifies an exception type and is used to handle exceptions generated from a servlet. Which element of the deployment descriptor includes the exception-type as a sub-element. Select the one correct answer | error-page
Which of these is a correct fragment within the web-app element of deployment descriptor. Select the one correct answer. | <error-page> <exception-type> mypackage.MyException</exception-type> <location> /error.jsp</location> </error-page>
Which element of the deployment descriptor of a web application includes the welcome-file-list element as a subelement. Select the one correct answer.(?)(not checked yet) | welcome-file
Which of these is a correct fragment within the web-app element of deployment descriptor. Select the two correct answer | A.<error-page> <error-code>404</error-code> <location>/error.jsp</location> </error-page> <error-page> <exception-type>mypackage.MyException</exception-type> <location>/error.jsp</location> </error-page>
Which of these is a correct example of specifying a listener element resented by MyClass class. Assume myServlet element is defined correctly. Select the one correct answer | <listener> <listener-class>MyClass</listener-class></listener>
The root of the deployment descriptor is named as | web-app
With in a context-param element of deployment descriptor, which of the following element is required? | param-name
Which of these is not a valid top level element in web-app | param-name
Which of the follwing are mandatory elements within the filter element. Select two correct answers. | A.filter-name  D.filter-class
Which of these is not a valid value for dispatcher element of filter-mapping. Select the one correct answer. | RESPONSE
Which of these is not correct about the filter-mapping element of web-app. Select the one correct answer | dispatcher element can be declared zero to three times in the filter-mapping element
When implementing a tag, if the tag just includes the body verbatim, or if it does not include the body, then the tag handler class must extend the BodyTagSupport class. Is this statement true of false. | false
Fill in the blanks. A tag handler class must implement the javax.servlet.jsp.tagext.Tag interface. This is accomplished by extending the class TagSupport or another class named in one of the options below. Select the one correct answer. | BodyTagSupport
Is this statement true or false. The deployment descriptor of a web application must have the name web.xml . In the same way the tag library descriptor file must be called taglib.xml | false
A JSP file that uses a tag library must declare the tag library first. The tag library is defined using the taglib directive - <%= taglib uri="..." prefix="..."%> Which of the following specifies the correct purpose of prefix attribute. Select the one correct answer. | The prefix attribute is used in front of a tagname of a tag defined within the tag library.
A JSP file uses a tag as <myTaglib:myTag>. The myTag element here should be defined in the tag library descriptor file in the tag element using which element. Select the one correct answer | name
Which of the elements defined within the taglib element of taglib descriptor file are required. Select the two correct answers | tlib-version B.short-name
Which of the elements defined within the taglib element of taglib descriptor file are required. Select the two correct answers | name D.tag-class
Name the element within the tag element that defines the name of the class that implements the functionality of tag. Select the one correct answer | tag-class
Which of these are legal return types of the doStartTag method defined in a class that extends TagSupport class. Select the two correct answers | D.EVAL_BODY_INCLUDE (F.SKIP_BODY
Which of these are legal return types of the doAfterBody method defined in a class that extends TagSupport class. Select the two correct answers | D.EVAL_BODY_AGAIN (F.SKIP_BODY
Which of these are legal return types of the doEndTag method defined in a class that extends TagSupport class. Select the two correct answers. | EVAL_PAGE (E.SKIP_PAGE)
The method getWriter returns an object of type PrintWriter. This class has println methods to generate output. Which of these classes define the getWriter method? Select the one correct answer. | HttpServletResponse
Name the method defined in the HttpServletResponse class that may be used to set the content type. Select the one correct answer. | setContent
Which of the following statement is correct. Select the one correct answer | The HttpServletResponse defines constants like SC_NOT_FOUND that may be used as a parameter to setStatus method
The sendError method defined in the HttpServlet class is equivalent to invoking the setStatus method with the following parameter. Select the one correct answer | SC_NOT_FOUND
The sendRedirect method defined in the HttpServlet class is equivalent to invoking the setStatus method with the following parameter and a Location header in the URL. Select the one correct answer | SC_MOVED_TEMPORARILY
Which of the following statements are correct about the status of the Http response. Select the one correct answer. | A status of 200 to 299 signifies that the request was successful.
To send binary output in a response, the following method of HttpServletResponse may be used to get the appropriate Writer/Stream object. Select the one correct answer. | getOutputStream
To send text output in a response, the following method of HttpServletResponse may be used to get the appropriate Writer/Stream object. Select the one correct answer. | getWriter
Is the following statement true or false. URL rewriting may be used when a browser is disabled. In URL encoding the session id is included as part of the URL. | true
Name the class that includes the getSession method that is used to get the HttpSession object. | HttpServletRequest
Which of the following are correct statements? Select the two correct answers | A.The getRequestDispatcher method of ServletContext class takes the full path of the servlet, whereas the getRequestDispatcher method of HttpServletRequest class takes the path of the servlet relative to the ServletContext C.The getRequestDispatcher(String URL) is defined in both ServletContext and HttpServletRequest method
A user types the URL http://www.javaprepare.com/scwd/index.html . Which HTTP request gets generated. Select the one correct answer | GET method
Which HTTP method gets invoked when a user clicks on a link? Select the one correct answer | GET method
When using HTML forms which of the folowing is true for POST method? Select the one correct answer. | POST method sends data in the body of the request.
Which of the following is not a valid HTTP/1.1 method. Select the one correct answer | COMPARE method
Name the http method used to send resources to the server. Select the one correct answer | PUT method
Name the http method that sends the same response as the request. Select the one correct answer | TRACE method
Which three digit error codes represent an error in request from client? Select the one correct answer | Codes starting from 400
Name the location of compiled class files within a war file? Select the one correct answer | /WEB-INF/classes
What gets printed when the following expression is evaluated? Select the one correct answer. \${(1==2) ? 4 : 5} | 5
What gets printed when the following expression is evaluated? Select the one correct answer. \${4 div 5} | 0.8
What gets printed when the following expression is evaluated? Select the one correct answer. \${12 % 4} | 0
What is the effect of executing the following JSP statement, assuming a class with name Employee exists in classes package. <%@ page import = "classes.Employee" %> <jsp:useBean id="employee" class="classes.Employee" scope="session"/> <jsp:setProperty name="employee" property="*"/> | The code sets the values of all properties of employee bean to matrching parameters in request object
What is the effect of evaluation of following expression? Select the one correct answer. \${(5*5) ne 25} | false
What is the effect of evaluation of following expression? Select the one correct answer. \${'cat' gt 'cap'} | true
How many numbers are printed, when the following JSTL code fragment is executed? Select the one correct answer.<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %> <c:forEach var="item" begin="0" end="10" step="2"> \${item} </c:forEach> | 6
What gets printed when the following JSTL code fragment is executed? Select the one correct answer.<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %> <c:set var="item" value="2"/> <c:if test="\${var==1}" var="result" scope="session"> <c:out value="\${result}"/> </c:if> | Nothing gets printed.
What gets printed when the following JSTL code fragment is executed? Select the one correct answer.<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %> <c:set var="item" value="2"/> <c:forEach var="item" begin="0" end="0" step="2"><c:out value="\${item}" default="abc"/></c:forEach> | 0
How many numbers gets printed when the following JSTL code fragment is executed? Select the one correct answer.<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %> <c:set var="item" value="2"/> <c:choose> <c:when test="\${item>0}"> <c:out value="1"/> </c:when> <c:when test="\${item==2}"> <c:out value="2"/> </c:when> <c:when test="\${item<2}"> <c:out value="3"/> </c:when> <c:otherwise> <c:out value="4"/> </c:otherwise> </c:choose> | One number gets printed.
Which numbers gets printed when the following JSTL code fragment is executed? Select the two correct answers. <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %> <c:set var="j" value="4,3,2,1"/> <c:forEach items="\${j}" var="item" begin="1" end="2"> <c:out value="\${item}" default="abc"/> </c:forEach> | 2 3
Which numbers gets printed when the following JSTL code fragment is executed? Select the two correct answers.<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %> <c:set var="j" value="4,3,2,1"/> <c:forEach items="\${j}" var="item" begin="1" end="2" varStatus="status"> <c:out value="\${status.count}" default="abc"/> </c:forEach> | 2 3
Which number gets printed when the following JSTL code fragment is executed? Select the one correct answers.<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %><c:set var="j" value="4,3,2,1"/><c:forEach items="\${j}" var="item" varStatus="status"><c:if test="\${status.first}"><c:out value="\${status.index}" default="abc"/></c:if></c:forEach> | 1
Which of these represent the correct path for the core JSTL library in JSTL version 1.1? Select the one correct answer | http://java.sun.com/jsp/jstl/core
Identify the method used to get an object available in a session.(Choose one) | getAttribute of HttpSession
See the extract from web.xml of web application "mywebapp" on server named myserver, runs on port 8080: <servlet-mapping><servlet-name>ServletA</servlet-name><url-pattern>/</url-pattern></servlet-mapping><servlet-mapping><servlet-name>ServletB</servlet-name><url-pattern>/bservlet.html</url-pattern></servlet-mapping><servlet-mapping><servlet-name>ServletC</servlet-name><url-pattern>*.servletC</url-pattern></servlet-mapping><servlet-mapping><servlet-name>ServletD</servlet-name><url-pattern>/dservlet/*</url-pattern></servlet-mapping>Given that a user enters the following into her browser, which (if any) of the mapped servlets will execute? (Choose one.) http://myserver:8080/mywebapp/Bservlet.html | ServletA
The HttpSession method getAttribute returns the object associated with a particular name. | True
Which method of ReportGeneratorServlet will be called when the user clicks on the URL shown by the following HTML.  Assume that ReportGeneratorServlet does not override the service(HttpServletRequest, HttpServletResponse) method of the HttpServlet class. (Choose one) | doGet(HttpServletRequest, HttpServletResponse);
GET requests and POST requests can both be used to send form data to a web server. | True
Which statements are BEST describe id attribute of <jsp:useBean id=..... /> Action? | The name used to manipulate the Java object with actions <jsp:setProperty> and <jsp:getProperty>. A variable of this name is also declared for use in JSP scripting elements. The name specified here is case sensitive.
Which statement is true about both stateful and stateless session beans about bean instances? | Bean instances are NOT require to survive container crashes
Which of the elements defined within the taglib element of taglib descriptor file are required? Select one correct answer. | taglib-location
In which of the following Authentication mechanism, the browser transmits the username and password to the server without any encryption? (Choose one) | HTTP BASIC Authentication
Which of the following techniques would correctly put a bean into application scope? (You can assume that any necessary page directives are present and correct elsewhere in the JSP page.)(Choose one.) | <jsp:useBean id="app1" class="webcert.ch07.examp0701.AddressBean" scope="application" />
Which statement about JMS is true? | JMS supports Publish/Subcribe
Which is the CORRECT statement about JMS? | JMS uses JNDI to find destination
Which statements are BEST describe name attribute of <jsp:setProperty name=.... /> action? | The ID of the JavaBean for which a property (or properties) will be set.
Action _______has the ability to match request parameters to properties of the same name in a bean by specifying "*" for attribute property. | <jsp:setProperty>
Consider the following java code://in file Book.java package com.bookstore;public class Book{private long isbn; public Book(){ isbn = 0; }public long getIsbn(){ return isbn; }public void setIsbn(long value){ this.isbn = value; }}Code for browse.jsp:<jsp:useBean class="com.bookstore.Book" id="newbook" />LINE 1 : <jsp:setProperty name="newbook" property="isbn" value="1000"/> Which of the following statements are correct? | The isbn property of newbook will be set to 1000.
Which of the following is equivalent <%! ? (Choose one) | <jsp:declaration
<html><body><form action="loginPage.jsp">Login ID:<input type= "text" name="loginID"><br>Password:<input type="password" name="password"><br><input type="submit" value="Login"><input type="reset" value="Reset"></form></body><html> Study the above html code. Assume that user clicks button Reset. What is the correct statement? | All inputs are cleared.
JavaServer Pages (JSP) technology enables you to mix regular, static HTML with dynamically generated content from servlets. You simply write the regular HTML in the normal manner, using familiar Web-page-building tools. | True
A JSP page needs to generate an XML file. Which attribute of page directive may be used to specify that the JSP page is generating an XML file? | <%@page contentType ="text/xml">
JSP __________ let you insert arbitrary code into the servlet's _jspService method (which is called by service). | scriptlets
Which HTTP method is used in FORM based Authentication? | POST
Review the following scenario; then identify which security mechanisms would be important to fulfill the requirement. (Choose one.) An online magazine company wishes to protect part of its website content, to make that part available only to users who pay a monthly subscription. The company wants to keep client, network, and server processing overheads down: Theft of content is unlikely to be an issue, as is abuse of user IDs and passwords through network snooping. | Authorization and Authentication
Which class type must be implicitly or explicitly denoted in the persistence.xml descriptor as managed persistence classes to be included within a persistence unit? | Entity classes
Which option can be used to predefine Java Persistence queries for easy use? | @NamedQuery annotation
What is the implementation specification of EJB 3 session bean classes? | a session bean class must be marked with @Stateless or @Stateful
Which statement is true about management of an EJB's resources? | The reference to home object is obtained through JNDI to improve maintainability and flexibility.
Which is NOT belonging to basic three types of EJB? | Transfer object
Which act as a proxy to an EJB? | Remote instance
Which statement is true about EJB 3.0 stateful session beans and stateless session beans? (Choose one) | Both can have multiple remote and local business interfaces
Consider the following HTML code. Which method of MyFirstServlet will be invoked when you click on the url shown by the page? | doGet
Which statements are BEST describe property attribute of <jsp:setProperty property=.... /> Action? | The ID of the JavaBean for which a property (or properties) will be set.
Which statements are BEST describe errorPage attribute of <%@ page errorPage=....%> directive? | Any exceptions in the current page that are not caught are sent to the error page for processing. The error page implicit object exception references the original exception.
Which statements are BEST describe prefix attribute of <%@ taglib prefix=...%>directive of JSP file? | Specifies the relative or absolute URI of the tag library descriptor.
The following statement is true or false? "If the isThreadSafe attribute of the page directive is true, then the generated servlet implements the SingleThreadModel interface." | True
Which interface you CANNOT use to obtain a RequestDispatcher Object? | ServletContext
Study the statements:<question>1) The context path contains a special directory called WEB-INF, which contains the deployment descriptor file, web.xml.<question>2) A client application may directly access resources in WEB-INF or its subdirectories through HTTP. | Only statement 1 is true
A .................... manages the threading for the servlets and JSPs and provides the necessary interface with the Web server. | Web Container
Which interface can you use to retrieve a resource that belongs to the current web application? | ServletContext
HttpSession objects have a built-in data structure that lets you store any number of keys and associated values. | True
Servlet methods are executed automatically. | True
What is the consequence of attempting to access the following JSP page? <question><html><question><body><question><%! <question> public void _jspService(HttpServletRequest request, HttpServletResponse response) {<question> out.write("A");<question> }<question> %><question><% out.write("B"); %><question></body><question></html> | Duplicate method compilation error.
Each page has its own instances of the page-scope implicit objects. | True
A developer wants to achieve the following two behaviors for an EJB 3.0 session bean:(1) If the client calls a business method with a transaction context, the container will invoke the enterprise bean's method in the client's transaction context.(2) If the client calls a business method without a transaction context, the container will throw the javax.ejb.EJBTransactionRequiredException.Which transaction attribute should be used? | MANDATORY
Which statement is correct about Java EE client of a message-driven beans? | The client can use JNDI to obtain a reference to a message destination
________ is the well-known host name that refers to your own computer. | localhost
You have to send a gif image to the client as a response to a request. Which of the following calls will you have to make? (Choose one) | response.setContentType("image/gif");
The Java Persistent API defines the Query interface. Which statement is true about the Query.executeUpdate method ? | It must always be executed within a transaction
Which statement is NOT true about JMS? | JMS does NOT depend on MOM (Messaging-Oriented Middleware) products
To read the cookies that come back from the client, you call getCookies on the HttpServletRequest. | True
Given a stateless session bean with container-managed transaction demarcation, from which method can a developer access another enterprise bean? | business method from the business interface
The same servlet class can be declared using different logical names in the deployment descriptor. | True
Study the statements:1) The context path contains a special directory called WEB-INF, which contains the deployment descriptor file, web.xml. 2) A client application may directly access resources in WEB-INF or its subdirectories through HTTP. | Only statement 1 is true
Which is NOT a technique that can be used to implement 'sessions' if the client browser does not support cookies? | Using Http headers.
_________________ provides a way to identify a user across more than one page request or visit to a Web site and to store information about that user. | Session management
Which statement is true about the EJB 3.0 stateful session beans? | Its conversational state is retained across method invocations and transactions
Which of the following methods can be used to add cookies to a servlet response? | HttpServletResponse.addCookie(Cookie cookie)
Given that a servlet has been mapped to /account/. Identity the HttpServletRequest methods that will return the /account segement for the URI: /myapp/account/. | getServletPath
What should be the return type of the method using @PrePassivate? | void
Which statements are BEST describe isErrorPage attribute of <%@ page isErrorPage=....%> directive? | Specifies if the current page is an error page that will be invoked in response to an error on another page. If the attribute value is true, the implicit object exception is created and references the original exception that occurred.
Which statements are BEST describe <jsp:include> Action? | Dynamically includes another resource in a JSP. As the JSP executes, the referenced resource is included and processed.
A stateful session bean must commit a transaction before a business method | False
Which security mechanism proves that data has not been tampered with during its transit through the network? | Data integrity
Which is disadvantage of using JEE (or J2EE) server-side technologies in a web-based application? | Complexity
Which statement describe about JMS is NOT true? | JMS enhances access to email services
Which statements are BEST describe page implicit object of jsp file? | This java.lang.Object object represents the this reference for the current JSP instance.
Which component can use a container-managed entity manager with an extended persistent context? | Only stateful session beans
The sendRedirect method defined in the HttpServlet class is equivalent to invoking the setStatus method with they following parameter and a Location header in the URL. Select one correct answer. | SC_MOVED_TEMPORARILY
Which directory is legal location for the deployment descriptor file? Note that all paths are shown as from the root of the web application directory. | \WEB-INF
Which is NOT provided by the EJB tier in a multitier JEE (J2EE) application? | XML Parsing
Which is true about JDBC? | The JDBC API is included in J2SE
Which is true about the relationship "A keyboard has 101 keys"? | This is a one-to-may relationship
If you want to send an entity object as the pass by value through a remote interface, which of the following statements are valid? (Choose one) | @Entity public class Employees implements Serializable{...}
Which statement is correct about the Java Persistence API support for the SQL queries? | The result of a SQL query is not limited to entities
Which of the following lines of code are correct? | @Entity public class Employees{... }
An object with page scope exists in every JSP of a particular Web application. | False
Which statement describe about Message-Driven Beans is correct? (Choose one) | An EJB 3.0 message-driven beans can itself be the client of another message-driven beans
Which Java technology provides a standard API for publish-subscribe messaging model? | JMS
To send binary outptut in a response, the following method of HttpServletResponse may be used to get the appropriate Writer/Stream object. | getOutputStream
How can you ensure the continuity of the session while using HttpServletResponse.sendRedirect() method when cookies are not supported by the client? | By enconding the redirect path with HttpServletResponse.encodeRedirectURL() method.
Which of the following defines the class name of a tag in a TLD? | tag-class
Which statements are BEST describe prefix attribute of <%@ taglib prefix=...%>directive of JSP file? | Specifies the required prefix that distinguishes custom tags from built-in tags. The prefix names jsp, jspx, java, javax, servlet, sun and sunw are reserved.
Which is true about RMI? | RMI allows objects to be send from one computer to another
Which Java technology provides a unified interface to multiple naming and directory services? | JNDI
Which is disadvantage of using JEE ( or J2EE) server-side technologies in a web-based application? | Complexity
Which of the following correctly represents the following JSP statement? Select one correct answer. <%=x%> | <jsp:expression>x</jsp:expression>
Which of these is a correct fragment within the web-app element of deployment descriptor? Select the one correct answer | <error-page> <exception-type> mypackage.MyException</exception-type> <location> /error.jsp</location> </error-page>
Which is NOT represented in a UML class diagram? | The interaction between objects in sequential order
Which type of JEE (or J2EE) component is used to store business data persistently? | Entity Bean
The requirement for an online shopping application are: It must support millions of customers. The invocations must be transactional. The shopping cart must be persistent. Which technology is required to support these requirements? | EJB
Which statement is true about the use of a persist operation in a transaction of an Entity Beans | If a user persists a new entity with an existing primary key the transaction will fail
EJB 3.0 specifications are first implemented in ________ | Java EE 5
A developer must implement a "shopping cart" object for a web-based application. The shopping cart must be able to maintain the state of the cart, but the state is not stored persistently. Which JEE (J2EE) technology is suited to this goal? | Stateful session beans
Which is true about JEE ( or J2EE)? | JEE includes servlet APIs and EJB APIs
What do you need to create a EJB3 session bean? | Annotate the session bean with @Stateful or @Stateless
A developer is working on a project that includes both EJB 2.1 and EJB 3.0 session beans. A lot of business logic has been implemented and tested in these EJB 2.1 session beans. Some EJB 3.0 session beans need to access this business logic. Which design approach can achieve this requirement? | No need to modify existing EJB 2.1 session beans. Use the @EJB annotation to inject a reference to the EJB 2.1 home interface into the EJB 3.0 bean class.
Following is the code for doGet() and doPost() method of TestServlet. Which of the statement is correct? image | This will work for HTTP GET as well as POST requests.
Which statements are BEST describe taglib directive of JSP file? | Allows programmers to include their own new tags in the form of tag libraries. These libraries can be used to encapsulate functionality and simplify the coding of a JSP.
Which of the following are valid iteration mechanisms in jsp? | <% int i = 0;for(;i<5; i++){ %>"Hello World";<% i++;}%>
Which of the following constitute valid ways of importing Java classes into JSP page source? | <%@ page import="java.util.*" %>
What is the purpose of JNDI? | To access various directory services using a single interface
XML gives you a way of packaging your data, and it's taken off largely because XML documents are text | which has meant that you can send them using the existing Internet framework, as built for HTML.
Notes, working drafts, candidate recommendations | and recommendations
An XML element is the basic data-holding construct in an XML document | It starts with an opening tag, can contain text or other elements, and ends with a closing tag, like this: <greeting>hello</greeting>
An attribute gives you more information, and is always assigned a quoted value in XML. | Here's how you might add an attribute named language to this element: <greeting language = "en">hello</greeting>.
he ones we discussed today are that an XML document must contain one or more elements. One element, the root element, must contain all the other elements. | Finally, each element must nest inside any enclosing elements correctly.
All XML processors are supposed to implement at least the UTF-8 (compressed Unicode) and UTF-16 (compressed UCS) character encodings | In practice, you can only count on UTF-8, however
You can escape < and > like this: <message>This is a &lt;message&gt; | element.</message>
A prolog can contain XML declarations, XML comments (which describe the XML document) | processing instructions, whitespace, and doctype declaration(s).
The attributes you can use in an XML document are: version (required; the XML version), encoding (optional; the character encoding), and standalone (optional; "yes" | if the document does not refer to any external documents or entities, "no" otherwise).
There are no processing instructions built into XML already, although some, like <?xml-stylesheet?> | have been generally agreed upon by browser manufacturers.
One. You need at least a root element for an XML document | to be well-formed
In a well-formed XML document, there must be one root element that contains | all the others.
he attribute values are not enclosed in | quotation marks.
You could use this attribute xmlns:service="http://www.superduperbigco.com/customer_service" in an element | After using this attribute, you can use the service prefix in the current element and any child elements.
Use this attribute in the enclosing element | xmlns="http://www.superduperbigco.com/customer_returns"
The <hiredate> and <name> elements are | not declared in the DTD
The <hiredate> and <name> elements appear | in the wrong order.
This DTD uses a choice for the <employee> element, and the choice says that the document can contain | either <hiredate> elements or <name> elements—but not both.
The DTD says there can be at most one <employee> element | but there are two
This XML document references an external DTD, so the XML declaration's standalone attribute should be set to "no". | There may also be errors in the external DTD, of course.
You can use the #IMPLIED keyword | address CDATA #IMPLIED
You can use the #FIXED keyword. | name CDATA #REQUIRED
The namespace that is used by XML schemas is | www.w3.org/2001/XMLSchema
You can declare elements by using <xsd:element> | and attributes by using <xsd:attribute>
You can declare the element like this | <xsd:element name="name" type="xsd:string"/>
You can do this in an XML schema: | <xsd:attribute name="language" type="xsd:string" use="optional"/>.
You use the <xsd:restriction> element | and the base attribute.
To cap values, you can use the maxIncusive and maxExclusive facets. | To constrain values to be one of a set, you can use the enumeration facet.
You can use this CSS property/value pair: font-size: 36pt | You can use this CSS property/value pair: display: block
You can use this CSS property/value pair: text-align: center | You can use this CSS property/value pair: text-decoration: underline.  You can use this CSS property/value pair: margin-top: 10.
* by itself applied to ch09_01.xml just picks out the <states> element. * selects all element children (not grandchildren or any descendents) | of the context node, and when you open ch09_01.xml, the root node is the context node.
The XPath expression //* selects all elements in | ch09_01.xml
The first XSL-FO element you must use in an XSL-FO document is | the <fo:root> element.
The <fo:root> element can contain both a master set layout | and page sequences.
The <fo:region-before> element. | The line-height attribute.
The master-reference attribute | abcdef
Here's one example: <polyline points="0,0 100,100 200,0/> | >
You can create an XML island that makes the XML data in a document named data.xml available as a DSO named data by using this HTML element: | <XML SRC="data.xml" ID="data"></XML>
You can select Project, Add Item in Visual Studio .NET to open the Add new Item dialog box. Then you select the XML File | template in the Templates box, give the new document a name, and click the Open button.
An XML Schema defines whether	 an element is empty or can include text. | true
Consider the following script. What is wrong with the following code?  1	<SCRIPT LANGUAGE = "JavaScript">  2	var firstNumber, 3	secondNumber;  4	thirdNumber;  5  6	thirdNumber =  7	parseInt( window.prompt( "Enter an integer", 0 ) );  8	document.write( thirdNumber );  9	</SCRIPT> | The word var must be placed before thirdNumber in line 4
What would the browser display if the following script was executed and the user entered 5 at both prompts?  1	<SCRIPT LANGUAGE = "JavaScript">  2	var firstNumber = window.prompt("Enter an integer", 0); 3	var secondNumber = window.prompt("Enter an integer",0);  4	var thirdNumber;  5	thirdNumber = firstNumber + secondNumber;  6	document.write( thirdNumber );  7	</SCRIPT> | 55
The statement on line 1 ________ the array while the statement on line 2 ________ the array.  1	var c;  2	c = new Array( 12 ); | declares, allocates
In the following statement, the range of the variable element is ________.  for ( var element in theArray )  total2 += theArray[ element ]; | g)	0 to the array length - 1
MC: How many comparisons will a linear search function makes before finding a match if the search key has a value of 3 and the array x has the values:  x[ 0 ] = 0 x[ 1 ] = 2 x[ 2 ] = 1 x[ 3 ] = 4 x[ 4 ] = 3 x[ 5 ] = 3 | 5
What is the effect of the following line of code?  window.event.returnValue = true; | It returns a true value to signal the browser to continue its default event-handling action.
The | character is referred to as a________. |    field delimiter 
What is wrong with the following VBScript code?  1	If (s = t) Then  2	u = s + t  3	ElseIf (s > t) Then  4	u = r  5	Else  6	u = n 7 End If | Nothing
What is wrong with the following VBScript code?  1	Select Case x  2	Case 1  3	Call MsgBox("1")  4	Case 2  5	Call MsgBox("2")  6	Case Else  7	Call MsgBox("?") 8 End Select | Nothing
See the snipset below and choose one answer:  <xsl:template match=”BOOK*position()!=2+”>     	<xsl:value-of select=”.”/>  </xsl:template> | Select all BOOK elements that are not the second child of their parents
Identify if the following XML document code is valid. <?xml version="1.0"?> 	<note> 	<to>Joe</to> 	<from>John</from> 	<heading>Reminder</heading> 	<body>Dont forget me this weekend!</body> 	</note> | Valid
Identify if the following XML document code is valid.		<?xml version="1.0"?> 	<to>Joe</to> 	<from>John</from> 	<heading>Reminder</heading> 	<body>Dont forget me this weekend!</body> | Invalid
Identify the line/s containing an error 	1)<?xml version="1.0"?> 	2)<note date=12/11/99> 	3)<to>Ravi</to> 	4)<from>Amit</from> 	5)<heading>Reminder</heading> 	6)<body>Make good food please</body> 	7)</note> | Line 2
Match the correct entity names with the respective characters 	a) &amp;			1) < 	b) &gt;				2) ' 	c) &quot;			3) > 	d) &lt;				4) " 	e) &apos;			5) & | a-5 ,b-3 ,c-4 ,d-1 ,e-2
<?xml version="1.0" ?> <!DOCTYPE APTECH [ <!ELEMENT APTECH (CLASS1 | CLASS2)+> <!ELEMENT CLASS1 (#PCDATA)> <!ATTLIST CLASS1  	count CDATA #REQUIRED> <!ELEMENT CLASS2 (#PCDATA)> <!ATTLIST CLASS2 	count CDATA #REQUIRED> ]> <TRIAL>ELECTRONIC GOODS 	<CLASS1 count="8">10students</CLASS1> 	<CLASS2 count="10">20students</CLASS2> </TRIAL> The following code will execute without displaying any errors? |    t 
Consider and xml document <?xml version="1.0"?> <?xml-stylesheet type="text/css" href=xsampdoc.css ?> <xsampdoc>	<greeting>All The Best!</greeting> </xsampdoc>  The code for the style sheet xsampdoc is given as:  greeting { 	display:block; 	font-family:Arial,Helvetica, sans-serif;font-size:32pt; 	width:30em; 	color:red; }							 What will be the output of the above code? | The xml document will be displayed in the tree format
Match the following Absolute units & Relative units with their respective values 	a)Ex				1)Inches 	b)In				2)Pixel  	c)Px				3)Pica 	d)Em				4)Fonts height 	e)Pc				5)Height of the letter 'x' | a-5,b-1,c-2,d-4,e-3
S{margin-right:-3cm;} 	Is the above statement valid? | No
For declaring a child element 'message' to occur zero or more times inside the 'note' element, identify the correct | <!ELEMENT element-name (child-name*)
In the attribute-type the value which is pre-defined is indicated by: | xm
Namespaces ensure that there is no conflict within element names and also determines how to process them. | Fals
<!ELEMENT trial (targets+, source,title+,message*,#PCDATA)> The above example declares that the element trial must contain: | at least one 'target', exactly one 'source', at least one 'title', zero or one 'message', and some other parsed character data
What are the three JSP Servlet Methods | jspInit() jspDestroy() _jspService()
In a xml document what is this called  <?xml version="1.0"> | xml declaration
raw XML | files can be viewed in all major browsers
right click the page, View Source | to view raw XML on a webpage you must __________ and select __________invented |    XML tags are __________ by the author of the XML document
XSLT can be used to transform XML into HTML, before it is __________ is an XML-related technology that is used to find elements, attributes, and other information in your XML document. | XPath
Which of the following are well formed XML fragments? | < myElement myAttribute="someValue"/>
Which of the following is not a XML storage option? | Small object storage
In which of the following scenario,using XML native storage would be inappropriate ? | Fixed schema
XML View Technology is useful in the following situations: | You want to bulk load XML data and decompose them into the underlying tables by using the XML view
The need of using a DTD in developing XML document is | required when validating XML documents
QN=1 (2926) Parameter entities use ampersand (&) and semicolon (;) as delimiters? | false
QN=2 (2933) An attribute without a prefix is in default namespace? | true
QN=3 (2712) Which of the following is not an extension of XML? | SGML.
QN=4 (2722) Which of the following are valid tags? | <FPT_UNIV>
QN=4 (2722) Which of the following are valid tags? | <_FPTUniv>
QN=5 (2713) Which of the following XML attribute names is invalid? | I am not valid
QN=6 (2934) A descendant having a new namespace cannot override the namespace defined by the parrent element? | false
QN=7 (2723) Which of the following defines what is meant by a valid document? | A document which conforms to the rules of a DTD
QN=8 (2724) Which of the following is/are optional in the creation of an XML file? | Entities
QN=9 (2928) XML parser checks for validity and well formed ness? | true
QN=10 (2734) Namespaces are defined using | xmlns:[prefix] attribute
QN=11 (2936) Ability to create one's own tags is XML's greatest disadvantage? | false
QN=12 (2938) External DTDs use the keyword URL to specify the location of the DTD? | false
QN=13 (2730) An XML document, which conforms to its DTD, is called a: | Valid Document
QN=14 (2731) What does the keyword SYSTEM indicate in the following code? | Book.dtd is an external DTD
QN=15 (2716) Which of the following things is unspecified in the following line of code? | The type of browser you are using.
QN=16 (2761) The xsl:template is used to | define a template that can be applied to a node to produce desired output
QN=17 (2771) See the snipset below and choose one answer: | -3
QN=18 (2769) XSLT allows any kind of data to be tranformed into | Boolean
QN=19 (2950) Document Object Model is platform-dependent? | false
QN=20 (2719) Which DOMDocument method is used to create a new attribute? | createAttribute
QN=21 (2954) Builds the document as a in-memory data structures? | DOM
QN=22 (2752) Represents a collection of attribute nodes | XMLDOMNodeList object
QN=23 (2758) The ContentHandler class provides implementations for the core interface of SAX | true
QN=24 (2923) The StAX cursor API represents | a cursor with which you can walk an XML document from beginning to end.
QN=25 (2959) SAX makes sequence of call to a handler function? | true
QN=26 (2782) Consider the following script. What is wrong with the following code? | The word var must be placed before thirdNumber in line 4.
QN=27 (2788) A procedure for solving a problem in terms of the actions to be executed and the order in which these | an algorithm
QN=28 (2875) Each object has ________ or data and ________ or behavior. | attributes, methods
QN=29 (2827) What would the browser display if it executed the following script? | 10
QN=30 (2807) The word top in the term top-down stepwise refinement refers to which of the following? | the single statement that completely represents the program
QN=31 (2838) Function definitions often contain ________ which are considered to be local variables and correspond with the arguments in the function call. | parameters
QN=32 (2809) What is the value of i after the following statements? | 3
QN=33 (2797) Which of the following is not a JavaScript keyword? | sub
QN=34 (2879) What does the value string contain after the following code is executed? | Good luck on the test
QN=35 (2861) What would the browser display if this script was executed? | undefined
QN=36 (2837) Functions are invoked by writing the name of the function, followed by the function's ________ in closed parenthesis. | arguments
QN=37 (2866) Call-by- ________ is the method of passing a copy of the argument's value to a function. | value
QN=38 (2865) In JavaScript, all objects and Arrays are passed to functions by ________. | reference
QN=39 (2886) Which of the following methods does the JavaScript Boolean object not possess? | toInt
QN=40 (2811) Which of the following is not required for counter-controlled repetition? | sentinel
QN=41 (2826) What would the browser display if it executed the following script? | 7
QN=42 (2910) Which of the following is the proper method to apply the fliph filter to the following H1 element? | The filter cannot be applied to this element.
QN=43 (2789) ________ is an artificial and informal language that helps programmers develop algorithms. | Pseudocode
QN=44 (2863) Which of the following is an illegal array initialization statement? | var n = new Array( 5 );
QN=45 (2870) What will the browser display if the following script is executed? | 1 2 3 4 5 6 7 8 9
QN=46 (2779) Consider the following HTML code. | Hello World
QN=47 (2810) What is the value of i after the following statements? | 0
QN=48 (2832) The best way to develop and maintain a large program is to construct it from small, simple pieces called ________. | modules
QN=49 (2902) What is the significance of the second function argument in the following line? | The value sets how often to run the function.
QN=50 (2794) Which of the following flowchart symbols indicates that a decision is to be made? | diamond
1. What is XML? | Extensible Markup Language
2. Which Statement about xml is true? | All of the above.
3. What is the correct declaration syntax for the version of an XML document? | <?xml version="1.0" ?>
4. How is an empty XML element defined? | All of the above.
5. Which syntax is used to insert comments into an XML document? | <!-This is a comment->
6. What does DTD stand for? | Document Type Definition.
7. Which statement is true? | All XML elements must be properly closed.
8. Which statement is true? | All of the above.
9. Which is not a correct name for an XML documents? | All 3 names are incorrect.
10. Which is not a correct name for an XML element? | <first name>
11. What does XSL stand for? | eXtensible Stylesheet Language
12. What is a correct way of referring to a stylesheet called "mystyle.xsl"? | <?xml-stylesheet type="text/xsl" href="mystyle.xsl"?>
13. For the XML parser to ignore a certain section of your XML document, which syntax is correct? | <![CDATA[ Text to be ignored ]]>
14. XML is a _______ Recommendation | W3C
15. XML is | Free and Extensible
16. XML is a Complement to | HTML
17. XML Schema is designed to | be self-descriptive
18. XML uses | an XML Schema to describe the data
19. XML Can be used to | Create new language.
20. XML is the mother of | WAP and WML
1. XSL stands for: | EXtensible Stylesheet Language
2. The World Wide Web Consortium (W3C) started to develop XSL because there was a need for: | XML-based Stylesheet Language
3. XSL ________ how the XML document should be displayed! | describes
4. XSL consists of three parts. Which are? | XSLT, Xpath, XSL-FO
5. XSL processors do parses the XML source and tries to find out the matching _______ rule. | template
6. _____ in XSL do allow the element to be processed for multiple times, each time producing different result. | Modes
7. Templates are been ordered according to their ________ which can be specified with the priority attributte. | priority
8. An attributes can be accessed in the way similar to the elements. Notice ____ in front of the attribute name. | @
9. Which of these axes which are used in XSL? | grand-parent
10. A _____ instruction do contains the template, which is been applied to each node selected with the select attribute. | xsl:for-each
11. The xsl:element generates the elements in at time of processing. | True
12. The xsl:attribute do generates the elements in the time of processing. | True
13. The Copy and _______ constructs are used for the nodes copying. | copy-of
14. The ____ instruction do enables the conditional processing. | xsl:if
15. The xsl:choose element is used for the purpose of selection between the several possibilities. | True
16. An xsl:numbers do inserts a formated numbers into the ______ . | output
17. Stylesheet can do have ____ variables with the same name. | several
18. Value of the local variable is bounded to which element. | xsl:when
19. A _____ function returns number of nodes present in an argument node-set. | count
20. "Position" function do returns the number equal to context position | True
1. DTD is: | Document Type Definition
2. It defines the document structure with a list of _______. | legal elements
3. DTD defines the document structure with a list of legal elements. | True
4. A DTD can be declared inline in your XML document, or as an | external reference
5. If the DTD is included in your XML source file, it should be wrapped in a DOCTYPE definition with the following syntax: | <!DOCTYPE root-element [element-declarations]>
6. You can also use a DTD to verify your own | data
7. If the DTD is external to your XML source file, it should be wrapped in a DOCTYPE definition with the following syntax: | <!DOCTYPE root-element SYSTEM "filename">
8. With DTD, each of your XML files can carry a ________ of its own format with it. | description
9. Elements are the main building blocks of both | XML and HTML documents
10. Attributes provide _______ about elements. | extra information
11. Entities are variables used to define | common text
12. Entities are expanded when a document is parsed by an XML | parser
13. Which of these characters cannot be used as entity references in XML? | $
14. PCDATA means: | parsed character data
15. CDATA is text that _____ be parsed by a parser. | will not
16. CDATA means: | character data
17. An element declaration has the following syntax: | <!ELEMENT element-name category>
18. Elements with only character data are declared with | #PCDATA
19. In a DTD, Attributes are declared with an _______ declaration | ATTLIST
20. ________ can validate your XML against a DTD. | Internet Explorer 5.0
1. Schema is an _____ based alternative | XML
2. An XML Schema describes the structure of an XML _______ . | document
3. XSD is: | XML Schema Definition
4. Which of these are not supported by XML Schema? | defines which files are child elements
5. XML Schemas are the Successors of | DTD
6. XML Schema became a W3C Recommendation | 02. May 2001
7. One of the greatest strength of XML Schemas is the support for | data types
8. With XML Schemas, the senders can ________ the data in a way that the receiver will understand. | describes
9. With an extensible Schema definition you cannot: | All the above
10. A simple element is an XML element that can contain only | text
11. Which of these are not kinds of complex elements? | elements that contain only numbers
12. If an element has attributes, it is considered to be of complex types. | True
13. The syntax for defining an attribute is: | <xs:attribute name="xxx" type="yyy"/>
14. A default value is automatically assigned to the attributes when no other value is specified. | True
15. Attributes are by default: | optional
16. If an XML element is of type "xs:date" and contain a string like "Hello World", the element will | not validate
17. Restrictions on XML elements are called | facets
18. To specify how whitespace characters should be handled, we would use the whiteSpace | constraints
19. An empty complex element cannot have any contents, only | attributes
20. How many indicators are present in Schema? | 7
1. XML DOM is: | XML Document Object Model
2. XML DOM defines a standard way for | accessing and manipulating XML documents
3. The DOM is separated into how many different parts? | 3
4. XML DOM - defines a standard set of objects for XML documents only. | True
5. The XML DOM is language- and platform | independent
6. The XML DOM define a standard set of ______ for XML | objects
7. The DOM treats the XML document as | tree-structure
8. Each attribute,element and text in the XML document represents a | node in the tree
9. Both Mozilla and Internet Explorer support W3C's DOM specification. | True
10. There are differences between Internet Explorer's DOM and Mozilla's DOM. The most important difference is that how they handle | white-space text nodes
11. We can navigate between nodes with the use of their ________ to each other. | relationship
12. Which of these are not the valid XML DOM relationships? | nextNode
13. Internet Explorer will skip white-space text node that are generated between nodes (e.g. new-line characters), while Mozilla will not. | True
14. The ________ method returns a node list that contains all elements with the specified tag name in the same order as they appear in the source document. | getElementsByTagname()
15. The ________ method can be used to display the value of the specified attribute. | getAttribute()
16. The ______ method can be used to remove the specified node. | removeChild()
17. How many parameters are there for deleteData() method ? (st art, length) | 2
18. The _____ method creates the new element node. | createElement()
19. How many parameters are there for replaceData() method ? | 3 (start, length,string)
20. The _______ method is used to remove the attribute node. | removeAttributeNode()
Q.1) XML cannot be used with HTML. | False
Q.2) XML is more advantageous to use than a fixed-length database system because | All of the above.
Q.3) SAX is | An XML parser
Q.4) PCDATA is | An XML element that contains parsed character data
Q.5) The Document Object Model | Is an XML parser
Q.6) You must use a parser to read an XML document. | False
Q.7) XML stores data in fixed lengths. | False
Q.8) XML is a subset of | SGML
Q.9) XML is used for web services. | True
Q.10) An XML element can contain other XML elements. | True
Q.11) A parent element cannot contain another parent element. | False
Q.12) An attribute contains a | Name/value pair
Q.13) The asterisk at the end of an element name in a DTD means its | The DTD contains zero to many of this element
Q.14) What does the parser do with the CDATA section of an XML document? | Passes the data to the application that uses the XML document without any translation or interpretation
Q.15) The DOCTYPE is used to | Identify the DTD for an XML document
Q.16) A child element can be a parent element. | True
Q.17) All XML markup tags must have an attribute. | False
Q.18) Special symbols can be inserted into an XML document using | A UNICODE value
Q.19) You avoid conflict between an XML special character and information in an XML document by using a comment. | False
Q.20) A processing command is removed from an XML document before the XML document is passed along to the application that uses the XML document. | False
Q.21) An XML document must contain all elements declared in the DTD. | False
Q.22) #PCDATA refers to | Parsed character data
Q.23) A question mark following the name of a child name in the declaration of a parent element means | The child element is optional.
Q.24) What is address, phone in the declaration ? | A group
Q.25) What is this: ? | References a shared DTD
Q.26) An image tag is an example of an EMPTY element. | True
Q.27) All XML markup tags must have an attribute. | False
Q.28) An element name can begin with | All of the above
Q.29) You cannot set valid options when declaring an attribute. | False
Q.30) #REQUIRED specifies that an element is required in all XML documents that use the DTD. | False
Q.31) An XML schema is used to define a complex type. | True
Q.32) type=integer means | Only integers can be used in the corresponding element.
Q.33) xmlns:xs=fihttp://www.w3.org/2001/XMLSchemafl is used to | Identify the XML schema specifications used in the XML schema
Q.34) The xs:sequence tag | Specifies the sequence in which elements must appear in an XML document
Q.35) xsi:schemaLocation=ficustomers.xsdfl is used to | Identify the location of the XML schema
Q.36) You can require a specific value for an attribute by setting the value for fixed. | True
Q.37) A regular expression can be used to specify complex restrictions for the content of an element. | True
Q.39) A facet is a valid value that can be assigned to an attribute. | True
Q.40) The xs:enumeration tag is used to define a valid value for an attribute. | True
Q.41) XML can only be transformed into HTML or XHTML. | False
Q.42) Instructions for transforming an XML document are contained in the | XSL stylesheet
Q.43) The statement states | For each customer element of the source document thats a child of customers
Q.44) The element is used to | Extract text from the source document
Q.45) The statement is used to | Select the id attribute
Q.46) The element contains only XSL elements. | False
Q.47) The element instructs the CSS to evaluate a condition before extracting an element. | False
Q.48) In order to sort numeric values, you must set the to | data-type=finumberfl
Q.49) You can repeat lines of code within the XSL stylesheet by defining an apply-template. | False
Q.50) Only a browser can access a result document. | False
Q.51) The SAX parser is able to transverse an XML document. | False
Q.52) The SAX parser creates a node by using | None of the above
Q.53) The SAX parser reacts to a new element by using | startElement()
Q.54) Which of the following is represented as a node in the tree a DOM parser creates? | All of the above
Q.55) A Java transformer can use | All of the above
Q.56) The same version of a DOM parser must be used on all computers. | False
Q.57) A Stream is a series of characters that can be the results of transformation performed by a Java transformer. | True
Q.58) A SAX parser | Reads a block of an XML document at a time
Q.59) You should use a SAX parser if a DOM parser is unable to load the XML document into memory. | True
Q.60) The appendChild() method links a node to the current node. | True
Q.61) Saxon-B is the only software that can process an XQuery. | False
Q.62) What kind of clause is used to specify the filter criteria? | where clause
Q.63) $x is an | Variable
Q.64) Order by | Places all return values in ascending order by default
Q.65) The where clause | Specifies the filter criteria
Q.66) All functions used by an XQuery are built-in functions. | False
Q.67) The data() function returns the text value of a variable. | False
Q.68) A constructor | Converts information contained in an XML document to another data type
Q.69) The doc() function retrieves an XML document. | True
Q.70) The round-half-to-even() function rounds half the value returned by a function. | False
Q.71) MSXML can only be used with JavaScript. | False
Q.72) The async = false means | Statements will not execute until the XML document is being loaded.
Q.73) firstChild is a | Property containing a reference to the first child of an element
Q.74) createElement(fititlefl) means | Create a new XML element
Q.75) fi/catalog/cd[@upc=fi + upc + fi] means | Find the upc attribute that matches the value of the upc variable in the cd element
Q.76) An XML document can be validated against a DTD by calling the validate() method. | True
Q.77) The appendChild() appends a node to the end of an XML document. | True
Q.78) The version is specified in ActiveXObject(fiMSXML2.DOMDocument.4.0fl) because | Versions are designed to coexist with previous versions.
Q.79) The loadXML() method is used when the document is passed as a string. | True
Q.80) getAttribute(fiupcfl) retrieves the value of the upc attribute. | True
Streaming pull parsing refers to a programming model in which | a client application calls methods on an XML parsing library when it needs to interact with an XML infoset
In Javascript, which of the following methods would you use to search a character for a specific string? | indexOf
See the snipset below and choose one answer <xsl:for-each select="LIST//TITLE">...</xsl:for-each> | Match all <TITLE> elements one or more level deep in the <LIST> element
In XSLT, a string is a sequence of one or more Unicode character | false
SAX parser has high memory consumtion? | false
What would the browser output if the following script is executed? < SCRIPT LANGUAGE = "JavaScript" > vararray = [[1,2, 3], [1,2, 3]]; for (var i in array ) { for (var j in array[ i ]) document.write( array[ i ][ j ] + ""); document.writeln("<BR>");}</SCRIPT > | 1 2 3 1 2 3
W3C DOM uses both tree and object model concepts | True
Where is the correct place to insert a JavaScript? | Both the <head> section and the <body> section are correct.
xmlDoc.async= 'false' mean | Complete document must be loaded before futher processing
Root element must not be a non empty tag? | false
Internal DTDs specify the DTD within square brackets in the declaration it self | true
Leaf nodes have child nodes under them? | false
Document Object Model (DOM) treats a document as an object | true
The resolveEntity method of EntityResolver interface allow the application | to resolve external entity
The word sequence in the term sequence structure refers to the sequence of | bits in a JavaScript instruction
What would the browser display if the following script was executed? <SCRIPT LANGUAGE = "JavaScript"> for( var i = 0; i < 5; i++ ) document. write("0");</SCRIPT> | ooooo
In the following line, the word document is a which resides in the computer's memory and contains information used by the script. document.writeln("Hello World"); | object
QN=1 (2726) Which of these characters can be included within the text in an XML document in literal form? | ;
QN=1 (2726) Which of these characters can be included within the text in an XML document in literal form? | :
QN=1 (2726) Which of these characters can be included within the text in an XML document in literal form? | -
QN=2 (2928) XML parser checks for validity and well formed ness? | True
QN=3 (2724) Which of the following is/are optional in the creation of an XML file? | Entities
QN=5 (2934) A descendant having a new namespace cannot override the namespace defined by the parrent element? | false
QN=6 (2926) Parameter entities use ampersand (&) and semicolon (;) as delimiters? | false
QN=7 (2930) XML developer has to ensure the uniqueness of the element names and attributes in a document? | true
QN=8 (2929) XML is transformed only via XSLT? | false
QN=9 (2931) Browser has the ability distinguish duplicate element names in an XML document? | false
QN=10 (2725) Which of these is a valid comment in XML? | <!- -This data should be hidden
QN=11 (2731) What does the keyword SYSTEM indicate in the following code?<?xml version ="1.0"?><!DOCTYPE Book SYSTEM "book.dtd"> | Book.dtd is an external DTD
QN=12 (2728) Which of the following statements is not true? | Entities that appear anywhere in an XML document are referred to as Parameter entities
QN=13 (2718) Which of the following is not a keyword used for default settings in an! ATTLIST element? | #DEFINE
QN=14 (2938) External DTDs use the keyword URL to specify the location of the DTD? | false
QN=15 (2717) The question mark (?) operator indicates | either zero or one occurrence.
QN=16 (2945) For each element type associated with a sequence element, there must be an element in the XML instance in the same order? | true
QN=17 (2948) Specifies that the attribute cannot be used? | prohibited
QN=18 (2918) An XML Schema defines whether an element is empty or can include text. | true
QN=19 (2920) In schema, the ALL element requires that | each element in the group must occur at most once
QN=20 (2944) The default value for the minOccurs attribute in Schema is 0 | false
QN=21 (2771) See the snipset below and choose one answer: | -3
QN=22 (2760) Which top level XSLT elements is used to define a variable in a stylesheet or template and to assign it a value | xsl:variable
QN=23 (2763) Xpath can be thought of as a query language like SQL | true
QN=24 (2738) Which of these is the correct syntax to link an XSL file to an XML document? | <?xml-stylesheet type="text/xsl" href="candidate.xsl"?>
QN=25 (2901) CSS positions can be either absolute or ________. | relative
QN=26 (2889) ________ are declared in each individual HTML element using the keyword STYLE. | Inline styles
QN=27 (2773) XSLT takes two things as input: an XSLT stylesheet and an xml input document | true
QN=28 (2897) What is the significance of the following CSS rule? | It will apply the specified style to text enclosed by either LI or EM tags.
QN=29 (2893) Which of the following selections is the proper way to apply this CSS rule: | <P CLASS = "blue">
QN=30 (2737) In CSS, when a style is applied to an element containing other elements inside it | The style is applied to the element and all the other elements contained in it
QN=31 (2747) In DOM, a node can have | More than one children nodes
QN=32 (2951) Tree model is applied to static documents? | false
QN=33 (2754) Method hasChildNodes of XMLDOMNode mean | Determine if a given node has child nodes or not
QN=34 (2739) With reference to the snippet of code given below, choose the correct syntax to complete the second line in order to create a XML Document Object | new ActiveXObject("microsoft.XMLDOM")
QN=35 (2740) Which object represents the top level of the XML source? | DOMDocument
QN=36 (2753) In SAX, to provide customized DTD handling, application need to implement | DTDHandler
QN=37 (2746) SAX uses | Push parsing machenic for processing
QN=38 (2923) The StAX cursor API represents | a cursor with which you can walk an XML document from beginning to end.
QN=39 (2751) SAX support random access | false
QN=40 (2756) Method characters() of ContentHandler interface receives events for | Character data
QN=41 (2819) What is the value of num after the following statement is performed? | 2
QN=42 (2880) What does the value string contain after the following code is executed? | a link to www.deitel.com with the text "Good luck on the test"
QN=43 (2857) To divide the value of the seventh element of array a by 2 and assign the result to the variable x, we would write ________. | x = a[ 6 ] / 2
QN=44 (2788) A procedure for solving a problem in terms of the actions to be executed and the order in which these actions are to be executed is called ________. | an algorithm
QN=45 (2811) Which of the following is not required for counter-controlled repetition? | sentinel
QN=46 (2812) What is wrong with the following line of code? | Nothing
QN=47 (2908) Which of the following statements regarding filters and transitions is false? | They are applied on a client computer at run time by the server.
QN=48 (2790) A program in which all statements are executed one after the other in the order in which they are written exhibit ________. | sequential execution
QN=49 (2871) ________ and ________ run slower when they are applied to large arrays. | linear search, bubble sort
QN=50 (2881) What is the value of s3 after the following code is executed? | onetwo
QN=1 (2934) A descendant having a new namespace cannot override the namespace defined by the parrent element? | false
QN=2 (2711) ________ is a markup language for describing how content is rendered and ________ is a markup language for describing | HTML, XML.
QN=3 (2925) Characters like ">" and "&" can be used in PCDATA sections? | false
QN=4 (2926) Parameter entities use ampersand (&) and semicolon (;) as delimiters? | false
QN=5 (2721) Which of the following XML code snippets is/are correct? | <BOOK><AUTHOR> abc...</AUTHOR></BOOK>
QN=6 (2729) Which statements are true? | The DTD specifies the grammatical structure of an XML document.
QN=6 (2729) Which statements are true? | The DTD contains the list of tags allowed within the XML document, and their types and attributes.
QN=7 (2731) What does the keyword SYSTEM indicate in the following code? | Book.dtd is an external DTD
QN=8 (2717) The question mark (?) operator indicates | either zero or one occurrence.
QN=9 (2935) Each XML document can be represented as a tree structure? | true
QN=10 (2728) Which of the following statements is not true? | Entities that appear anywhere in an XML document are referred to as Parameter entities
QN=11 (2947) Restricts string types using regular expressions? | pattern
QN=12 (2942) Allow to validate documents that use markup from multiple namespaces? | Namespace support
QN=13 (2943) Match the xml data againts its corresponding data type in Schema? | time
QN=14 (2920) In schema, the ALL element requires that | each element in the group must occur at most once
QN=15 (2744) Which one of the following is the root element of all XML Schema documents? | Schema
QN=16 (2741) Most DOM objects such as XMLDOMAttribute, XMLDOMElement, XMLDOMEntity, XMLDOMComment etc have several common methods and properties since they are inherited from a common object. Which object is it? | XMLDOMNode
QN=17 (2739) With reference to the snippet of code given below, choose the correct syntax to complete the second line in order to create a XML Document Object | new ActiveXObject("microsoft.XMLDOM")
QN=18 (2958) DOM considers all items present in XML document as node? | true
QN=19 (2757) The item() method of XMLDOMNodeList and XMLDOMNamedNodeMap return the node present at specified index | true
QN=21 (2784) What is the result of the statement 17 % 5? | 2
QN=22 (2869) What is the effect of the join statement in the following code? | The join method will create a string from the values in theArray1.
QN=23 (2843) Where on the browser will the command window.status( "text" ) display output? | on the status bar
QN=24 (2822) In a switch structure, the ________ case clause is used to process exceptional conditions and is usually listed last. | default
QN=25 (2858) Which of the following is the proper method to dynamically allocate memory to an array of 100 elements? | var c = new Array( 100 );
QN=26 (2866) Call-by- ________ is the method of passing a copy of the argument's value to a function. | value
QN=27 (2873) MC: How many comparisons will a linear search function makes before finding a match if the search key has a value of 3 | 5
QN=28 (2779) Consider the following HTML code. | Hello World
QN=29 (2785) Which of the following selections does not follow the rules of operator precedence. | parentheses, subtraction, modulus
QN=30 (2781) The \n,\t, \r escape sequences do not affect HTML rendering unless they are used between which tags? | <PRE></PRE>
QN=31 (2850) Identifiers which have static duration ________. | are globally accessible to the script
QN=32 (2862) What would the browser display if this script was executed? | 9
QN=33 (2885) What will value contain after the following code is executed? | a large integer representing the number of milliseconds between midnight January 1, 1970 and the current date
QN=34 (2813) What would the browser display if the following script was executed? | Nothing, the script would generate an error
QN=35 (2903) With the ________, scripts can respond to a user moving the mouse, scrolling up or down the screen or entering keystrokes. | event model.
QN=36 (2786) What is the evaluation of the following expression? ((3+ ( 5 + 4 ) * 7 ) + 4 ) / 5 | 14
QN=37 (2911) The chroma filter is used to ________. | apply transparency effects dynamically
QN=38 (2908) Which of the following statements regarding filters and transitions is false? | They are applied on a client computer at run time by the server.
QN=39 (2838) Function definitions often contain ________ which are considered to be local variables and correspond with the arguments in the function call. | parameters
QN=40 (2800) What would the browser display if the following code is executed in a script? | Failed. You must take this course again.
QN=41 (2851) Script-level variables have ________ duration. | static
QN=42 (2787) Which of the following is not a valid equality or relational operator? | =
QN=43 (2797) Which of the following is not a JavaScript keyword? | sub
QN=44 (2915) Which of the following is not a property of the glow filter? | direction
QN=45 (2830) Which of the following is false? | In any flowchart, control structure (sequence, if, if/else, switch, while, do/while or for) can be replaced by 2 rectangle (actions) in sequence.
QN=46 (2904) The ________ attribute of the ________ element specifies another element that is identified by its ________ attribute. | FOR, SCRIPT, ID.
QN=47 (2774) Microsoft's version of scripting that uses the Java syntax is called ________. | JScript
QN=48 (2827) What would the browser display if it executed the following script? | 10
QN=49 (2856) Which of the following is the proper method to access the length of the array arr[]? | arr.length
QN=50 (2842) The value a in the following statement is called the ________ and the value b is called the ________. | shifting value, scaling factor
The entities that are used only in DTDs are referred to as | Parameter entities
Which of the following statements are true in the case of XML | XML was designed to describe data
An XML document, which conforms to its DTD, is called a | Valid Document
What does the keyword SYSTEM indicate in the following code? <!DOCTYPE Book SYSTEM "book.dtd"> | Book.dtd is an external DTD
XML uses the features of | SGML
The need of using DTD in developing XML document is | required when validating XML documents
What methods can you use with SAX to handle warnings, errors, and fatal errors? | You use methods such as the warning method to handle warnings, the error method to handle errors, and the fatalError method to handle fatal errors
How can you get a node list of all the <senator> elements in a document? | You can call a Document object's getElementsByTagName method like this: document.getElementsByTagName("senator")
___________ is a term used about text data that will be parsed by the XML parser. | PCDATA
You can append the <child> element to the <element> element by using the <child> element's ____________ method. | appendChild
How can you determine the text in a text node by using SAX? | You can implement the characters method and extract the text node's text from the character array passed to you, using the starting position in the array
What DOM method can you use to determine a node's type? | You can use the node's getNodeType method and check the results it returns against fields such as Node.ELEMENT_NODE, Node.TEXT_NODE, and so on
You can use the Attributes object passed to the _____________ method to handle an element's attributes. | startElement
How to unmarshall XML into Java objects? Convert from XML to Java objects. | JAXBContext context = JAXBContext.newInstance(Cars.class);Unmarshaller u = context.createUnmarshaller(); Cars cars = (Cars) u.unmarshal(new FileInputStream("cars.xml"));
SAX parser has high memory consummation? | False
The StAX cursor API represents ___ | a cursor with which you can walk an XML document from beginning to end
What SAX method(s) do you implement to handle elements? | You can implement the startElement and endElement methods to catch the starting and closing tags of elements
You can implement the ___________method and extract the text node's text from the character array passed to you, using the starting position in the array. The length of the text is also passed to you. | characters
You can implement the ______________and _____________methods to catch the starting and closing tags of elements. | startElement, endElement
Most DOM objects such as XMLDOMAttribute, XMLDOMElement, XMLDOMEntity, XMLDOMComment etc, have several common methods and properties since they are inherited from a common object. Which object is it? | XMLDOMNode
You can use the node's _____________ method and check the results it returns against fields such as Node.ELEMENT_NODE,Node.TEXT_NODE, and so on. | getNodeType
You can create the text in it by using the _____________ method. | createTextNode
You can use the getNodeName method to get a node's name and its _______________ method to get its value. | getNodeValue
What does the keyword SYSTEM indicate in the following code?<?xml version ="1.0"?><!DOCTYPE Book SYSTEM "book.dtd"> | Book.dtd is an external DTD
What is a correct way of referring to a stylesheet called "mystyle.xsl"? | <?xmlstylesheet type="text/xsl" href="mystyle.xsl"?>
The ________ attribute is added to a TABLE element's opening tag to bind a data island to a table. | DATASRC
What would the browser display if the following script is executed? <SCRIPT LANGUAGE = "JavaScript"> var count = 5, total = 0; while ( count > -1 ) { total = total - 10; count = count - 1; } document.write(total);</SCRIPT> | -60
See the snipset below and choose one answer: <xsl:template match="BOOK[position()!=2]"> <xsl:value-of select="."/> </xsl:template> | Select all BOOK elements that are not the second child of their parents.
Microsoft's Internet Explorer Web browser contains a ________ that executes VBScript code. | interpreter
________ is a technology that allows a server-side script to create dynamic content that is sent to the client's browser. | ASP
Given <?xml version="1.0" encoding="UTF-8"?> <customers> <customer password="khanhkieu"> <username>KhanhKT</username> </customer> <customer password="123456"> <username>Hatruc</username> </customer> </customers> Choose the correct XPath statement that is used to query to get password value of username "Hatruc" | //customer[username='Hatruc']/@password
<?xml version="1.0" encoding="UTF-8"?> <aaa> <bbb>ccc</bBb> </aaa> | The document is not well-formed
What are difference between XML-Enabled and XML -Native? | XML-Native are supported the query with XQuery and XPath but the XML-Enabled are supported the query with SQL embedding XPath or XQuery
The declaration is used to declare the xml tag library using in JSP as | . <%@ taglib prefix="x" uri= "http://java.sun.com/jsp/jstl/xml" %>
See the snipset below and choose one answer: <xsl:value-of select="ceiling(-2.3)"/> | -2
Which of the following statement about SAX is false? | Data parsing can be controlled through SAX
A Complex Type element can be defined using | <xsd:complexType name="..." />
To prevent a type from being derived for defining new types you can specify | <complexType name="Address" final="restriction" />
Which of the following XML code snippets is/are correct? | <BOOK> <AUTHOR> abc...</AUTHOR> </BOOK>
The best way to develop and maintain a large program is to construct it from small, simple pieces called ________. | b) modules
The technique of developing and maintaining a large program by constructing it from small, simple pieces is called ________. | a) divide and conquer
The "prepackaged" functions that belong to JavaScript objects such as Math.pow and Math.round are often called ________. | c) methods
All variables declared in function definitions are ________. | b) local variables
Functions are invoked by writing the name of the function, followed by the function's ________ in closed parenthesis | c) arguments
Function definitions often contain ________ which are considered to be local variables and correspond with the arguments in the function call. | a) parameters
Which of the following is a legal function call for the function definition provided below? function square( y ) { return y * y; } | a) square(7+2);
What would the function cube return, assuming it is called with the line cube(3). function cube(y); { return y * y * y; } | a) JavaScript runtime error
What does the following statement do? Math.floor( Math.random() * 12 ); | b) This creates a random number from 0 up to but not including 12.
The value a in the following statement is called the ________ and the value b is called the ________. face = Math.floor( a + Math.random() * b ); | b) shifting value, scaling factor
Where on the browser will the command window.status( "text" ) display output? | d) on the status bar
The style of programming in which the user interacts with a GUI component is called ________ programming | c) event-driven
If the HTML form game has a text field named point in it, what is the proper way to set the text associated with point to 10? | d) game.point.value = "10"
The ________ of a variable is the period during which it exists in memory | c) duration
Identifiers that represent local variables in a function ________. | b) exist while the function in which they are declared is still active
Local variables have ________ duration | c) automatic
Identifiers which have static duration ________. | a) are globally accessible to the script
Giving a local function variable the same name as a global variable will result in which of the following | d) The local variable will "hide" the global variable
_________ are data structures consisting of related data items (sometimes called collections of data items) | c) arrays
To refer to a particular location or element in the array, we specify the name of the array and the ________ of the particular element in the array | c) position number
Which of the following is the proper method to access the length of the array arr[]? | c) arr.length
To divide the value of the seventh element of array a by 2 and assign the result to the variable x, we would write ________. | c) x = a[ 6 ] / 2
Which of the following is the proper method to dynamically allocate memory to an array of 100 elements | d) var c = new Array( 100 );
The statement on line 1 ________ the array while the statement on line 2 ________ the array. 1 var c; 2 c = new Array( 12 ); | c) declares, allocates
Initializing an array directly involves using the ________ control structure. | a) for loop
What would the browser display if this script was executed? <SCRIPT LANGUAGE = "JavaScript"> var c = new Array(8) for( var i = 0; i < 8; i++ ) c[i] = i; document.write(c[8]) </SCRIPT> | a) undefined
What would the browser display if this script was executed? <SCRIPT LANGUAGE = "JavaScript"> var c = new Array(8) for( var i = 0; i < 10; i++ ) c[i] = i; document.write(c[9]) </SCRIPT> | d) 9
Which of the following is an illegal array initialization statement | c) var n = new Array( 5 ); n = [ 10, 20, 30, 40, 50
In the following statement, the range of the variable element is ________. for ( var element in theArray ) total2 += theArray[ element ]; | g) 0 to the array length - 1
What is the value of num assuming that all 12 elements of array test are initialized to 3? ++test[ 7 ]; var num = test[ 7 ]; | b) 4
In JavaScript, all objects and Arrays are passed to functions by ________ | d) reference
Call-by- ________ is the method of passing a copy of the argument's value to a function. | a) value
Call-by- ________ is the method of passing the argument's actual location in memory to a function. | d) reference
What is the effect of the join statement in the following code? | c) The join method will create a string from the values in theArray1
________ and ________ run slower when they are applied to large arrays | b) linear search, bubble sort
TThe java sort method uses ________ to sort the array passed to it | a) string comparison
MC: How many comparisons will a linear search function makes before finding a match if the search key has a value of 3 and the array x has the values: x[ 0 ] = 0 x[ 1 ] = 2 x[ 2 ] = 1 x[ 3 ] = 4 x[ 4 ] = 3 x[ 5 ] = 3 | (c) 5
What would the browser output if the following script is executed? < SCRIPT LANGUAGE = "JavaScript" > var array = [ [ 1, 2, 3 ], [ 1, 2, 3 ] ]; for ( var i in array ) { for ( var j in array[ i ] ) document.write( array[ i ][ j ] + " " ); document.writeln("<BR>"); } < /SCRIPT > | d) 1 2 3 1 2 3
Each object has ________ or data and ________ or behavior | c) attributes, methods
Which of the following is false | b) Objects do not have the property of information hiding.
An object's methods and attributes are accessed by writing the name of the object followed by the ________. | c) dot operator
What does the value string contain after the following code is executed? var string = "Good luck on the test"; string = string.charAt( 3 ); | c) d
What does the value string contain after the following code is executed? var string = "Good luck on the test"; string = string.split( " " ); | a) Good luck on the test
What does the value string contain after the following code is executed? var string = "Good luck on the test"; string = string.link("www.deitel.com") | b) a link to www.deitel.com with the text "Good luck on the test"
What is the value of s1 after the following code is executed? var s1 = "deitel and associates" s1 = s1.slice( 6 ) | c) and associates
Which of the following methods would you use to search a character for a specific string? | d) indexOf
Which of the following methods would you use to convert a list of Unicode values into a string containing the corresponding characters | c) fromCharCode
What will value contain after the following code is executed var value = new Date(); value = value.valueOf(); | b) a large integer representing the number of milliseconds between midnight January 1, 1970 and the current date
Which of the following methods does the JavaScript Boolean object not possess | c) toInt
Which of the following methods does the JavaScript Number object not possess? | c) valueOf
What is the significance of the following CSS rule? LI, EM { color: red;c font-weight: bold } | a) It will apply the specified style to text enclosed by either LI or EM tags.
If an element's position is declared as absolute then ________ | c) positioning is set according to the margins of its parent element
Which of the following settings for a background image can be modified to create a "watermark" effect where scrolling will not move the image from its set position | d) background-attachment
When using the width, height and overflow properties of an element, position must be ________ | b) not absolute
In order for elements to be floated, position must be ________. | b) not absolute
The outermost layer of the box model is the ___ | c) margin
Which of the following is not a border property | c) shape
The CSS specification gives precedence to ________. | a) author styles over user styles
What does the following CSS rule do? .note { font-size: 1.5em } | d) It multiplies all text object font sizes with CLASS = "note" by 1.5
Consider the following HTML document. 1 <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN"> 2 <HTML> 3 <HEAD> 4 <TITLE>Object Model</TITLE> 5 6 <SCRIPT LANGUAGE = "JavaScript"> 7 function start() 8 { 9 alert( pText.innerText ); 10 pText.innerText = "Thanks for coming."; 11 } 12 </SCRIPT> 13 14 </HEAD> 15 16 <BODY ONLOAD = start()> 17 18 <P ID = "pText">Welcome to our Web page!</P> 19 20 </BODY> 21 </HTML> Which of the following selections a true statement? | b) The pText object does not have an innerText attribute
Consider the following HTML document. 1 <HTML> 2 <HEAD> 3 <TITLE>Children Collection</TITLE> 4 <SCRIPT LANGUAGE = "JavaScript"> 5 </SCRIPT> 6 </HEAD> 7 <BODY> 8 <P></P> 9 </BODY> 10 </HTML> Select the true statement. | d) The SCRIPT element is a direct child of the HEAD element.
CSS positions can be either absolute or ________. | b) relative
What is the significance of the second function argument in the following line window.setInterval( "run()", 100 ); | c) The value sets how often to run the function
The ________ object contains information about the Web browser that is viewing the page. | b) navigator
What is stored inside the variable value after the following line of code is executed? var value = navigator.appVersion | c) It stores a string representing the version of the browser and other information.
Which of these is the command to enable error handling on a Web page | (d) window.onError
When the mouse moves over an element which of the following is triggered | (b) ONMOUSEOVER
11 The ONFOCUS event fires when ________. | (c) an element is clicked.
The ONBLUR event is associated with ________ | (d) an element losing focus.
What is the effect of the following line of code? window.event.returnValue = true; | (b) It returns a true value to signal the browser to continue its default event-handling action.
Which of the following is false? | d) Filters and transitions cannot be adjusted dynamically.
Which of the following statements regarding filters and transitions is false | b) They are applied on a client computer at run time by the server
Which browsers can view the visual effects created by filters and transitions | d) Netscape
Which of the following is the proper method to apply the fliph filter to the following H1 element? <H1 ID = "test">This is a test</H1> | d) The filter cannot be applied to this element.
The chroma filter is used to ________. | d) apply transparency effects dynamically
Which of the following is true regarding the DHTML mask filter: | b) It is used to create images with transparent foregrounds
Which is the proper method to set the mask color? | a) filter: mask( color = #CCFFFF )
Which of the following is true? | b) The invert filter applies a negative image effect
Which of the following is true? | c) The shadow filter property can be set to exactly 8 different values
Which of the following best describes the visual effect that alpha is used for | b) replacing text colors
Which of the following is not a property of the glow filter | c) direction
Which of the following is not a property of the blur filter | d) ( add, direction, strength) All of these are properties of the blur filter.
Which of the following is not a property of the wave filter? | c) direction
The ________ property of the wave filter shifts the effect in space | c) phase
The ________ property of the wave filter determines the wave's amplitude | d) strength
Which of the following is true? | c) The dropShadow filter does not have a direction attribute
The first two parameters in the addPoint method ________. | d) sets the point source of the light
The third parameter in the addPoint method ________. | a) sets the height of the point source
The last parameter in the addPoint method ________. | b) sets the strength percentage
Which of the following is the proper method to apply a transition effect | a) element.filters( "blendTrans" ).apply();
The main difference between the blendTrans filters and the revealTrans filters is _________. | c) The revealTrans filter has more transition effects than the blendTrans filter
________ makes it now possible for data manipulation to be shared by the server and the client. | d) all of the above
Which of the following is false? | c) The TDC outputs an interface like Microsoft Excel.
Which of the following is true? | d) Text qualifiers encapsulate the data in a field
The @ character is referred to as a______ | b) text qualifier
The | character is referred to as a________. |    c) field delimiter
Which of the following is not a valid PARAM setting for TDC controls? | a) <PARAM NAME = CLASSID: CLSID:333C7BC4-460F-11D0-BC04-0080C7055A83>
What does the following statement do? <SPAN ID = "colorName" STYLE = "font-family: monospace" DATASRC = "#Colors" DATAFLD = "ColorName"></SPAN><BR> | c) It assigns the TDC control named Colors to a span element for display purposes
What will value contain after the following code is executed assuming that Colors is a valid TDC control? value = Colors.recordset; | a) It will contain the current indexed item of the datasource
When the TDC is bound to an element, the element's DATASRC attribute should be set to ________. | d) the name of the TDC object preceded by a #
The binding of TDC to a table requires setting the DATASRC property in the ________ | a) table element
Which of the following is true? | b) The TDC handles creating table cells for output
The JavaScript keyword this always refers to ______ | b) the element in which the statement resides
The TDC method Reset is used for _____ | c) refreshing the display
Which of the following is false | c) The Sort property automatically displays the new order of the data
The TDC Filter property allows you to ________. | d) filter out all records that do not have a cell matching the text you specify
The Filter property should be in which of the following formats? | a) ColumnName = FilterText
How a data source is displayed by the browser depends on the ________. | d) element that the data source is bound to
Microsoft's Internet Explorer Web browser contains a ________ that executes VBScript code | c) interpreter
VBScript is ________ | a) case sensitive like JavaScript
The VBScript '&' operator is used for ________. | b) string concatenation
The VBScript '+' operator is used for ________. | c) both a and b
The VBScript operator for inequality is which of the following | b) <>
Which of the following is not a VBScript sub-typ | c) variant
What does the Option Explicit statement do | d) It does not allow the programmer to use variables without declaring them first.
The VBScript control structures behave ________ to their JavaScript counterparts and the VBScript control structure syntax is ________ the JavaScript syntax | d) differently, different than
What is wrong with the following VBScript code? 1 If (s = t) Then 2 u = s + t 3 ElseIf (s > t) Then 4 u = r 5 Else 6 u = n 7 End If | a) Nothing
Which VBScript function returns an integer indicating the variant subtype? | d) VarType
What is the underscore character used for in VBScript? | d) It is used as a line continuation character
Which of the following is true regarding the following code? MsgBox( "VBScript is fun!", , "Results" ) | c) The function should be preceded by the keyword Call
What does the ScriptEngine function do? | d) It returns the type script being used
The VBScript ________ function has the same purpose as JavaScript's window.prompt method | b) InputBox
What does the ScriptEngine function do | d) It returns the type script being used.
Which of the following is a valid VBScript conversion function | b) CInt
Which of the following is true regarding Function procedures | c) The procedure can return a value by assigning a value to the Function procedure name
Which of the following is true regarding VBScript arrays? | a) VBScript arrays can be dynamically allocated
Which of the following string functions returns a string that does not contain any leading or trailing space characters | b) Trim
Which of the following functions searches a string for a substring and returns an index of the found substring if it is found | c) Instr
Describing an object in terms of behaviors without concern for how those behaviors are actually implemented is called ___ | b) data abstraction
The keywords Property Let and Property Set are used for ________. | b) accessing Private class variables
Which of the following is true regarding VBScript classes? | d) The Property Let method is used for non-object subtypes
You can specify a series of valid values for an element by using which of the following in a regular expression? | Vertical bar sign
HTML code:<B> Customer </B><p>Michelle Abraham <br> Salmonella Apartments<br> Programmer<br></p>Peter is asked to represent the information given in the HTML code snippet above in XML. He represents the information as follows: <CUSTOMER> <NAME> Michelle Abraham <ADDRESS> Salmonella Apartments </NAME> </ADDRESS> <PROFESSION> Programmer </PROFESSION> </CUSTOMER> Identify the error in the above code and suggest a solution for the same. | Error on line: <NAME> Michelle Abraham <ADDRESS> Salmonella Apartments </NAME> </ADDRESS> . Solution: The closing tag of the Name element should be written before the ADDRESS element.
Consider the following statements: Statement A: XML enables you to store data in a structured format by allowing you to create customized tags. Statement B: XML documents can be easily interpreted by target systems. Which of the following is correct about the above statements? | Both, Statement A and Statement B, are True.
The following paragraph describes the differences between XML and HTML but there are some FEATURES are NOT correct. Please find out them. XML features * Defined set of tags designed for web display * Format driven * End tags required for well-formed documents * Quotes required around attributes values * Slash required in empty tags HTML features * User definable tags * Content driven * End tags not required * Quotes not required * Slash not required | It should be swap between "Defined set of tags designed for web display" and "Format driven" of XML to "User definable tags" and "Content driven" of HTML
load() method is used to load a string | False
new ActiveXObject("Microsoft.XMLDOM"); creates an XML document object. | True
Given: <HTML> <HEAD> <TITLE>DHTML Event Model - ONLOAD</TITLE> <SCRIPT LANGUAGE = " "> var value = 0; function startTimer(){window.setInterval( "updateTime()", 1000 ); } function updateTime(){ value++; pText.innerText = value; }</SCRIPT> </HEAD> <BODY ONLOAD = "startTimer()"> <P><A ID = "pText">0</A></P> </BODY> </HTML> | It counts the number of seconds elapsed viewing the page.
Given: <SCRIPT LANGUAGE = " "> var c = new Array(8) for( var i = 0; i < 10; i++ ) c[i] = i;document.write(c[9]) </SCRIPT> What would the browser display if this script was executed? | 9
<?xml version="1.0" encoding="UTF-8"?> <aaa> <bbb>ccc</bBb> </aaa> Choose the correct answer | The document is not well-formed
XML Fragment <tomcat-users> <role rolename="admin"/> <role rolename="manager"/> <role rolename="user"/> <role rolename="tomcat"/> <user username="ide" password="ee1KER95" roles="manager,admin"/> <user username="tomcat" password="tomcat" roles="tomcat"/> <user username="khanhkt" password="trongkhanh" roles="manager,admin"/> <user username="guest" password="123456" roles="username"/> </tomcat-users>The Java code fragment using DOM API ... Document doc = db.parse(new File(path + "WEB-INF/tomcat-users.xml")); XPathFactory xpf = XPathFactory.newInstance(); XPath xpath = xpf.newXPath(); String exp = "//user[contains(@username, 'a')]"; NodeList node = (NodeList) xpath.evaluate(exp, doc, XPathConstants.NODELIST); Choose the correct statement. Assume that all code and file path are correct | The application can get more than one node
The declaration is used to declare the xml tag library using in JSP as | <%@ taglib prefix="x" uri= "http://java.sun.com/jsp/jstl/xml" %>
In a 3-tier model identify the front-end, middle-tier and back-end | Browser, WebServer, Database Server
Identify if the following XML document code is valid. <?xml version="1.0"?> <note> <to>Joe</to> <from>John</from> <heading>Reminder</heading> <body>Dont forget me this weekend!</body> </note> | Valid
Identify if the following XML document code is valid. <?xml version="1.0"?> <to>Joe</to> <from>John</from> <heading>Reminder</heading> <body>Dont forget me this weekend!</body> | Invalid
Identify if the following code is correct? <b><i>This text is bold and italic</b></i> | Incorrect
Identify the line/s containing an error 1)<?xml version="1.0"?> 2)<note date=12/11/99> 3)<to>Ravi</to> 4)<from>Amit</from> 5)<heading>Reminder</heading> 6)<body>Make good food please</body> 7)</note> | Line 2
Match the correct entity names with the respective characters a) &amp; 1) < b) &gt; 2) ' c) &quot; 3) > d) &lt; 4) " e) &apos; 5) & | a-5 ,b-3 ,c-4 ,d-1 ,e-2
<!ELEMENT A((B,C) | D |   E)> Identify what the statement indicates    |    Element A consists D or E or B followed by C.
<?xml version="1.0" ?> <!DOCTYPE APTECH [ <!ELEMENT APTECH (CLASS1 | CLASS2)+> <!ELEMENT CLASS1 (#PCDATA)> <!ATTLIST CLASS1 count CDATA #REQUIRED> <!ELEMENT CLASS2 (#PCDATA)> <!ATTLIST CLASS2 count CDATA #REQUIRED> ]> <TRIAL>ELECTRONIC GOODS <CLASS1 count="8">10students</CLASS1> <CLASS2 count="10">20students</CLASS2> </TRIAL> The following code will execute without displaying any errors? |    t
<?xml version="1.0"?> <script> <![CDATA [function matchwo(a,b) { if (a < b && a < 0) then { return 1 } } ]]> </script> The above code: | Executes without any error
Consider and xml document <?xml version="1.0"?> <?xml-stylesheet type="text/css" href=xsampdoc.css ?> <xsampdoc> <greeting>All The Best!</greeting> </xsampdoc> The code for the style sheet xsampdoc is given as: greeting { display:block; font-family:Arial,Helvetica, sans-serif;font-size:32pt; width:30em; color:red; } What will be the output of the above code? | The xml document will be displayed in the tree format
Match the following Absolute units & Relative units with their respective values a)Ex 1)Inches b)In 2)Pixel c)Px 3)Pica d)Em 4)Fonts height e)Pc 5)Height of the letter 'x' | a-5,b-1,c-2,d-4,e-3
To assign the same style rule to different elements, we apply the same number of declarations as the number of elements to several selectors. | False
S{margin-right:-3cm;} Is the above statement valid? | No
Data Islands are also referred to as: | DSO's
We can create documents, which can switch styles without submitting the file back to the server. | True
XML defines the way elements relate to one another within the document's tree structure, and specifies the attributes | False
DTD doesn't support namespaces. | True
What is the value of s3 after the following code is executed? var s1 = one, s2 = two, s3 = three; s1.concat(s2) s3 = s1; | b) onetwo
What does the value string contain after the following code is executed? var string = "Good luck on the test"; string = string.split( " " ) | a) Good luck on the test
HTML code:<B> Customer </B><p>Michelle Abraham <br> Salmonella Apartments<br> Programmer<br></p>Peter is asked to represent the information given in the HTML code snippet above in XML. He represents the information as follows: <CUSTOMER> <NAME> Michelle Abraham <ADDRESS> Salmonella Apartments </NAME> </ADDRESS> PROFESSION> Programmer </PROFESSION> </CUSTOMER> Identify the error in the above code and suggest a solution for the same. | Error on line: <NAME> Michelle Abraham <ADDRESS> Salmonella Apartments </NAME> </ADDRESS> . Solution: The closing tag of the Name element should be written before the ADDRESS element.
What is a correct way of referring to a stylesheet called "mystyle.xsl"? | <link type="text/xsl" href="mystyle.xsl" />
Which of these is a valid comment in XML? | <!--This data should be hidden <FIRSTNAME>Joe</FIRSTNAME> <LASTNAME>Johnson</LASTNAME>-->
Script-level variables have ________ duration. | d) static
The _______ of an identifier for a variable or function is the portion of the program in which the identifier can be referenced. | a) scope
23 Giving a local function variable the same name as a global variable will result in which of the following? | d) The local variable will "hide" the global variable.
1 _________ are data structures consisting of related data items (sometimes called collections of data items). | c) arrays
To refer to a particular location or element in the array, we specify the name of the array and the ________ of the particular element in the array. | c) position number
Which of the following is the proper method to dynamically allocate memory to an array of 100 elements? | d) var c = new Array( 100 );
It is a markup language that lets information systems share structured data | xxx
When the TDC is bound to an element, the element's DATASRC attribute should be set to ________. | d) the name of the TDC object preceded by a The binding of TDC to a table requires setting the DATASRC property in the ________ |    a) table element
Which of the following are valid iteration mechanisms in jsp? | <% int i = 0; for(;i<5; i++) { %> "Hello World"; <% i++; } %>
Which of the following is true statement about the JavaServer Page life cycle?(Choose one) | The _jspService() method is called from the generated servlet's service() method
Which is the CORRECT statement? | Entity beans represent persistent state objects (things that don't go away when the user goes away)
A .................... manages the threading for the servlets and JSPs and provides the necessary interface with the Web server | Web Container
What gets printed when the following JSP code is invoked in a browser. Select the one correct answer. <%= if(Math.random() < 0.5) %> hello<%= } else { %> hi <%= } %> | The JSP file will not compile.
Is the following JSP code legal? Select the one correct statement. <%@page info="test page" session="false"%> <%@page session="false"%> | No. This code will generate syntax errors
Which of the follwing are mandatory elements within the filter element. Select two correct answers. | A.filter-name D.filter-class
Which method of ReportGeneratorServlet will be called when the user clicks on the URL shown by the following HTML. Assume that ReportGeneratorServlet does not override the service(HttpServletRequest, HttpServletResponse) method of the HttpServlet class. (Choose one) | doGet(HttpServletRequest, HttpServletResponse);
What does XML stand for? | eXtensible Markup Language
What is the correct syntax of the declaration which defines the XML version | <?xml version="A.0"?>
Is it easier to process XML than HTML | true
Which of the following programs support XML or XML applications | Internet Explorer 5.5, Netscape D.7
Kind of Parsers are | non-validating and validating
Well formed XML document means | must contain one or more elements and root element must contain all other elements
Comment in XML document is given by | <!-- -->
When processing an output XML, "new line" symbols | are converted to single LF symbol
Which of the following XML fragments are well-formed? | <?xml version="A.0"?
What are the predefined attributes | xml:lang, xml:space
Valid XML document means (most appropriate) | the XML document has DTD associated with it & it complies with that DTD
XML document can be viewed in | IE 6.0
There is a way of describing XML data, how? | XML uses a DTD to describe the data, XML uses a description node to describe data
DTD includes the specifications about the markup that can be used within the document, the specifications consists of all EXCEPT | the browser name
Which of the following XML documents are well-formed | <firstElement>some text goes here</firstElement><secondElement> another text goes here</secondElement>
How can we make attributes have multiple values: | attributes cannot have multiple values
The use of a DTD in XML development is | required when validating XML documents
Parameter entities can appear in | dtd file
Attribute standalone="no" should be included in XML declaration if a document: | has an external DTD
In XML | the internal DTD subset is read before the external DTD
Disadvantages of DTD are | (i)DTDs are not extensible (ii)DTDs are not in to support for namespaces (iii)there is no provision for inheritance from one DTDs to another
To use the external DTD we have the syntax | <?xml version="A.0" standalone="no"?><! DOCTYPE DOCUMENT SYSTEM "order.dtd"?>
To add the attribute named Type to the <customer> tag the syntax will be | <customer Type=" exelent" >
The syntax for parameter entity is | <! ENTITY % NAME DEFINITION>
You can name the schema using the name attribute like | <schema name="schema1">
The default model for complex type, in XML schemas for element is | elementOnly
Microsoft XML Schema Data types for Hexadecimal digits representating octates | UUID
A schema describes | (i) grammer (ii) vocabulary (iii) structure (iv) datatype of XML document
Microsoft XML Schema Data Type " boolean" has values | 1,0
Simple type Built into Schema " data' represent a data in | YYYY-MM-DD
In simple Type Built into XML schema Boolean type holds | True, False, 1,0
In simple type built into XML schema type flat has single precision of ________ floating point | 8 bit
The XML DOM object is | Entity Reference
To create a choise in XML schemas, we use the | <xsd:choise> element
To create a data island we use the _____________HTML element | <XML>
To Bind the HTML elements with DSO we use _________ attribute | DATASOURCE, DATASRC
To bind the HTML element <INPUT> Type in text with the datasource " dsoCustomer" we use | <INPUT TYPE="TEXT" DATASRC=" #dsoCustomer" >
XML DSOs has the property for the number of pages of data the recordset contains | pageCount
Whats so great about XML? | Easy data exchange & High speed on network
For XML document to be valid | document need to be well formed & valid
A textual object is a well formed XML document if | (i) Taken as a whole it matches the production labeled document. (ii) Each of the parsed entity which is referenced directly or indirectly within the document can be well formed
<?xml version=" A.0" standalone=" yes" encoding="UTF-8" ?> | the standalone is wrong
The attribute used to define a new namespace is | Xmlns
To match the root node in XMLT transform the syntax will be | <xsl:template match=" /">
@Generated by KingWisdom`.toLowerCase().split("\n")

const MLN_BANKS = `Loại tiền nào  có chức năng cất trữ | Tiền vàng
Tư bản cố định và tư bản lưu động thuộc phạm trù tư bản nào? | Tư bản sản xuất.
Khi xác định tính chất của phạm trù "Cái chung", triết học Mác- Lênin khẳng định cái chung là cái | Bản chất
Chọn câu trả lời đúng theo tinh thần khoa học: Lý luận hình thái kinh tế - xã hội là cơ sở khoa học để: | Xác lập phương pháp luận chung nhất ở tầm "duy nhất khoa học" cho mọi quá trình nghiên cứu
Chọn câu trả lời đúng theo quan điểm của chủ nghĩa duy vật lịch sử: Trong mối quan hệ giữa lực lượng sản xuất và quan hệ sản xuất: | Lực lượng sản xuất là yếu tố thường xuyên biến đổi, phát triển
Chọn câu trả lời đúng theo quan điểm của chủ nghĩa duy vật lịch sử: Trong mối quan hệ giữa lực lượng sản xuất và quan hệ sản xuất: | Quan hệ sản xuất phụ thuộc vào trình độ phát triển của lực lượng sản xuất
Nguồn gốc của giá trị hàng hóa được tạo ra từ đâu? | Cả sản xuất và lưu thông
Trong tác phẩm "biện chứng của tự nhiên", Ph.Ăngghen viết: toàn bộ giới tự nhiên hữu cơ là bằng chứng liên tục nói lên rằng...là đồng nhất và không thể tách rời được. | Nội dung và hình thức
Luận điểm sau đây về nguồn gốc của sự phát triển thuộc lập trường triết học nào: “phát triển trong hiện thực là tồn tại khác, là biểu hiện của sự phát triển của ý niệm tuyệt đối” | Chủ nghĩa duy tâm khách quan
Lượng giá trị hàng hóa được đo lường bằng | Thời gian lao động cá biệt cần thiết.
Đâu là quan niệm về vật chất của chủ nghĩa duy vật biện chứng | Vật chất là cái gây nên cảm giác cho chúng ta
Triết học duy tâm cho rằng | Ý thức quyết định vật chất
Triết học duy vật cho rằng | Vật chất quyết định ý thức
Chon câu trả lời đúng theo quan điểm chủ nghĩa duy vật lịch sử: Lực lượng cơ bản nhất trong quần chúng nhân dân là: | Công nhân và nông dân
Khái niệm nào dùng để chỉ sự chuyển hóa về chất do sự biến đổi  trước đó về lượng tới giới hạn điểm nút? | Bước nhảy
QN=444 Trong thời kỳ quá độ đi lên chủ nghĩa xã hội, giai cấp công nhân...? | Còn một phần bị bóc lột
QN=436 Biện pháp cạnh tranh mà tổ chức độc quyền áp dụng với các tổ chức ngoài độc quyền: | Độc chiếm nguồn nguyên liệu, nhân công
QN=141 Ở trong lĩnh vực...khả năng không thể tự nó biến thành hiện thực nếu không có sự tham gia của con người. | Xã hội
QN=339 Giá cả sản xuất tư bản chủ nghĩa bằng: | Chi phí sản xuất cộng lợi nhuận bình quân
QN=80 Mối liên hệ nhân quả có các tính chất gì? | Tính khách quan, tính phổ biến và tính tất yếu
QN=410 Nhà nước tư sản đảm nhận đầu tư kinh doanh vào các ngành: | Đầu tư lớn, thu hồi vốn chậm, ít lợi nhuận
QN=218 Điền thêm từ để có cau trả lời đúng theo quan niệm duy vật lịch sự và xác định đó là nhận định của ai? | Tổng hòa những quan hệ xã hội /C.Mác
QN=398 Khi chủ nghĩa tư bản độc quyền ra đời: | Làm cho quy luật của nền sản xuất hàng hóa và chủ nghĩa tư bản có những biểu hiện mới
QN=377 Cạnh tranh trong nội bộ ngành sẽ: | Hình thành giá trị thị trường của hàng hóa
QN=279 Lượng giá trị hàng hóa nhiều hay ít, cao hay thấp, được xác định như thế nào? | Xác định bằng thời gian lao động giản đơn, trung bình xã hội cần thiết
QN=153 Có rất nhiều loại nguyên nhân, như: nguyên nhân cơ bản, nguyên nhân chủ yếu, nguyên nhân bên trong, nguyên nhân bên ngoài, nguyên nhân chủ quan, nguyên nhan khách quan...điều đó chứng tỏ là... | Một kết quả có thể do nhiều loại nguyên nhân gây ra
QN=157 Nội dung của các phạm trù luôn luôn mang tính... | Khách quan
QN=1 Trong chủ nghĩa Mác - Lênin, bộ phận lý luận nào có chức năng làm sáng tỏ bản chất và những quy luật chung nhất của mọi sự vận động, phát triển của thế giới là : | Triết học Mác - Lênin
QN=140 V.I.Lênin khẳng định: chủ nghĩa Mác dựa vào...chứ không phải dựa vào...để vạch ra đường lối chính trị của mình. | Hiện thực/ khả năng
QN=216 Chon quan niệm đúng về con người theo quan điểm toàn diện của chủ nghĩa duy vật lịch sử: | Thực thể tự nhiên và xã hội
QN=227 Chọn câu trả lời đúng nhất theo quan điểm của chủ nghĩa duy vật lịch sử | Có thể tạo ra năng suất lao động cao hơn
QN=54 Đâu là quan niệm của phép biện chứng duy vật về vai trò của các mối liên hệ đối với sự vận động và phát triển của các sự vật hiện tượng? | Các mối liên hệ có vai trò khác nhau tùy vào những điều kiện xác định
QN=11 Hai khái niệm triết học và thế giới quan... | Triết học không phải là toàn bộ thế giới quan mà chỉ là hạt nhân lý luận chung nhất của thế giới quan
QN=23 Sai lầm của các nhà triết học cổ đại trong quan niệm về vật chất? | Đồng nhất vật chất với một số dạng vật thể cụ thể, cảm tính
QN=81 Những sự vật, hiện tượng nếu có cùng nguyên nhân, trong những điều kiện giống nhauthif sẽ tạo nên kết quả như nhau. Điều này thể hiện tính chất gì trong mối liên hệ nhân quả? | Tính tất yếu
QN=327 Khi hàng hóa được bán đúng với giá trị thì: | Lợi nhuận bằng giá trị thặng dư
QN=57 Phép biện chứng duy vật bao gồm những nguyên lý, quy luật cơ bản nào? | 2 nguyên lý, 3 quy luật
QN=211 Chọn câu trả lời đúng nhất và đầy đủ từ góc độ thế giới quan, phương pháp luận nhận thức về xã hội: | Quan niệm siêu hình và duy tâm, tôn giáo
QN=267 Phương hướng cơ bản, lâu dài để tăng sản phẩm xã hội? | Tăng năng suất lao động
QN=97 " Thế giới những thực thể tinh thần tồn tại vĩnh viễn và bất biến là bản chất chân chính của mọi sự vật". Đây là quan niệm của ai? | Platôn
QN=356 Đia tô tư bản chủ nghĩa là: | Phần giá trị thặng dư ngoài lợi nhuận bình quân của nhà tư bản
QN=9 Phát kiến vĩ đại nhất của các Mác trên lĩnh vực nghiên cứu triêt học và kinh tế chính trị là | Sáng tạo ra chủ nghĩa duy vật lịch sử và học thuyết giá trị thặng dư
QN=266 Những chức năng nào của tiền tệ đòi hỏi phải có tiền vàng? | Chức năng thước đo giá trị; chức năng tích lũy, cất trữ và chức năng tiền tệ thế giới
QN=431 Trong các nhà kinh điển của chủ nghĩa Mác - Lênin, ai là người nghiên cứu chủ nghĩa tư bản độc quyền: | V.I.Lênin
QN=401 Các tổ chức độc quyền thi hành chính sách giá cả độc quyền để: | Chiếm đoạt giá trị thặng dư của những người khác
QN=285 Mâu thuẫn chung trong công thức chung của tư bản là: | T' > T
QN=294 Tỷ suất giá trị thặng dư ( m' ) là: | Tỷ lệ phần trăm giữa lượng tư bản khả biến và lượng giá trị thặng dư
QN=415 Chủ nghĩa tư bản độc quyền nhà nước là: | Một giai đoạn của phương thức sản xuất tư bản chủ nghĩa
QN=219 Chọn câu trả lời đúng theo định nghĩa của Ph.Ăngghen: | Biết chế tạo và sử dụng công cụ lao động
QN=143 Trong mối quan hệ giữa "lực lượng sản xất và quan hệ sản xuất", yếu tố nào là nội dung, yếu tố nào là hình thức? | Lực lượng sản xuất là nội dung - quan hệ sản xuất là hình thức
QN=332 Mục đích của cạnh tranh trong nội bộ ngành là gì? | Tìm kiếm lợi nhuận siêu ngạch
QN=21 Trong định nghĩ về vật chất của mình, V.I.Lênin cho thuộc tính chung nhất của vật chât là | Tồn tại khách quan bên ngoài ý thức không lệ thuộc vào cảm giác
QN=147 V.I.Lênin nói hai quan niệm cơ bản về sự phát triển: | Những người bạn dân là thế nào và họ đấu tranh chống những người dân chủ ra sao?
QN=464 Điền vào chỗ trống: dân tộc dùng để chỉ một cộng đồng người ổn định, bền vững hợp thành nhân dân một quốc gia...trong quá trình dựng nước và giữ nướ | Có lãnh thổ chung, có nền kinh tế thống nhất, quốc ngữ chung, có truyền thống văn hóa, truyền thống đấu tranh chung
QN=289 Giá trị sử dụng của hàng hóa sức lao động khi sử dụng sẽ tạo ra: | Giá trị mới lớn hơn giá trị bản thân nó
QN=324 Chu kỳ khủng hoàng kinh tế trong chủ nghĩa tư bản bao gồm: | Khủng hoảng - suy giảm - phục hồi - hưng thịnh
QN=392 Các cuộc xâm chiếm thuộc địa của các nước đế quốc diễn ra mạnh mẽ vào thời gian nào: | Cuối thế kỷ XIX - đầu thế kỷ XX
QN=43 Trong xã hội có giai cấp, triết học | Cũng có tính giai cấp
QN=288 Giá trị sức lao động được đo lường gián tiếp bằng: | Giá trị những tư liệu tiêu dùng để nuôi sống người lao động
QN=16 Phép biện chứng của triết học Hêghen là: | Phép biện chứng duy tâm khách quan
QN=2 Khái niệm: "những nguyên lý cơ bản của chủ nghĩa Mác - Lênin" là chỉ: | Những quan điểm cơ bản, nền tảng và có tính chất chân lý bền vững của chủ nghĩa Mác - Lênin
QN=132 Hình thức nhận thức nào không cần có sự tác động của vật vào cơ quan giác quan của con người: | Khái niệm
QN=229 Theo quan điểm duy vật lịch sử, ý kiến sau đây đúng hay sai? Vì sao? | Sai. Vì: quan hệ sản xuất phụ thuộc vào lực lượng sản xuất nhưng nó có tính độc lập tương đối
QN=310 Tuần hoàn tư bản công nghiệp là sự thống nhất của ba hình thái tuần hoàn: | Tư bản tiền tệ, tư bản sản xuất và tư bản hàng hóa
QN=175 Chọn câu trả lời đúng theo quan điểm duy vật lịch sử: | Người lao động
QN=262 Quy luật căn bản của sản xuất và lưu thông hàng hóa là quy luật nào? | Quy luật giá trị
QN=416 Chủ nghĩa tư bản độc quyền nhà nước là sự thống nhất của các quá trình: | Kết hợ sức mạnh của tổ chức độc quyền với sức mạnh của nhà nước trong cơ chế thống nhất và nhà nước phụ thuộc vào các tổ chức độc quyền
QN=106 Chất của sự vật được nào nên từ... | Thuộc tính cơ bản và không cơ bản
QN=456 Nội dung của cuộc cách mạng xã hội chủ nghĩa trên các lĩnh vực: | Kinh tế, chính trị - văn hóa tư tưởng
QN=148 Đâu là quan niệm của phép biện chứng duy vật về cơ sở các mối liên hệ | Sự liên hệ qua lại giữa các sự vật, hiện tượng có cơ sở ở tính thống nhất vật chất của thế giới
QN=365 Cấu tạo giá trị phản ánh: | Mối quan hệ tỷ lệ giữa giá trị tư bản bất biến và giá trị tư bản khả biến
QN=405 Trong giai đoạn phát triển của chủ nghĩa tư bản độc quyền, quy luật giá trị thặng dư biểu hiện thành: | Quy luật lợi nhuận độc quyền cao
QN=465 Dân chủ xã hội chủ nghĩa vừa mang tính...vừa mang tính...vừa mang tính... | Giai cấp...dân tộc...nhân loại
QN=177 Chọn câu trả lời đúng theo quan điểm của chủ nghĩa duy vật lịch sử: | Sở hữu về tư liệu sản xuất
QN=432 Sự hình thành các tổ chức độc quyền dựa trên cơ sở: | Tích tụ tập trung sản xuất và sự xuất hiện các xí nghiệp quy mô lớn
QN=76 Khi một sự vật, một hiện tượng mói được nảy sinh thì yếu tố nào sẽ xuất hiện đầu tiên: | Cái đơn nhất
QN=112 Mỗi sự vật trong điều kiện xác định: | Có một số thuộc tính xác định
QN=98 "Bản chất chỉ là tên gọi trống rỗng mà con người tưởng tượng ra, nó không tồn tại trên thực tế". Đây là quan niệm của trường phái triết học nào? | Duy tâm chủ quan
QN=308 Cấu tạo hữu cơ tư bản là: | Cấu tạo giá trị của tư bản, đồng thời phản ánh sự biến đổi của cấu tạo kỹ thuật
QN=354 Địa tô tư bản là: | Phần giá trị thặng dư ngoài lợi nhuận bình quân mà nhà tư bản kinh doanh nông nghiệp phải nộp cho chủ đất
QN=454 Nguyên nhân sâu xa của cuộc cách mạng xã hội chủ nghĩa là do: | Tính chất xã hội hóa của lực lượng sản xuất
QN=116 Khái niệm nào dùng để chỉ thời điểm mà tại đó sự thay đổi về lượng đã đủ làm thay đổi về chất của sự vật? | Điểm nút
QN=154 Biện chứng khách quan là gì? | Là biện chứng của các tồn tại vật chất
QN=433 Sự ra đời và phát triển của tư bản tài chính là kết quả phát triển của: | Quá trình độc quyền hóa trong công nghiệp và trong ngân hàng xoăn xuýt với nhau
QN=78 Nguyên nhân và kết quả cái nào có trước? | Nguyên nhân
QN=319 Tính chất chuyển giá trị của tư bản lưu động là: | Chuyển giá trị sử dụng toàn bộ vào trong sản phẩm mới sau quá trình sản xuất
QN=439 Sứ mệnh lịch sử của giai cấp công nhân vừa mang tính...vừa mang tính...? | Dân tộc...quốc tế
QN=364 Tích tụ tư bản là: | Quá trình tăng quy mô của tư bản cá biệt bằng cách tư bản hóa một phần giá trị thặng dư
QN=261 Tiền tệ có mấy chức năng? | Năm chức năng
QN=67 Có sự khác nhau nào giữa "khái niệm" và "phạm trù"? | "Phạm trù" phải là những "khái niệm" rộng nhất
QN=17 Chọn phương án đúng để điền vào chỗ trống: " điểm xuất phát ... là sự khẳng định những sự vật hiện tượng của tự nhiên đều bao hàm những mâu thuẫn vốn có của chúng" | Phép biện chứng
QN=305 Nguồn gốc chủ yếu của tích tụ tư bản là: | Giá trị thặng dư
QN=423 Các hình thức độc quyền phát triển từ thấp đến cao, từ lưu thông đến sản xuất và tái sản xuất. Hãy xác định trình tự phát triển của các hình thức độc quyền | Cácten - Xanh đi ca - Tơ rớt - Công xoóc xiom- Công gơ lô mê rát
QN=118 Chất và lượng: | Có mối quan hệ biện chứng với nhau
QN=471 Hệ thống các nước xã hội chủ nghĩa được hình thành khi nào? | Ngay sau chiến tranh thế giới thứ hai
QN=101 Phạm trù triết học dùng để chỉ những gì hiện có, hiện tồn tại thực sự, gọi là gì? | Hiện thực
QN=428 Cơ cấu kinh tế của chủ nghĩa tư bản độc quyền nhà nước là sự dung hợp: | Cơ chế độc quyền thị trường và độc quyền tư nhân
QN=355 Các hình thức cơ bản của địa tô tư bản chủ nghĩa | Địa tô chênh lệch; địa tô tuyệt đối
QN=35 Xác định nội dung cơ bản trong định nghĩa của V.I.Lênin về vật chất: | Thực tại khách quan - tồn tại độc lập với ý thức và khi tác động đến giác quan con người thì có thể sinh ra cảm giác
QN=414 Sự ra đời của chủ nghĩa tư bản độc quyền nhà nước nhằm: | Phục vụ lợi ích của tổ chức độc quyền tư nhân
QN=114 Khái niệm nào dùng để chỉ khoảng giới hạn trong đó sự thay đổi về lượng chưa dẫn đến sự thay đổi căn bản chất của sự vật ấy? | Độ
QN=425 Xuất khẩu tư bản là: | Đầu tư tư bản ra nước ngoài nhằm bóc lột giá trị tiêu dùng của nước nhập khẩu
QN=126 Phủ định biện chứng có đặc trưng cơ bản nào? | Tính khách quan và tính kế thừa
QN=183 Chọn câu trả lời đúng theo quan điểm của chủ nghĩa duy vật lịch sử: | Lực lượng sản xuất là yếu tố thường xuyên biến đổi, phát triển
QN=215 Chọn câu trả lời đúng, đầy đủ nhất theo quan niệm duy vật lịch sử: | Một trong những phương thức, động lực phát triển xã hội
QN=406 Nguồn gốc hình thành tỷ suất lợi nhuận bình quân: | Do cạnh tranh giữa các ngành
QN=176 Chọn câu trả lời đúng nhất theo phương thức định nghĩa khái niệm: | Mối quan hệ kinh tế trong quá trình sản xuất và tái sản xuất của xã hội
QN=231 Chọn câu trả lời đúng và đầy đủ: | Tính khách quan, tính mục đích, tính xã hội, tính lịch sử và tính sáng tạo
QN=311 Ba giai đoạn vận động của tuần hoàn tư bản công nghiệp là: | Lưu thông - sản xuất - lưu thông
QN=92 Không có ...tồn tại thuần túy không chứa đựng..., ngược lại cũng không có...lại không tồn tại trong một...xác định | Hình thức/nội dung; Nội dung/ hình thức
QN=64 Các phạm trù được hình thành thông qua quá trình...những thuộc tính, những mối liên hệ vốn có bên trong của bản thân sự vật. | Khái quát hóa và trừu tượng hóa
QN=245 Chọn câu trả lời đúng theo quan điểm duy vật lịch sử: | Kỹ thuật và kinh tế
QN=158 "Phạm trù chỉ là những từ trống rỗng, do con người tưởng tượng ra, đầy tính chủ quan và không biểu hiện hiện thực". Đây là quan niệm của trường phái nào? | Trường phái triết học duy danh
QN=484 Trong xã hội chủ nghĩa cần phải... | Đảm bảo tôn trọng quyền tự do tín ngưỡng và không tín ngưỡng của nhân dân
QN=260 Khi nào tiền tệ ra đời? | Khi vật ngang giá chung được cố định ở vàng, bạc
QN=408 Chủ nghĩa tư bản độc quyền nhà nước hình thành rõ nét từ: | Giữa thế kỷ XX
QN=68 Hình thức cơ bản, đầu tiên của mọi quá trình tư duy là? | Khái niệm
QN=120 Trong phép biện chứng, khái niệm nào dùng để chỉ tác động qua lại theo xu hướng bài trừ và phủ định lẫn nhau giữa các mặt đó? | Đấu tranh của các mặt đối lập
QN=223 Chọn câu trả lời đúng theo văn kiện của Đảng: | Lấy dân làm gốc
QN=334 Mục đích của cạnh tranh giữa các ngành là: | Nhằm tìm kiếm ngành đầu tư có lợi nhuận cao
QN=448 Giai cấp công nhân ở các nước tư bản chủ nghĩa: | Bị bóc lột nặng nề hơn trước đây
QN=287 Hàng hóa sức lao động mang yếu tố: | Tinh thần và lịch sử
QN=375 Tư bản cố định là bộ phận tư bản khi tham gia quá trình sản xuất: | Giá trị trao đổi của nó được chuyển dần vào sản phẩm mới
QN=437 Trong giai đoạn chủ nghĩa tư bản độc quyền, quy luật giá trị biểu hiện thành: | Quy luật giá cả độc quyền
QN=442 Mục tiêu của cuộc cách mạng xã hội chủ nghĩa là? | Giai cấp công nhân giành lấy chính quyền, tập hợp quần chúng nhân dân xây dựng thành công xã hôi mới - xã hội chủ nghĩa về mọi mặt
QN=65 Phạm trù là những...phản ánh những mặt, những thuộc tính, những mối liên hệ chung, cơ bản nhất của các sự vật và hiện tượng thuộc một lĩnh vực nhất định. | Khái niệm rộng nhất
QN=394 Cạnh tranh giữa các tổ chức độc quyền và xí nghiệp ngoài độc quyền nhằm: | Thôn tính các xí nghiệp ngoài độc quyền và chèn ép chi phối các xí nghiệp ngoài độc quyền
QN=403 Trong giai đoạn chủ nghĩa tư bản tự do cạnh tranh, quy luật giá trị biểu hiện thành: | Quy luật giá cả sản xuất
QN=348 Tỷ suất lợi tức (z') là: | tỷ lệ phần trăm giữa lợi tức và tổng số tư bản cho vay
QN=36 Các trình độ phát triển của thế giới quan: | Thế giới quan huyền thoại - thế giới quan tôn giáo - thế giới quan triết học
QN=100 ... tương đối ổn định, biến đổi chậm. Ngược lại...không ổn định mà luôn biến đổi. | Bản chất/ hiện tượng
QN=315 Tốc độ chu chuyển tư bản được đo bằng: | Số vòng chu chuyển của tư bản trong một năm
QN=370 Tư bản khả biến ( V) là: | Bộ phận trực tiếp tạo ra giá trị thặng dư
QN=83 Cái do nguyên nhân cơ bản bên trong của kết cấu vật chất quyết định và trong những điều kiện nhất định nó phải sảy ra như thể chứ không thể khác được gọi là? | Tất nhiên
QN=481 GDP Việt Nam năm 2007 so với năm 1990 gấp bao nhiêu lần: | 10,2
QN=352 Tư bản giả là tư bản tồn tại dưới hình thức: | Chứng khoán có giá
QN=407 Bản chất lợi nhuận độc quyền hình thành là do: | Do địa vị độc quyền đem lại
QN=380 Những nguyên nhân nào sau đây dẫn đến sự ra đời của chủ nghĩa tư bản độc quyền: | Sự tập trung sản xuất dưới tác độc của cách mạng khoa học công nghệ, cạnh tranh, khủng hoảng kinh tế và tín dụng
QN=236 Chọn câu trả lời đúng nhất theo khái niệm cách mạng xã hội của chủ nghĩa duy vật lịch sử: | Sự thay thế hình thái kinh tế - xã hội này bằng hình thái kinh tế - xã hội khác cao hơn
QN=160 Ph.Ăngghen cho rằng: đối với ai phủ nhận...thì mọi quy luật tự nhiên đều là giả thuyết. | Tính nhân quả
QN=273 Nội dung công cuộc đại phân công lao động xã hội lần thứ hai là: | Thủ công nghiệp tách khỏi nông nghiệp
QN=128 Tiêu chuẩn của chân lý là gì? | Là thực tiễn
QN=396 Kết quả của cạnh tranh nội bộ ngành: | Hình thành giá trị xã hội
QN=443 Giai cấp công nhân hình thành và phát triển mạnh trong xã hội nào: | Xã hội tư bản chủ nghĩa
QN=241 Điền thêm từ đề hoàn thiện nhận định sau đây của V.I. Lênin: | Các hình thái kinh tế - xã hội
QN=32 Theo quan điểm của triết học Mác - Lênin thuộc tính phản ánh là thuộc tính? | Phổ biến ở mọi tổ chức vật chất
QN=220 Chon câu trả lời đúng theo quan điểm chủ nghĩa duy vật lịch sử: | Người lao động
QN=178 Chọn câu trả lời đúng theo quan điểm của chủ nghĩa duy vật lịch sử: | Quan hệ sản xuất phụ thuộc vào trình độ phát triển của lực lượng sản xuất
QN=214 Chọn câu trả lời đúng theo quan điểm của chủ nghĩa duy vật lịch sử: | Một trong những phương thức, động lực của sự tiến bộ, phát triển xã hội trong điều kiện xã hội có sự phân hóa thành đối kháng giai cấp
QN=455 Động lực của cuộc cách mạng xã hội chủ nghĩa: | Giai cấp công nhân, giai cấp nông dân, những người lao động khác
QN=264 Mâu thuẫn cơ bản của sản xuất hàng hóa là gì? | Là mâu thuẫn giữa lao động tư nhân và lao động xã hội
QN=71 Cái ...chỉ tồn tại trong mối liên hệ với cái... | Riêng/Chung
QN=150 Đâu là biện chứng với tư cách là khoa học trong số các quan niệm, các hệ thống lý luận dưới đây? | Phép biện chứng duy vật
QN=15 Phép biện chứng cổ đại là: | Biện chứng ngây thơ, chất phác
QN=47 Xác định mệnh đề sai? | Vật thể không phải là vật chất
QN=283 Điều kiện để tiền biến thành tư bản là: | Phải tích lũy được một lượng tiền lớn; tiền phải được đưa vào kinh doanh tư bản với mục đích thu giá trị thặng dư
QN=255 Thế nào là lao động cụ thể? | Là những lao động ngành nghề cụ thể, có mục đích riêng, có đối tượng riêng, thao tác riêng và kết quả riêng
QN=313 Thời gian chu chuyển của tư bản bằng: | Thời gian dự trữ sản xuất + thời gian lưu thông
QN=238 Chọn câu trả lời đúng theo nghiên cứu tư liệu lịch sử: | Mạnh Tử
QN=250 Theo quan điểm duy vật lịch sử, ý kiến sau đây đúng hay sai? Tại sao? | Sai. Vì: nếu mâu thuẫn giai cấp có thể giải quyết được thì không cần đến sự ra đời của nhà nước; sự ra đời của nó chỉ chứng tỏ rằng mâu thuẫn đã phát triển tới mức không thể giải quyết được nên cần đến sự ra đời của nhà nước
QN=483 Hiện nay ở Mỹ La tinh có bao nhiêu nước cánh tả nắm quyền? | 11
QN=257 Lao động trừu tượng tạo ra cái gì? | Giá trị hàng hóa
QN=12 Nội dung mặt thứ nhất của vấn đề cơ bản của triết học là: | Bản chất của thế giới là vật chất hay ý thức
QN=134 Điều khẳng định nào sau đây đúng về mối quan hệ giữa lý luận và kinh nghiệm: | Lý luận được hình thành từ kinh nghiệm trên cở sở kinh nghiệm
QN=249 Chọn câu trả lời sai: | Thể hiện tính liên tục trong sự phát triển của xã hội loài người
QN=372 Giá trị thặng dư tuyệt đối là giá trị thăng dư có được do: | Kéo dài ngày lao động hoặc tăng cường độ lao động
QN=56 Có mấy hình thức cơ bản của phép biện chứng? | 3
QN=292 Tư bản bất biến ( C ) | Là giá trị tư liệu sản xuất, giá trị của nó không thay đổi sau quá trình sản xuất
QN=193 Chọn câu trả lời đúng nhất theo quan điểm duy vật lịch sử: | Có thể tự do lựa chọn những quan hệ sản xuất nhất định trong phạm vi tính tất yếu của trình độ phát triển của lực lượng sản xuất hiện thực
QN=400 Do có địa vị độc quyền, các tổ chức độc quyền áp đặt: | Giá cả độc quyền thấp khi mua, cao khi bán
QN=156 Quan niệm nào cho rằng cơ sở của mối liên hệ giữa các sự vật, hiện tượng là ở "ý niệm tuyệt đối"? | Chủ nghĩa duy tâm khách quan
QN=200 Chọn câu trả lời đúng theo quan điểm của chủ nghĩa duy vật lịch sử: | Chúng tồn tại trong mối quan hệ biện chứng với nhau, trong đó tồn tại xã hội quyết định ý thức xã hội
QN= 42 Hệ thống triết học nào quan niệm sự vật là phức hợp của cảm giác | Chủ nghĩa duy tâm chủ quan
QN=244 Chọn câu trả lời đúng: | Trình độ phát triển của nền sản xuất xã hội
QN=366 Tuần hoàn tư bản công nghiệp là: | Sự vận động của tư bản trải quan ba giai đoạn, lần lượt mang lấy ba hình thái để rồi quay trở lại hình thái ban đầu với giá trị được bảo tồn và tăng lên
QN=34 Nếu không thừa nhận vật chất tự thân vận động thì nhất định dẫn tới quan điểm duy tâm về nguồn gốc của vận động của vật chất, vì: | Sẽ phải thừa nhận nguyên nguyên cuối cùng của mọi vận động của vật chất là từ ý thức
QN=149 Tại sao Mác nói phép biện chứng của G.W.Ph. Hêghen là phép biện chứng lộn đầu xuống đất? | Thừa nhận tự nhiên, xã hội là sản phẩm của quá trình phát triển của tinh thần, ý niệm
QN=385 Xuất khẩu tư bản là đặc điểm của: | Chủ nghĩa tư bản giai đoạn độc quyền
QN=8 Câu trả lời sau đây, câu nào diễn đạt chưa chuẩn xác | Chủ nghĩa Mác là thế giới quan và phương pháp luận chung của mọi nhận thức và thực tiễn
QN=459 Điều kiện nào quyết định cho sự xuất hiện hình thái kinh tế xã hội cộng sản chủ nghĩa: | sự phát triển mạnh của lực lượng sản xuất dưới chủ nghĩa tư bản
QN=328 Về lợi nhuận (p) có thể: | Bằng hoặc cao hơn hoặc thấp hơn lượng giá trị thặng dư
QN=388 Mục đích của xuất khẩu tư bản nhà nước: | Kinh tế - chính trị - quân sự
QN=390 Về kinh tế, mục đích của xuất khẩu tư bản nhà nước là: | Tạo môi trường thuận lợi cho đầu tư, kinh doanh của tư bản tư nhân
QN=271 Cơ sở chung của quan hệ trao đổi giữa các hàng hóa là gì? | Là hao phí lao động kết tinh trong hàng hóa
QN=210 Chọn câu trả lời đúng theo quan niệm duy vật lịch sử: Nhân tố quyết định xu hướng phát triển của các hình thái kinh tế - xã hội là | Quy luật khách quan
QN=402 Trong toàn bộ nền kinh tế: | Tổng giá cả = tổng giá trị
QN=399 Do có địa vị độc quyền, các tổ chức độc quyền áp đặt: | Giá cả độc quyền
QN=40 Khái niệm trung tâm mà V.I. Lênin sử dụng để định nghĩa về vật chất là? | Thực tại khách quan
QN=61 Nguồn gốc, động lực cơ bản của sự vận động phát triển là do: | Sự thống nhất và đấu tranh của các mặt đối lập
QN=276 Giá trị hàng hóa được tạo ra từ đâu? | Từ sản xuất
QN=350 Giá trị cổ phiếu khi phát hành lần đầu gọi là: | Mệnh giá
QN=41 Theo Ph. Ăngghen, vấn đề cơ bản lớn của triết học là vấn đề về: | Mối quan hệ giữa tư duy và tồn tại
QN=248 Chọn câu trả lời đúng theo quan điểm của chủ nghĩa duy vật lịch sử: | Phản ánh trình độ con người chinh phục giới tự nhiên
QN=404 Trong giai đoạn phát triển của chủ nghĩa tư bản tự do cạnh tranh, quy luật giá trị thặng dư biểu hiện thành: | Quy luật tỷ suất lợi nhuận bình quân
QN=270 Nội dung cuộc đại phân công lao động xã hội lần thứ nhất là: | Trồng trọt tách khỏi chăn nuôi
QN=256 Thế nào là lao động trừu tượng? | Là lao động sản xuất hàng hóa nếu coi đó là sự hao phí sức lao động nói chung của con người
QN=391 Đặc điểm của xuất khẩu tư bản tư nhân thường hướng vào ngành: | Ngành có tốc độ chu chuyển vốn nhanh
QN=144 Trong tác phẩm "biện chứng của tự nhiên", Ph.Ăngghen viết: toàn bộ giới tự nhiên hữu cơ là bằng chứng liên tục nói lên rằng...là đồng nhất và không thể tách rời đượ | Nội dung và hình thức
QN=272 Ai là người đầu tiên phát minh ra tính hai mặt của lao động sản xuất hàng hóa: lao động cụ thể và lao động trừu tượng? | Mác
QN=298 Giá trị thặng dư siêu ngạch còn được gọi là: | Hình thức biến tướng của giá trị thặng dư tương đối
QN=278 Phương thức sản xuất tư bản chủ nghĩa được thiết lập và phát triển qua các giai đoạn nào sau đây: | Chủ nghĩa tư bản tự do cạnh tranh và chủ nghĩa tư bản độc quyền
QN=63 Cơ sở trực tiếp và chủ yếu nhất để hình thành khái niệm là gì? | Thực tiễn
QN=124 Hoàn thiện luận điểm sau: | Thực chất
QN=209 Chon câu trả lời đúng và đầy đủ nhất theo quan điểm duy vật lịch sử: | Quy những quan hệ xã hội vào những quan hệ sản xuất và quy những quan hệ sản xuất vào trình độ phát triển của lực lượng sản xuất
QN=246 Chọn câu trả lời đúng | Con người biết lao động sản xuất ra những tư liệu sinh hoạt của mình
QN=474 Vào cuối năm 1980, số người có trình độ trung học và đại học ở Liên xô là bao nhiêu? | 164 triệu người
QN=409 Sự phát triển của trình độ xã hội hóa lực lượng sản xuất đòi hỏi: | Nhà nước can thiệp vào kinh tế ở cấp độ vi mô
QN=199 Chọn phương án đúng theo quan điểm duy tâm về lịch sử: | Suy đến cùng, ý thức xã hội quyết định tồn tại xã hội
QN=429 Hình thức can thiệp bằng bạo lực và phi kinh tế của: | Nhà nước chiếm hữu nô lê và nhà nước phong kiến
QN=452 Đảng Cộng sản đại biểu cho lợi ích của giai cấp nào? | Giai cấp công nhân và nhân dân lao động
QN=91 Trong các cụm từ dưới đây, cụm từ nào được xem là "hình thức" trong cặp phạm trù "nội dung - hình thức" mà phép biện chứng duy vật nghiên cứu: " truyện kiều là..." | Tác phẩm thơ lục bát
QN=233 Chọn câu trả lời đúng theo quan điểm của chủ nghĩa duy vật lịch sử: | Quan hệ sản xuất được thay đổi thông qua những cuộc cải cách và các cuộc cách mạng xã hội
QN=75 Giả sử khái niệm Việt Nam là một "cái riêng" thì yếu tố nào sau đây là cái đơn nhất? | Hà Nội
QN=265 Cơ sở tồn tại của quy luật giá trị? | Nền kinh tế hàng hóa
QN=470 Liên xô được thành lập khi nào? | 1923
QN=161 Cái ngẫu nhiên là cái... | Biểu hiện của quy luật
QN=389 Về kinh tế, xuất khẩu tư bản nhà nước thường hướng vào: | Ngành thuộc kết cấu hạ tầng
QN=115 Khái niệm nào dùng để chỉ sự chuyển hóa về chất do sự biến đổi trước đó về lượng tới giới hạn điểm nút? | Bước nhảy
QN=13 Hệ thống triết học nào coi cảm giác là hình ảnh chủ quan của thế giới khách quan? | Chủ nghĩa duy vật biện chứng
QN=73 Cái ...là cái bộ phận, nhưng sâu sắc hơn cái... | Chung/Riêng
QN=234 Chọn câu trả lời đúng nhất theo quan điểm duy vật lịch sử: | Tuân theo quy luật khách quan nhưng đồng thời chịu sự tác động của các nhân tố khác, trong đó có nhân tố thuộc về hoạt động của con người
QN=194 Trả lời theo quan điểm duy vật lịch sử, ý kiến sau đây đúng hay sai? Vì sao? | "nhà nước là hiện tượng vĩnh viễn của lịch sử"
QN=325 Về lượng, chi phí sản xuất tư bản chủ nghĩa (k): | Nhỏ hơn giá trị hàng hóa
QN=427 Trong giai đoạn chủ nghĩa tư bản độc quyền: | Quy luật giá trị vẫn hoạt động
QN=70 Khái niệm đơn nhất dùng để chỉ cái... | Tồn tại ở một sự vật, hiện tượng trong một quan hệ xác định
QN=191 Chọn câu trả lời đúng theo quan điểm của chủ nghĩa duy vật lịch sử: | Chúng có mối quan hệ biện chứng với nhau, trong đó cơ sở hạ tầng quyết định kiến trúc thượng tầng
QN=336 Lợi nhuận bình quân là: | Lợi nhuận bằng nhau của những lượng vốn tư bản đầu tư bằng nhau khi đầu tư vào các ngành khác nhau
QN=353 Thị trường chứng khoán là: | Thị trường mua bán các loại chứng khoán chưa niêm yết trên sàn
QN=224 Chọn câu trả lời đúng theo nghiên cứu lịch sử: | Hồ Chí Minh và Đảng Cộng sản Việt Nam
QN=163 Theo Mác: vấn đề tìm hiểu xem tư duy của con người có thể đạt được chân lý khách quan hay không hoàn toàn không phải là vấn đề lý luận mà là vấn đề... | Thực tiễn
QN=361 Công thức chung của tư bản phản ánh: | Mục đích của sản xuất, lưu thông tư bản là giá trị và giá trị thặng dư
QN=331 Cạnh tranh trong nội bộ ngành là: | Sự cạnh tranh giữa các nhà sản xuất trong cùng một ngành, sản xuất ra cùng một loại hàng hóa
QN=205 Chọn câu trả lời đúng nhất theo quan điểm duy vật lịch sử: | Lực lượng sản xuất, quan hệ sản xuất hợp thành cơ cấu kinh tế của xã hội và kiến trúc thượng tầng
QN=89 Mác cho rằng: nếu như...không có tác dụng gì cả, thì lịch sử sẽ có một tính chất rất thần bí. | Ngẫu nhiên
QN=303 Nguồn gốc chủ yếu của tích lũy tư bản là: | Giá trị thặng dư
QN=105 Thế nào là mâu thuẫn biện chứng? | Sự thống nhất của các mặt đối lập
QN=180 Chọn câu trả lời đúng theo quan điểm của chủ nghĩa duy vật lịch sử: | Quan hệ sản xuất phụ thuộc vào trình độ phát triển của lực lượng sản xuất
QN=453 Đảng cộng sản tổ chức sinh hoạt theo nguyên tắc: | Tập trung dân chủ + đấu tranh phê và tự phê + tập thể lãnh đạo, cá nhân phụ trách
QN=411 Chủ nghĩa tư bản độc quyền hình thành và phát triển làm cho: | Mâu thuẫn giữa giai cấp vô sản và tư sản ngày càng sâu sắc
QN=7 Chủ nghĩa Mác - Lênin là học thuyết khoa học: | Không ngừng phát triển trên cơ sở tổng kết những thành tựu mới của sự phát triển các khoa học và thực tiễn
QN=472 Khi bắt tay vào xây dựng xã hội chủ nghĩa, thu nhập quốc dân tính theo dầu người của Liên Xô bằng bao nhiêu của Mỹ | 1/11
QN=59 Quan niệm nào cho rằng cơ sở của mối liên hệ giữa các sự vật, hiện tượng là ở tính thống nhất vật chất của thế giới? | Phép biện chứng duy vật
QN=381 V.I. Lênin đã phân tích chủ nghĩa tư bản độc quyền bằng các đặc điểm kinh tế cơ bản nào sau đây: | Tập trung sản xuất và các tổ chức độc quyền, tư bản tài chính và bọn đầu sỏ tài chính; xuất khẩu tư bản; phân chia thế giới về kinh tế giữa các tổ chức độc quyền; sự phân chia thế giới về lãnh thổ giữa các cường quốc đế quốc
QN=441 nhận đinh: Cách mạng vô sản phải là bài đồng ca của hai giai cấp công nhân và nông dân, đặc biệt ở những quốc gia nông dân, nếu không có được bài đồng ca đó, thì bài đơn ca của giai cấp công nhân sẽ trở thành bài ai điếu... là của ai? | Mác
QN=26 Thuộc tính cơ bản nhất của vật chất, nhờ đó phân biệt vật chất với ý thức đã được V.I.Lênin xác định trong định nghĩa vật chất là thuộc tính: | Tồn tại khách quan
QN=373 Hai hình thức của tiền công cơ bản: | Tiền công theo giờ và tiền công theo sản phẩm
QN=52 Biện chứng tự phát là gì? | Là những yếu tố biện chứng con người đạt được trong quá trình tìm hiểu thế giới nhưng chưa có hệ thống
QN=232 Chọn câu trả lời đúng: | Phương thức sản xuất ra của cải vật chất
QN=343 Tư bản cho vay là: | Tư bản tiền tệ mà người chủ của nó nhường cho người khác sử dụng trong một thời gian nhất định để thu về lợi tức
QN=60 Quan niệm nào khẳng định giữa các sự vật, hiện tượng của thế giới khách quan luôn tồn tại trong tính quy định và tương tác, làm biến đổi lẫn nhau? | Quan niệm biện chứng của chủ nghĩa Mác - Lênin
QN=174 Chọn câu trả lời đúng: | Tư liệu sản xuất và người lao động
QN=77 Phạm trù nhằm chỉ những biến đổi xuất hiện do tác động lẫn nhau giữa các mặt trong một sự vật hoặc giữa các sự vật với nhau gây ra, gọi là gì? | Kết quả
QN= 242 Điền thêm từ để hoàn thiện nhận định sau đây và xác định đó là nhận định của ai? | Sản xuất/ Ph. Ăngghen
QN=393 Mối quan hệ giữa cạnh tranh và độc quyền được thể hiện: | Độc quyền sinh ra từ cạnh tranh, nó đội lập với cạnh tranh nhưng không thủ tiêu cạnh tranh và làm cạnh tranh đa dạng và gay gắt hơn
QN=162 ...là tổng hợp những mặt, những yếu tố trong quá trình tạo nên sự vật | Nội dung
QN=482 Cuộc khủng hoảng chủ nghĩa xã hội lần đầu tiên diễn ra vào năm nào? | Năm 1876
QN=164 Có những sự vật, hiện tương sảy ra... | Có nguyên nhân nhưng chưa nhận thức được
QN=138 Trong quá trình nhận thức và hoạt động thực tiễn, chúng ta cần... | Cơ bản là phải căn cứ vào cái tất nhiên nhưng đồng thời phải tính tới cái ngẫu nhiên
QN=127 Đâu là quan điểm của chủ nghĩa duy vật biện chứng về mục đích của nhận thức? | Nhận thức nhằm phục vụ nhu cầu của thực tiễn
QN=146 Phương pháp siêu hình thống trị triết học vào thời kỳ nào? | Thế kỷ XVII - XVIII
QN=376 Chi phí sản xuất tư bản chủ nghĩa ( k): | Bao gồm c và v (k= c + v)
QN=206 Chọn câu trả lời đúng: | Quan hệ sản xuất
QN=369 Giá trị sử dụng của hàng hóa sức lao động được coi là: | Chìa khóa để giải quyết mâu thuẫn công thức chung của tư bản
QN=469 Chính sách cộng sản thời chiến ở Nga được thực hiện trong thời gian nào? | Từ năm 1918 đến năm 1921
QN=347 Giới hạn của tỷ suất lợi tức (z') là: | o < z' < p'
QN=39 Khi khoa học tự nhiên phát hiện ra tia X, ra hiện tượng phóng xạ, ra điện tử là một thành phần cấu tạo nên nguyên tử. Theo V.I. Lênin điều đó chứng tỏ gì? | Giới hạn hiểu biết của chúng ta về vật chất mất đi
QN=299 Bản chất của tiền công trong chủ nghĩa tư bản là: | Giá cả của hàng hóa sức lao động
QN=435 Đến cuối thế kỷ XIX đầu thế kỷ XX, các nước đế quốc có thuộc địa nhiều nhất sắp xếp theo thứ tự sau: | Anh - Nga - Pháp - Mỹ
QN=110 Bất kỳ sự phủ định nào cũng tạo ra sự ... của sự vật | Biến đổi
QN=181 Chọn câu trả lời đúng: | Sự vận động của mâu thuẫn giữa lực lượng sản xuất và quan hệ sản xuất
QN=463 Điền vào chỗ trống: con người xã hội chủ nghĩa là con người có tinh thần và năng lực xây dựng thành công chủ nghĩa xã hội; là con người lao động mới; là con người có tinh thần...; là con người có lối sống tình nghĩa, có tính cộng đồng cao? | Yêu chân chính và tinh thần quốc tế trong sáng
QN=321 Khi nghiên cứu tái sản xuất tư bản xã hội, C.Mác chia nền kinh tế ra thành hai khu vực: | KV I: sản xuất tư liệu sản xuất; KV II: sản xuất tư liệu tiêu dùng
QN=338 Khi hình thành lợi nhuận bình quân giá trị hàng hóa sẽ chuyển thành: | Giá cả sản xuất
QN=208 Chọn câu trả lời đúng theo quan điểm duy vật lịch sử: | Quy luật khách quan của xã hội
QN=145 Ném một đồng xu có hai mặt đen và trắng lên trời, đồng xu rơi xuống đất và ngửa mặt đen lên trên. Đấy là tất nhiên hay ngẫu nhiên? | Vừa tất nhiên vừa ngẫu nhiên
QN=212 Chon câu trả lời đúng theo định nghĩa của V.I.Lênin về giai cấp: | Quyền lực sở hữu tư liệu sản xuất
QN=363 Tiền công thực tế: | Biểu hiện ở khối lượng hàng tiêu dùng và dịch vụ mà người công nhân mua được bằng tiền lương danh nghĩa
QN=382 Sự ra đời và phát triển của độc quyền ngân hàng thông qua quá trình nào sau đây: | Còn lại các ngân hàng lớn có xu hướng liên minh
QN=196 Chọn câu trả lời đúng theo quan điểm duy vật lịch sử: | Mâu thuẫn gay gắt giữa lực lượng sản xuất và quan hệ sản xuất
QN=19 Xác định quan điểm duy vật biện chứng trong số những luận điểm sau: | Thế giới thống nhất ở tính vật chất
QN=169 Chọn câu trả lời đúng theo quan điểm duy vật lịch sử: | Nền tảng vật chất của xã hội
QN=55 Yêu cầu của quan niệm toàn diện phải xem xét tất cả các mối liên hệ của sự vât. Yêu cầu này không thực hiện được nhưng vẫn phải đề ra để làm gì? | Đề phòng cho chúng ta khỏi phạm sai lầm và sự cứng nhắc
QN=426 Các tổ chức độc quyền của các quốc gia cạnh tranh với nhau trên thị trường quốc tế sẽ dẫn đến: | Thỏa hiệp với nhau để hình thành các tổ chức độc quyền quốc tế
QN=412 Sự ra đời của chủ nghĩa tư bản độc quyền nhà nước đã: | Mâu thuẫn giữa giai cấp vô sản và tư sản ngày càng sâu sắc
QN=384 Xuất khẩu hàng hóa là một trong những đặc điểm của: | Giai đoạn chủ nghĩa tư bản tự do cạnh tranh
QN=446 Quy luật kinh tế cho sự ra đời của Đảng Cộng sản ở tất cả các nước là sự kết hợp...? | Chủ nghĩa Mác - Lênin với phong trào công nhân
QN=195 Chọn câu trả lời đúng nhất theo quan điểm của chủ nghĩa duy vật lịch sử | Có thể tác động tích cực hoặc tiêu cực, tùy theo từng điều kiện nhất định
QN=466 Điền vào chỗ trống: văn hóa là toàn bộ những giá trị....do con người sáng tạo ra bằng lao động và hoạt động thực tiễn trong quá trình lịch sử của mình; biểu hiện trình độ phát triển xã hội trong từng thời kỳ lịch sử nhất định | Vật chất và tinh thần
QN=230 Điền thêm từ đề hoàn thiện nhận định sau đây của V.I. Lênin: | Các hình thái kinh tế - xã hội
QN=461 Nội dung nào quan trọng nhất trong xây dựng khối liên minh giữa giai cấp công nhân và giai cấp nông dân và các tầng lớp nhân dân lao động khác? | Liên minh về kinh tế
QN=121 Cái gì được xác định là nguồn gốc và động lực của sự phát triển? | Mâu thuẫn biện chứng
QN=312 Chu chuyển tư bản là: | Sự tuần hoàn của tư bản nếu xét nó là một quá trình định kỳ đổi mới, lặp đi lặp lại không ngừng
QN=418 Ngày nay, sự can thiệp của nhà nước tư sản thể hiện: | Sản xuất - phân phối - trao đổi - tiêu dùng
QN=109 Phủ định biện chứng là sự phủ định: | Tạo ra điều kiện, tiền đề cho sự phát triển
QN=99 V.I.Lênin cho rằng: nhận thức đi từ...đến..., từ bản chất ít sâu sắc đến bản chất sâu sắc hơn. | Hiện tượng/ bản chất
QN=53 Theo quan niệm của chủ nghĩa duy vật biện chứng giữa biện chứng chủ quan và biện chứng khách quan quan hệ thế nào với nhau? | Biện chứng chủ quan phản ánh biện chứng khách quan
QN=198 Chọn câu trả lời đúng: | Phương thức sản xuất ra của cải vật chất
QN=320 Tư bản lưu động là bộ phận tư bản khi tham gia quá trình sản xuất: | Giá trị của nó được chuyển ngay một lần vào sản phẩm mới, bao gồm: nguyên nhiên vật liệu và tiền công lao động
QN=235 Chọn câu trả lời đúng theo tinh thần khoa học: | Xác lập phương pháp luận khoa học chung nhất để giải thích các hiện tượng xã hội
QN=307 Nguồn gốc của tập trung tư bản là: | Tư bản cá biệt của các nước
QN=213 Chon câu trả lời đúng nhấ theo định nghĩa của V.I.Lênin về giai cấp: | Địa vị của họ trong một hệ thống sản xuất xã hội nhất định trong lịch sử
QN=45 "Tất cả cái gì đang vận động, đều vận động nhờ một cái khác nào đó" | Triết học duy vật
QN=395 Kết quả cạnh tranh giữa các tổ chức độc quyền trong cùng một ngành: | Một sự thỏa hiệp được hình thành hoặc một bên phá sản
QN=359 Địa tô tuyệt đối là địa tô mà: | Nhà tư bản đi thuê đất phải trả cho chủ đất, dù thuê mướn bất kỳ loại ruộng nào
QN=18 Triết học bao gồm những quan điểm chung nhất, những sự lý giải có luận chứng cho các câu hỏi chung của con người, nên triết học bao gồm toàn bộ tri thức của nhân loại | Triết học cổ đại
QN=25 Trung tâm định nghĩa vật chất của V.I. Lênin là cụm từ nào | Thực tại khách quan
QN=192 Chọn câu trả lời sai: | Tiêu biểu cho bộ mặt xã hội ở mỗi giai đoạn phát triển
QN=189 Chọn câu trả lời đúng theo quan điểm của chủ nghĩa duy vật lịch sử: | Tổ chức quyền lực mang bản chất của giai cấp sở hữu tư liệu sản xuất chủ yếu của xã hội
QN=44 Nhận định sau thuộc lập trường triết học nào? | Chủ nghĩa duy vật tầm thường
QN=291 Ngày lao động của công nhân gồm hai phần: | Thời gian lao động cần thiết và thời gian lao động thặng dư
QN=27 Nguồn gốc xã hội trực tiếp và quan trọng nhất quyết định sự ra đời và phát triển của ý thức là: | Thực tiễn
QN=137 Theo V.I.Lênin: quan điểm về đời sống, về thực tiễn phải là...của lý luận nhận thức: | Quan điểm thứ nhất và cơ bản
QN=349 công ty cổ phần là: | một doanh nghiệp được hình thành do sự góp vốn của nhiềungười thông qua phát hành cổ phiếu
QN=344 Nguồn gốc của lợi tức (z) là: | Một phần giá trị thặng dư do công nhân tạo ra trong sản xuất
QN=337 Tỷ suất lợi nhuận bình quân là: | Tỷ suất lợi nhuận trung bình giữa các ngành
QN=475 Diện tích và dân số các nước thuộc địa và nửa thuộc địa vào năm 1919 là bao nhiêu: | 72% diện tích và 70% dân số
QN=424 Chế độ tham dự của tư bản tài chính được thiết lập thông qua: | Số cố phiếu khống chế để nắm công ty mẹ, công ty con...
QN=371 Quy luật kinh tế cơ bản của chủ nghĩa tư bản là: | Quy luật giá trị thặng dư
QN=113 Khái niệm nào dùng để chỉ tính quy định vốn có của các sự vật, hiện tương về mặt số lượng các yếu tố cấu thành, quy mô tồn tại của sự vật và tốc độ, nhịp điệu của sự vận động, phát triển của sự vật? | Lượng
QN=184 Chọn câu trả lời đúng theo quan điểm của chủ nghĩa duy vật lịch sử: | Quan hệ sản xuất hợp thành cơ cấu kinh tế của xã hội
QN=201 Chọn câu trả lời đúng: | Chủ nghĩa duy vật siêu hình
QN=204 Chọn câu trả lời đúng: | Chủ nghĩa duy vật siêu hình
QN=280 Điểm giống nhau giữa tăng năng suất lao động và tăng cường độ lao động? | Đều làm tăng thêm sản lượng sảu phẩm được sản xuất ra trong một đơn vị thời gian
QN=37 Chọn luận điểm thể hiện lập trường triết học duy tâm lịch sử: | Sự vận động và phát triển của xã hội, xuy cho cùng là do tư tưởng của con người quyết định
QN=458 Những nguyên tắc xây dựng khối liên minh giữa giai cấp công nhân và giai cấp nông dân và các tầng lớp nhân dân lao động khác? | Đảm bảo sự lãnh đạo của giai cấp công nhân , tự nguyện của các giai cấp tầng lớp, kết hợp đúng đắn các lợi ích
QN=274 Điều kiện để ra đời và tồn tại của sản xuất hàng hóa: | Phân công lao động xã hội và sự tách biệt về kinh tế giữa các chủ thể sản xuất
QN=278 "lao động là cha, còn đất là mẹ của mọi của cải". Khái niệm lao động trong câu nói này là lao động nào? | Lao động cụ thể
QN=434 Xuất khẩu hàng hóa phát triển vào giai đoạn nào: | Cuối thế kỷ XVIII - Thế kỷ XIX
QN=29 Sự thông thái của con người: | Được thể hiện chắc chắn hơn trong hoạt động thực tiễn
QN=479 Số lượng đói nghèo và thất nghiệp hiện nay trên thế giới? | 1,2 tỷ người nghèo đói và 1 tỷ người thất nghiệp
QN=94 Tổng hợp tất cả những mặt, những mối liên hệ tất nhiên, tương đối ổn định bên trong sự vật, quy định sự vận động và phát triển của sự vật gọi là gì? | Bản chất
QN=166 Quá trình thay đổi hình thái tồn tại của sự vật đồng thời qua đó tạo ra cá điều kiện phát triển được gọi là | Phát triển
QN=447 Yếu tố nào giữ vai trò quyết định nhất đối với tính cách mạng triệt để nhất của giai cấp công nhân: | Đại diện cho xã hội tương lai
QN=282 Tiền tệ là bánh xe vĩ đại của lưu thông. Câu nói này là của ai và theo anh (chị) nó có đúng không? | Smith và là câu nói đúng
QN=468 Điền vào chỗ trống: trong xu hướng thứ hai, các dân tộc trong một quốc gia đa dân tộc, thậm chí các dân tộc ở nhiều quốc gia muốn...với nhau | Hợp nhất lại
QN=279 Chủ nghĩa tư bản độc quyền là: | Giai đoạn phát triển của phương thức sản xuất tư bản chủ nghĩa
QN=171 Chọn câu trả lời đúng | Con người hiện thực
QN=104 Hạt thóc khi gieo xuống đất có thể nảy mầm thành cây lúVậy hạt thóc là... | Vừa là khả năng vừa là hiện thực
QN=477 Nguyên nhân sâu xa của sự xụp đổ chế độ xã hội chủ nghĩa ở Liên Xô và Đông Âu? | Do quan niệm giáo điều về chủ nghĩa xã hội và suy trì quá lâu mô hình chủ nghĩa xã hội bao cấp
QN=90 ...là phương thức tồn tại và phát triển của sự vật, là hệ thống các mối liên hệ tương đối bền vừng giữa các yếu tố của sự vật đó. | Hình thức
QN=119 Theo nghĩa biện chứng, mâu thuẫn là: | Những gì vừa đối lập với nhau vừa là điều kiên tiền đề tồn tại của nhau
QN=188 Chọn câu trả lời đúng: | Thực hiện chế độ đa đảng nhưng nhất nguyên chính trị
QN=269 Thế nào là phân công lao động xã hội? | Là phân công của xã hội về lao động hình thành những nghành nghề, nghề sản xuất khác nhau. Là sự chuyên môn hóa nhất định đối với người sản xuất
QN=6 Trong tác phầm kinh điển nào sau đây, tác phẩm nào thể hiện tập trung việc V.I. Lênin đã kế thừa và phát triển tư tưởng biện chứng trong triết học của G.W.Ph. Hêghen? | Bút ký triết học
QN=346 Công thức vận động của tư bản cho vay là: | T - T'
QN=190 Chọn câu trả lời đúng theo quan điểm của chủ nghĩa duy vật lịch sử: | Thống nhất và đấu tranh giữa hai mặt đối lập
QN=277 Vì sao hàng hóa có hai thuộc tính là giá trị và giá trị sử dụng? | Vì lao động sản xuất hàng hóa có tính hai mặt là : lao động cụ thể và lao động trừu tượng
QN=221 Chọn câu trả lời đúng theo quan điểm duy vật lịch sử: | Quần chúng nhân dân
QN=457 Cuộc cách mạng xã hội chủ nghĩa kết thúc khi: | Xã hội không còn giai cấp, không còn nhà nước
QN=397 Mục đích của cạnh tranh giữa các nhà tư bản trong nội bộ tổ chức độc quyền: | Giành thị trường tiêu thụ hoặc Giành tỷ lệ sản xuất cao hơn
QN=290 Giá trị thặng dư là: | Là phần lao động không công của công nhân
QN=323 Điều kiện để thực hiện tổng sản phẩm xã hội trong tái sản xuất mở rộng là: | (v +m)I > cII; (c + v + m)I > cI + cII; ( v + m)I + (v + m)II> (c + v + m)I
QN=275 Quan hệ về tỷ lượng trong trao đổi giữa các hàng hóa với nhau do cái gì quy định? | Do giá trị nội tại của hàng hóa
QN=66 "cái riêng - cái chung" , "nguyên nhân - kết quả", "tất nhiên - ngẫu nhiên", "nội dung - hình thức", "bản chất - hiện tượng", "khả năng - hiện thực" đó là các...của triết học Mác - Lênin. | Cặp phạm trù cơ bản
QN=335 Kết quả của cạnh tranh giữa các ngành: | Hình thành lợi nhuận bình quân
QN=20 Những phát minh của vật lý học cận đại đã bác bỏ khuynh hướng triết học nào? | Duy vật chất phác và duy vật siêu hình
QN=318 Căn cứ vào đâu để phân chia tư bản cố định và tư bản lưu động? | Căn cứ vào tính chất chuyển giá trị của nó vào trong sản phẩm mới
QN=485 Điền vào chỗ trống: Quyền dân tộc tự quyết là quyền...đối với vận mệnh của dân tộc mình | Làm chủ
QN=345 Một trong những đặc điểm cơ bản của tư bản cho vay là: | Quyền sở hữu tách rời quyền quản lý
QN=239 Theo quan điểm duy vật lịch sử, ý kiến sau đây đúng hay sai? Vì sao? | Sai. Vì: ý thức xã hội phụ thuộc vào tồn tại xã hội nhưng nó có tính độc lập tương đối của nó
QN=478 Mâu thuẫn trong các nước tư bản chủ nghĩa phát triển hiện nay? | Có xu hướng dịu đi so với trước đây
QN=3 Trong tác phẩm kinh điển sau đây, tác phẩm nào được đánh giá là văn kiện đầu tiên có tính cương lĩnh của chủ nghĩa Mác, thể hiện sự chín muồi về mặt thế giới quan mới của Mác và Ăngghen: | Tuyên ngôn của đảng cộng sản (1848)
QN=228 Chọn câu trả lời đúng nhất theo quan điểm của chủ nghĩa duy vật lịch sử | Nắm được tự liệu sản xuất chủ yếu và quyền lực nhà nước
QN=253 Hàng hóa là gì? | Là hết thảy những vật, những thứ thỏa mãn nhu cầu tiêu dùng của con người và chúng được sản xuất ra để trao đổi, buôn bán
QN=342 Nguồn gốc lợi nhuận của tư bản thương nghiệp là: | Một phần giá trị thặng dư mà tư bản công nghiệp phải chuyển nhượng cho tư bản thương nghiệp
QN=69 Cái riêng là một phạm trù dùng để chỉ... | Một sự vật, một hiện tượng, một quá trình riêng lẻ nhất định
QN=88 V.I.Lênin cho rằng: Tính...không thể tách rời tính phổ biến | Tất nhiên
QN=4 Trong các câu hỏi sau đây, câu hỏi nào là biến thể của cách diễn đạt vấn đề cơ bản của triết học: | Nội dung của các tư tưởng của con người xuất hiện từ đâu và bằng cách nào?
QN=251 Thế nào là sản xuất tự cung, tự cấp? | Là một kiểu tổ chức kinh tế trong đó những sản phẩm được sản xuất ra nhằm mục đích thỏa mãn nhu cầu tiêu dùng của bản thân người sản xuất
QN=203 Chọn câu trả lời đúng nhất theo quan niệm duy vật lịch sử: | Lực lượng sản xuất, quan hệ sản xuất hợp thành cơ cấu kinh tế của xã hội và kiến trúc thượng tầng
QN=33 Đứng im là: | Tương đối
QN=182 Chọn câu trả lời đúng: | Quan hệ sản xuất phải phù hợp với trình độ phát triển của lực lượng sản xuất
QN=237 Chọn mệnh đề đúng theo quan điểm duy vật lịch sử: | Con người sáng tạo ra lịch sử trong phạm vi những điều kiện khách quan mà chính lịch sử tước đó đã tạo nên cho nó
QN=259 Tỷ lệ giữa lao động phức tạp và lao động giản đơn tăng lên có ảnh hưởng như thế nào đến lượng giá trị được tạo ra trong một đơn vị thời gian? | Tăng lên
QN=358 Đia tô chênh lệch II: | Là địa tô có được do thâm canh, tăng năng suất
QN=360 Điểm giống nhau giữa địa tô chênh lệch và địa tô tuyệt đối là: | Có nguồn gốc từ giá trị
QN=72 Cái ...là cái toàn bộ, phong phú hơn cái... | Riêng/Chung
QN=136 Theo Mác con người phải chứng minh chân lý trong: | Hoạt động thực tiễn
QN=451 Đảng cộng sản mang bản chất của giai cấp nào...? | Giai cấp công nhân
QN=309 Cấu tạo kỹ thuật của tư bản: | Phản ánh mối quan hệ giữa tỷ lệ khối lượng và tư liệu sản xuất và số lao động sử dụng tư liệu sản xuất đó
QN=142 Trong tác phẩm bút ký triết học, V.I.Lênin có ví mối quan hệ giữa "...và..." với sự vận động của một con sông - bọt ở bên trên và luồng nước sâu ở dưới. | Hiện tượng và bản chất
QN=165 Điều khẳng định nào sau đây là đúng: | Chủ nghĩa duy tâm khách quan thừa nhận chân lý khách quan
QN=173 Chọn câu trả lời đúng: | Nền sản xuất vật chất của xã hội
QN=125 Quá trình thay đổi các hình thái tồn tại của sự vật được gọi là: | Phủ định
QN=304 Động cơ chủ yếu của tích lũy tư bản là: | Quy luật giá trị thặng dư
QN=473 Năm 1985, sản lượng công nghiệp của Liên xô bằng bao nhiêu phần trăm của Mỹ | 90%
QN=95 Hiện tượng là... | Biểu hiện bên ngoài của bản chất
QN=123 V.I.Lênin từng nhận định thực chất của phép biện chứng là gì với tư cách là phép biện chứng của nhận thức? | Phân đôi cái thống nhất và nhận thức các bộ phân mâu thuẫn của nó
QN=159 "Đói nghèo" và "dốt nát", hiện tượng nào là nguyên nhân, hiện tượng nào là kết quả? | Hiện tượng này vừa là nguyên nhân vừa là kết quả của hiện tượng kia
QN=362 Căn cứ phân chia tư bản bất biến và tư bản khả biến là: | Căn cứ vào vài trò của các bộ phận này trong quá trình sản xuất ra giá trị thặng dư
QN=357 Địa tô chênh lệch I: | Là địa tô thu được trên những loại ruộng đất có điều kiện tư nhiên thuận lợi
QN=122 Mối quan hệ giữa đấu tranh và thống nhất của các mặt đối lập trong một mâu thuẫn: | Đấu tranh là tuyệt đối, còn thống nhất là tương đối
QN=240 Chọn câu trả lời đúng và đầy đủ: | Quan điểm duy tâm và siêu hình
QN=129 Những hình thức nhận thức: cảm giác, tri giác, biểu tượng, thuộc giai đoạn nhận thức nào? | Nhận thức cảm tính
QN=50 Phép biện chứng nào cho rằng biện chứng ý niệm sinh ra biện chứng của sự vật? | Phép biện chứng duy tâm khách quan
QN=413 Bản chất của chủ nghĩa tư bản độc quyền nhà nước: | Sự kết hợp giữa tổ chức độc quyền tư nhân và nhà nước tư sản
QN=476 Chủ nghĩa xã hội đã có mấy lần khủng hoảng? | 3
QN=207 Điền thêm vào câu sau đây và xác định đó là luận điểm của ai? | Lịch sử - tự nhiên/ Mác
QN=58 Phép biện chứng nào được coi là khoa học về những quy luật phổ biến của sự vận động và sự phát triển của tự nhiên, xã hội và tư duy con người | Phép biện chứng của chủ nghĩa Mác - Lênin
QN=10 Trong tác phầm kinh điển nào sau đây, tác phẩm nào thể hiện tập trung việc V.I. Lênin đã kế thừa và phát triển quan niệm của chủ nghĩa Mác về vật chất, về mối quan hệ giữa vật chất và ý thức , tồn tại xã hội và ý thức xã hội | Ba nguồn gốc và ba bộ phận cấu thành chủ nghĩa Mác
QN=450 Phong trào đấu tranh của giai cấp công nhân chuyển từ tự phát sang tự giác khi...? | Có Đảng Cộng sản lãnh đạo
QN=226 Chọn câu trả lời đúng nhất theo vận dụng phương pháp duy vật lịch sử: | Vì thực tế phát triển lực lượng sản xuất ở nước ta đang còn đang ở nhiều trình độ khác nhau
QN=368 Điều kiện để biến sức lao động thành hàng hóa: | Người lao động phải được tự do; người lao động không có tư liệu sản xuất
QN=263 Trong các yếu tố sau đây, yếu tố nào được xác định là thực thể giá trị của hàng hóa? | Lao động trừu tượng
QN=135 Chân lý là: | Tri thức có nội dung chân thực và đã được thực tiễn kiểm nghiệm
QN=430 Trong cơ chế phát triển của chủ nghĩa tư bản độc quyền nhà nước: | Bộ máy nhà nước phụ thuộc vào các tổ chức độc quyền
QN=333 Sự cạnh tranh giữa các ngành là: | Sự cạnh tranh giữa các nhà sản xuất ở các ngành khác nhau
QN=84 Cái không do mối liên hệ bản chất bên trong kết cấu vật chất, bên trong sự vật quyết định, mà do các nhân tố bên ngoài , do sự ngẫu hợp của nhiều hoàn cảnh bên ngoài quyết định gọi là gì? | Ngẫu nhiên
QN=93 Trong quá trình vận động, phát triển của sự vật,...giữ vai trò quyết định... | Nội dung/ hình thức
QN=170 Chọn câu trả lời đúng theo quan điểm của chủ nghĩa duy vật lịch sử: | Phát triển của lực lượng sản xuất
QN=103 Khả năng là cái hiện thực... | Chưa sảy ra
QN=139 "hiện thực chủ quan", khi cần thiết có thể dùng chỉ... | Ý thức
QN=31 Nhân tố cơ bản , trực tiếp tạo thành nguồn gốc xã hội của ý thức: | Lao động và ngôn ngữ
QN=133 Tri thức nào nảy sinh một cách trực tiếp từ thực tiễn lao động sản xuất? | Tri thức kinh nghiệm
QN= 46 Nên gắn ý kiến: "nguyên nhân cao hơn, hoàn thiện hơn kết quả của nó" với lập trường triết học nào? | Triết học duy tâm khách quan
QN=302 Tiền công danh nghĩa: | Biểu hiện ở số lượng tiền tệ mà người công nhân nhận được sau một thời gian làm việc
QN=293 Tư bản khả biến ( V ): | Là giá trị sức lao đông, giá trị của nó tăng lên sau quá trình sản xuất
QN=85 ... tồn tại khách quan, độc lập với ý thức của con người. | Tất nhiên và ngẫu nhiên
QN=102 Phạm trù triết học dùng để chỉ những gì chưa có, nhưng sẽ có, sẽ tới khi có điều kiện tương ứng thích hợp gọi là gì? | Khả năng
QN=421 Chủ nghĩa tư bản độc quyền xuất hiện vào thời kỳ lịch sử nào: | Cuối thế kỷ XIX - đầu thế kỷ XX
QN=300 Tiền lương tính theo thời gian là: | Tiền lương được trả căn cứ vào thời gian làm việc của người công nhân
QN=383 Vai trò mới của ngân hàng trong giai đoạn chủ nghĩa tư bản đọc quyền là: | Khống chế hoạt động của nền kinh tế tư bản chủ nghĩa
QN=22 Xác định mệnh đề đúng theo quan điểm duy vật biện chứng: | Phản điện tử, phản hạt nhân là thực tại khách quan, là dạng cụ thể của vật chất
QN=28 Chon từ phù hợp điền vào câu sau cho đúng quan điểm duy vật biện chứng: "ý niệm chẳng qua là ... được di chuyển vào bộ óc con người và được cải biến đi ở trong đó" | Cái vật chất
QN=111 Khái niệm nào dùng để chỉ tính quy định khách quan vốn có của sự vật, là sự thống nhất hữu cơ của các thuộc tính là cho sự vật là nó: | Chất
QN=185 Chọn câu trả lời đúng: | Quan hệ kinh tế
QN=172 Chọn câu trả lời đúng theo quan điểm duy vật lịch sử: | Con người thực hiện sự cải biến giới tự nhiên
QN=62 Luận điểm "bản chất con người là tổng hòa các quan hệ xã hội" dựa trên quan điểm nào | Quan niệm duy vật biện chứng
QN=131 Hình thức nhận thức nào cần có sự tác động trực tiếp của vật vào cơ quan giác quan của con người? | Khái niệm
QN=419 Sự kết hợp về nhân sự giữa các tổ chức độc quyền và nhà nước thể hiện ở: | Liên minh giữa tổ chức độc quyền ngân hàng, tổ chức độc quyền công nghiệp và chính phủ
QN=367 Tính chất chuyển giá trị của tư bản cố định là: | Chuyển giá trị dần dần, từng phần một vào trong sản phẩm mới
QN=186 Chọn câu trả lời đúng: | Toàn bộ hệ thống kết cấu các hình thái ý thức xã hội cùng với các thiết chế chính trị - xã hội tương ứng.
QN=420 Sở hữu độc quyền nhà nước là sự kết hợp: | Sở hữu nhà nước và sở hữu độc quyền tư nhân
QN=445 Trong tác phẩm tuyên ngôn của Đảng Cộng sản, C.Mác và Ph. Ăngghen đã khẳng đinh: " tất cả các giai cấp khác đều suy tàn, tiêu vong cùng với sự phát triển của đại công nghiệp, còn giai cấp vô sản lại là... của bản thân nền đại công nghiệp" | Sản phẩm
QN=314 Hao mòn tư bản cố định có hai loại: | Hao mòn tự nhiên và hao mòn vô hình
QN=329 Về lượng tỷ suất lợi nhuận (p') là: | Luôn luôn nhỏ hơn tỷ suất giá trị thặng dư
QN=374 Những nhân tố ảnh hưởng đến quy mô tích lũy tư bản: | Trình độ bóc lột sức lao động; năng suất lao động; sự chênh lệch ngày càng lớn giữa tư bản sử dụng và tư bản đã tiêu dùng; quy mô tư bản ứng trước
QN=217 Chon quan niệm đúng về con người theo quan điệm của chủ nghĩa duy vật lịch sử: | Tổng hòa các quan hệ xã hội
QN=480 GDP của Trung Quốc năm 2007 so với năm 1990 gấp bao nhiêu lần: | 8,38 lần
QN=51 Biện chứng chủ quan là gì? | Là biện chứng của ý thức
QN=107 Thế nào là độ của sự vật: | Trong một giới hạn, lượng - chất thống nhất nói lên sự vật là nó
QN=281 Trong những trường hợp nào sau đây của hao phí lao động cá biệt, trường hợp nào không đáp ứng yêu cầu của quy luật giá trị? | Hao phí lao động cá biệt > hao phí lao động xã hội cần thiêt
QN=449 Sứ mệnh lịch sử thế giới của giai cấp công nhân là...? | Xóa bỏ nhà nước của giai cấp tư sản, xây dựng thanh công chủ nghĩa xã hội và chủ nghĩa cộng sản
QN=151 Cái ...chỉ tồn tại trong cái...thông quan cái riêng mà biểu hiện sự tồn tại của mình | Chung/Riêng
QN=306 Tập trung tư bản là: | Quá trình liên kết, hợp nhất các tư bản cá biệt trong xã hội thành một tư bản lớn hơn
QN=38 Vận động của tự nhiên và lịch sử chỉ là sự tha hóa sự tự vận động của ý niệm tuyệt đối. Quan niệm trên thuộc lập trường triết học nào? | Chủ nghĩa duy vật
QN=117 Không phải mọi sự thay đổi về lượng đều: | Có khả năng dẫn đến thay đổi về chất
QN=202 Chọn câu trả lời đúng: | Chủ nghĩa duy vật lịch sử
QN=187 Chọn câu trả lời đúng theo quan điểm của chủ nghĩa duy vật lịch sử: | Tổ chức nhà nước
QN=467 Điền vào chỗ trống: nền văn hóa xã hội chủ nghĩa là nền văn hóa được xây dựng và phát triển trên nền tảng...do Đảng cộng sản lãnh đạo nhằm thỏa mãn nhu cầu không ngừng tăng lên về đời sống văn hóa tinh thần của nhân dân, đưa nhân dân lao động thực sự trở thành chủ sáng tạo và hưởng thụ văn hóa | Văn hóa dân tộc
QN=422 Trong các nhà kinh điển của chủ nghĩa Mác - Lênin, ai là người khái quát về nguyên nhân ra đời của chủ nghĩa tư bản độc quyền bằng câu: "tự do cạnh tranh đẻ ra tập trung sản xuất và sự tập trung sản xuất này, khi phát triển tới một mức độ nhất định lại dẫn tới độc quyền". | V.I.Lênin
QN=322 Điều kiện thực hiện tổng sản phẩm xã hội trong tái sản xuất giản đơn: | (v +m)I = cII; (c + v + m)I = cI + cII; ( v + m)I + (v + m)II= (c + v + m)II
QN=296 Giá trị thặng dư tương đối có được do: | Tăng năng suất lao động, làm rút ngắn thời gian lao động cần thiết
QN=49 Đặc điểm chủ yếu của phép biện chứng trong triết học hy lạp là: | Tính chất tự phát, ngây thơ, mộc mạc
QN=301 Tiền lương tính theo sản phẩm là: | Tiền lương được trả căn cứ vào số lượng và chất lượng sản phẩm mà người công nhân làm ra
QN=340 Quy luật giá cả sản xuất là: | Biểu hiện của quy luật giá trị trong giai đoạn tự do cạnh tranh của chủ nghĩa tư bản
QN=167 Chọn câu trả lời đúng và đầy đủ: | Quan điểm duy tâm và siêu hình
QN=462 Những xã hội nào thừa nhận chế độ dân chủ: | Xã hội chiếm hữu nô lệ , xã hội tư bản chủ nghĩa, xã hội xã hội chủ nghĩa
QN=341 Tư bản thương nghiệp trong chủ nghĩa tư bản là: | Một bộ phận của tư bản công nghiệp tách ra phục vụ quá trình lưu thông hàng hóa
QN=152 Triết gia nào cho rằng: "Cái chung là những ý niệm tồn tại vĩnh viễn, bên cạnh những cái riêng có tính chất tạm thời" | Platôn
QN=225 Chọn câu trả lời đúng theo vận dụng phương pháp luận duy vật lịch sử : | Phương thức sản xuất tiểu nông, lạc hậu tồn tại lâu dài trong lịch sử
QN=326 Về bản chất lợi nhuận và giá trị thặng dư đều là: | Lao động không công của người công nhân
QN=317 Hao mòn vô hình là: | Hao mòn thuần túy về giá trị do tác động của tiến bộ khoa học kỹ thuật
QN=284 Công thức chung của tư bản là: | T - H - T'
QN=440 Thưc chất của cách mạng xã hội chủ nghĩa có tính chất | Kinh tế
QN=108 Khái niệm "bước nhảy"? | Quá trình biến đổi về chất diễn ra tại điểm nút
QN=258 Thế nào là lao động giản đơn? | Là lao động đòi hỏi phải có sự huấn luyện trước về chuyên môn, bất cứ người nào đến tuổi lao động trong điều kiện bình thường đều tiến hành được
QN=295 Khối lượng giá trị thặng dư (M) được tính bằng công thức | M= m'. V'
QN=82 Vật trong chân không luôn chuyển động với gia tốc 9,8 m/s2; nước ở áp suất 1 atmôtphe luôn sôi ở 100oĐiều này chứng tỏ... | Một nguyên nhân nhất định, trong những hoàn cảnh giống nhau, sẽ tạo nên những kết quả giống nhau
QN=330 Tỷ suất lợi nhuận (p') là: | Tỷ lệ phần trăm giữa tổng giá trị thặng dư và toàn bộ tư bản khả biến
QN=179 Chọn câu trả lời đúng theo quan điểm của chủ nghĩa duy vật lịch sử:Mối quan hệ giữa lực lượng sản xuất và quan hệ sản xuất là mối quan hệ: | c.Thống nhất và đấu tranh của các mặt đối lập
QN=86 Câu nào dưới đây là câu đúng và đủ: | Tất nhiên và ngẫu nhiên có thể chuyển hóa cho nhau
QN=222 Chọn câu trả lời đúng theo quan điểm duy tâm xã hội: | Các vĩ nhân, những cá nhân kiệt xuất
QN=48 Không gian và thời gian: | Không gian và thời gian đều là những hình thức cơ bản của tồn tại vật chất
QN=417 Chủ nghĩa tư bản độc quyền nhà nước là: | Một quan hệ kinh tế, chính trị, xã hội
QN=87 C.Mác và Ph.Ăngghen cho rằng: cái mà người ta quả quyết cho là...thì lại hoàn toàn do những cái...cấu thành; và cái được coi là...lại là hình thức trong đó ẩn nấp... | Tất yếu/ ngẫu nhiên; ngẫu nhiên/ tất yếu
QN=197 Chọn câu trả lời đúng theo quan điểm của chủ nghĩa duy vật lịch sử: | Có thể diễn ra theo chiều hướng tích cực hoặc tiêu cực
QN=243 Trong chủ nghĩa duy vật lịch sử, khái niệm "phương thức sản xuất" dùng để chỉ: | Cách thức tiến hành quá trình sản xuất ra của cải vật chất trong một giai đoạn lịch sử nhất định
QN=74 Cái... và cái... có thể chuyển hóa lẫn nhau trong quá trình phát triển của sự vật | Chung/Đơn nhất
QN=387 Mục đích của xuất khẩu tư bản: | Chiếm đoạt giá trị thặng dư và các nguồn lợi khác ở các nước nhập khẩu tư bản
QN=24 Theo Ph. Ăngghen, tính thống nhất của vật chất được chứng minh bởi: | Sự phát triển lâu dài và khó khăn của triết học và khoa học tự nhiên
QN=351 Giá trị cổ phiếu khi được mua đi bán lại gọi là: | Thị giá
QN=30 Phương pháp luận chung của chủ nghĩa duy vật là trong nhận thức và thực tiễn cần: | Xuất phát từ thực tế khách quan
QN=155 Đâu là nội dung nguyên lý của phép biện chứng duy vật về mối liên hệ phổ biến của các sự vật và hiện tượng | Thế giới là một chỉnh thể thống nhất bao gồm các sự vật, các quá trình vừa tách biệt nhau, vừa có mối liên hệ qua lại với nhau, vừa thâm nhập và chuyển hóa cho nhau
QN=252 Nội dung công cuộc đại phân công lao động xã hội lần thứ ba là: | Ngành thương nghiệp ra đời
QN=79 Trong các cặp khái niệm dưới đây, cặp nào có quan hệ nhân quả? | Nghèo - Dốt
QN=460 Câu nói: "chuyên chính vô sản là một hình thức đặc biệt của liên minh giai cấp giữa giai cấp vô sản, đội tiên phong của những người lao động với đông đảo những tầng lớp lao động không phải là vô sản" là của ai? | V.I.Lênin
QN=316 Hao mòn hữu hình là: | Hao mòn vật chất do quá trình sử dụng hoặc do tác động của tự nhiên
QN=14 Thế giới quan là: | Hệ thống quan niêm, quan điểm chung nhất của con người về thế giới
QN=168 Chọn câu trả lời đúng theo quan điểm duy vật lịch sử: | Xã hội có các loại hình cơ bản là:
QN=268 Thế nào là thời gian lao động xã hội cần thiết? | Là khoảng thời gian cần thiết để sản xuất ra một loại hàng hóa nhất định trong điều kiện trình độ kỹ thuật trung bình, trình độ khéo léo trung bình và cường độ lao động trung bình
QN=96 Trong chủ nghĩa tư bản, ... quan hệ giữa giai cấp tư sản và giai cấp công nhân là quan hệ bóc lột. | Bản chất
QN=254 Trong các yếu tố sau đây, yếu tố nào là nguồn gốc của giá trị hàng hóa? | Lao động của con người
QN=286 Sức lao động là: | Toàn bộ sức thể lực và trí lực tồn tại trong mỗi con người
QN=297 Giá trị thăng dư siêu ngạch là giá trị thặng dư có được do: | Giá trị cá biệt của hàng hóa thấp hơn giá trị xã hội
QN=386 Xuất khẩu hàng hóa là: | Xuất khẩu hàng hóa ra nước ngoài để thực hiện giá trị
QN=130 Những hình thức nhận thức: khái niệm, phán đoán, suy luận thuộc giai đoạn nhận thức nào? | Nhận thức lý tính
QN=5 Trong tác phẩm kinh điển nào sau đây, tác phẩm nào thể hiện sự tập trung đầy đủ nhất nội dung lý luận kinh tế chính trị học của chủ nghĩa Mác? Tác phẩm đó của ai? | Bộ Tư bản/ Mác
QN=360 Quy luật giá trị hoạt động tự phát có thể dẫn đến sự hình thành QHSX TBCN không? Chọn câu trả lời đúng nhất: | Không
QN=297 Sự ra đời của CNTB độc quyền nhà nước nhằm mục đích: | Phục vụ lợi ích của tổ chức độc quyền tư nhân và cứu nguy cho CNTB
QN=25 Quan điểm toàn diện, quan điểm lịch sử cụ thể và quan điểm phát triển được ra ra từ | Hai nguyên lý cơ bản của phép biện chứng duy vật
QN=314 Các yếu tố dưới đây, yếu tố nào không thuộc tư bản bất biến? | Máy móc, thiết bị, nhà xưởng.
QN=282 Động lực của cách mạng xã hội là | Giai cấp tiến tiến
QN=21 Phương thức sản xuất bao gồm | Lực lượng sản xuất và quan hệ sản xuất.
QN=414 Hàng hóa sức lao động có mấy thuộc tính | Hai thuộc tính
QN=445 Nhà nước Xã hội chủ nghĩa là kiểu nhà nước như thế nào? | Là kiểu nhà nước theo kiểu nửa nhà nước để đi đến xóa bỏ nhà nước
QN=464 Chủ nghĩa Mác- Lênin quan niện dân chủ là : | Dân chủ là sản phẩm sự tiến hóa của lịch sử, là nhu cầu của con người; quyền lực thuộc về dân
QN=210 Để tăng trưởng kinh tế cao, kinh tế học hiện đại nêu ra các nhân tố nào? | Các phương án trả lời đều đúng
QN=443 Thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam trên phạm vi cả nước ta bắt đầu từ sau năm naò ? | Năm 1975
QN=243 Bộ phận nào của tư liệu lao động được coi là tiêu chí phản ánh đặc trưng phát triển của một thời đại kinh tế | Công cụ lao động
QN=270 Bóc lột giá trị thặng dư tương đối là hình thức | Rút ngắn thời gian lao động cần thiết và thời gian lao động thặng dư
QN=341 Quan hệ cung cầu thuộc khâu nào của quá trình tái sản xuất xã hội? | Sản xuất và tiêu dùng
QN=39 Quan hệ giữ vai trò quyết định đối với những quan hệ khác trong quan hệ giữa nguời với người của quá trình sản xuất là | Quan hệ sở hữu tư liệu sản xuất.
QN=57 Nguyên tắc thống nhất giữa lý luận với thực tiễn là nguyên tắc được rút ra trực tiếp từ | Mối quan hệ giữa vật chất và ý thức
QN=96 Ý thức xã hội có tính chất nào sau đây | Tính độc lập tương đối
QN=231 Khi nghiên cứu phương thức sản xuất TBCN, C.Mác bắt đầu từ | Sản xuất hàng hoá giản đơn và hàng hoá
QN=368 Sản xuất hàng hóa có vai trò gì trong phân công lao động xã hội | Các phương án trả lời đều sai
QN=167 Nguồn gốc của tích lũy tư bản là | Giá trị thặng dư
QN=41 Sự vật mới ra đời bao giờ cũng trên cơ sở những cái đã có của sự vật cũ, qua đó tiến hành chọn lọc những cái tích cực, tiến bộ, phù hợp để tiếp tục phát triển. Điều này thể hiện tính chất gì của sự phát triển | Tính kế thừa
QN=327 Sự phát triển đại công nghiệp cơ khí ở Anh bắt đầu từ: | Các ngành công nghiệp nhẹ
QN=223 Căn cứ vào đâu để phân chia thành tái sản xuất cá biệt và tái sản xuất xã hội? | Căn cứ vào phạm vi sản xuất
QN=217 Yếu tố quyết định đến giá cả hàng hoá là | Giá trị của hàng hoá
QN=226 Sản xuất hàng hoá tồn tại: | Trong các xã hội, có phân công lao động xã hội và sự tách biệt về kinh tế giữa những người sản xuất
QN=333 Bản chất tiền tệ là gì? Chọn các ý đúng: | Các phương án trả lời đều đúng.
QN=129 Nguyên nhân sâu xa của việc ra đời của giai cấp thuộc | Lĩnh vực kinh tế
QN=191 Mục đích của nền sản xuất hàng hóa là | Trao đổi
QN=307 Chọn phương án đúng về quy luật kinh tế: | Quy luật kinh tế là quy luật xã hội do con người đặt ra, là quy luật khách quan phát sinh tác dụng qua hoạt động kinh tế của con người.
QN=398 Trong chỉ đạo thực tiễn cần căn cứ vào đâu để đề ra chủ trương, phương hướng hành động | Cái tất nhiên, bản chất, nội dung.
QN=194 Lao động cụ thể là khái niệm dùng để chỉ | Tạo ra giá trị sử dụng của hàng hóa
QN=175 Chủ nghĩa tư bản ra đời phải có mấy nguyên nhân | Hai nguyên nhân cơ bản
QN=188 Quá trình lưu thông tư bản bao gồm | Tuần hoàn và chu chuyển tư bản
QN=233 Các phương thức sản xuất nối tiếp nhau trong lịch sử theo trình tự nào? | Cộng sản nguyên thuỷ- chiếm hữu nô lệ- phong kiến- tư bản- chủ nghĩa cộng sản.
QN=150 Theo qua điểm của triết học Mác- Lênin, yếu tố nào quyết định trong lực lượng sản xuất | Người lao động
QN=352 Về kinh tế, xuất khẩu tư bản nhà nước thường hướng vào: | Ngành kết cấu hạ tầng
QN=28 Nguồn gốc lý luận trực tiếp của triết học Mác là | Triết học cổ điển Đức
QN=362 Các công thức tính tỷ suất giá trị thặng dư dưới đây, công thức nào đúng? | m'=m/v*100%
QN=461 Đặc trưng của nền văn hóa XHCN là gì? | Tất cả các phương án trả lời đều đúng
QN=308 Tích tụ và tập trung tư bản giống nhau ở: | Đều là tăng quy mô tư bản cá biệt
QN=383 Khi nào QHSX được xem là phù hợp với tính chất và trình độ phát triển của lực lượng sản xuất? | Thúc đẩy lực lượng sản xuất phát triển
QN=91 Bản chất của nhà nước là | Cơ quan phúc lợi chung của toàn xã hội
QN=181 Công thức chung của tư bản là | T-H-T'
QN=444 Nội dung cách mạng xã hội chủ nghĩa về tư tưởng văn hóa? | Tất cả các phương án trả lời đều đúng
QN=156 Theo quan điểm của Lênin, giai cấp là những tập đoàn người có | Lợi ích căn bản đối lập nhau
QN=92 Chủ nghĩa duy vật biện chứng xác định tính chất quan hệ giữa hai phạm trù nguyên và kết quả là tính | Sản sinh
QN=64 Chủ thể của lịch sử, lực lượng sáng tạo ra lịch sử là | Quần chúng nhân dân.
QN=198 Có hai hình thức trả tiền công của nhà tư bản đó là | Trả bằng tiền hay sản phẩm
QN=267 Trong 3 khâu sau đây của quá trình tái sản xuất, khâu nào giữ vai trò quyết định? | Sản xuất
QN=378 Ý thức xã hội là phạm trù triết học dùng để chỉ | Toàn bộ đời sống tinh thần của xã hội
QN=10 Kết cấu của ý thức theo chiều dọc thì bao gồm | Các phương án trả lời đều sai
QN=128 Chủ nghĩa duy vật lịch sử khẳng định trong quan hệ biện chứng giữa cơ sở hạ tầng và kiến trúc thượng tầng thì | Cơ sở hạ tầng quyết định kiến trúc thượng tầng
QN=434 Trong tất cả các mâu thuẫn sau, mâu thuẫn nào buộc phải giải quyết bằng một cuộc cách mạng: | Kinh tế
QN=234 Trong nền sản xuất lớn hiện đại, yếu tố nào giữ vai trò quyết định của quá trình lao động sản xuất? | Sức lao động
QN=83 Nếu quá đề cao triết học duy tâm sẽ dẫn đến | Xa rời thực tế
QN=372 Có hai hình thức trả tiền công của nhà tư bản đó là | Trả bằng tiền hay sản phẩm
QN=238 Trong quan hệ với cường độ lao động, lượng giá trị của đơn vị hàng hoá | Không phụ thuộc vào cường độ lao động
QN=204 Để làm rõ vai trò của các bộ phận tư bản trong việc tạo ra giá trị thặng dư, tư bản được chia thành | Tư bản bất biến và tư bản khả biến
QN=1 Thực tiễn là | Hoạt động vật chất có mục đích mang tính lịch sử-xã hội của con người
QN=122 Theo quan điểm của chủ nghĩa duy vật biện chứng, sự vật vận động và phát triển mang tính | Khách quan
QN=51 Chủ nghĩa Mác-Lênin ra đời vào khoảng thời gian nào | Giữa thế kỷ XIX
QN=364 Tỷ suất giá trị thặng dư (m') phản ánh điều gì? Chọn ý đúng: | Trình độ bóc lột của tư bản đối với công nhân làm thuê.
QN=208 Nguyên nhân của cách mạng xã hội | Là do mâu thuẫn giai cấp
QN=67 Triết học duy vật biện chứng cho rằng thế giới thống nhất ở | Tính vật chất
QN=42 Quan điểm ủng hộ cái mới tiến bộ, chống lại cái cũ, cái lỗi thời kìm hãm sự phát triển là quan điểm được rút ra trực tiếp từ | Quy luật phủ định của phủ định
QN=442 Các giai đoạn phát triển của hình thái kinh tế cộng sản chủ nghĩa theo quan điểm của Lênin? | Thời kỳ quá độ lên chủ nghĩa xã hội, chủ nghĩa xã hội, xã hội cộng sản chủ nghĩa
QN=313 Khi nào tiền tệ biến thành tư bản? | Sức lao động trở thành hàng hoá
QN=44 Ngày nay, yếu tố giữ vai trò quyết định trong lực lượng sản xuất là | Công cụ lao động
QN=135 Trường phái triết học đề cao lĩnh vực vật chất gọi là | Triết học duy vật
QN=385 Phạm trù triết học nào dùng để chỉ tính quy định khách quan vốn có của sự vật và hiện tượng, sự thống nhất hữu cơ của các thuộc tính làm cho nó là nó mà không phải là cái khác | Chất
QN=294 Lao động sản xuất có vai trò gì đối với con người? | Các phương án trả lời đều đúng
QN=138 Chủ nghĩa Mác-Lênin gồm ba bộ phận cấu thành đó là | Triết học, Kinh tế chính trị học và Chủ nghĩa xã hội khoa học
QN=354 Việc mua bán nô lệ và mua bán sức lao động quan hệ với nhau thế nào? Chọn ý đúng: | Hoàn toàn khác nhau
QN=5 Yếu tố cơ bản nhất, quan trọng nhất của ý thức là | Tri thức
QN=245 Hãy chọn phương án đúng về đặc điểm của quy luật kinh tế: | Các phương án trả lời đều đúng
QN=236 Kinh tế hàng hóa ra đời dựa trên mấy nguyên nhân cơ bản | Hai
QN=187 Hàng hóa sức lao động ra đời phải dựa trên mấy điều kiện | Hai điều kiện
QN=18 Cách thức của sự phát triển là | Sự thay đổi về lượng dẫn đến sự thay đổi về chất và ngược lại
QN=133 Biện chứng là phương pháp có đặc điểm | Vừa thấy cái chung và cái riêng
QN=36 Chọn quan điểm đúng nhất trong các quan điểm sau đây: | Vận động, không gian, thời gian là những phương thức tồn tại của vật chất
QN=250 Mệnh đề nào sau đây là ý không đúng về lao động phức tạp: | Lao động phức tạp là lao động trí tuệ của người lao động có trình độ cao
QN=380 Các quan điểm nào sau đây phản ánh đúng nhất nội dung khái niệm phương thức sản xuất | Phương thức sản xuất là cách thức sản xuất ra của cải vật chất trong từng giai đoạn lịch sử xã hội nhất định
QN=309 Sức lao động trở thành hàng hoá một cách phổ biến từ khi nào? | Từ khi có CNTB
QN=108 Theo Mác và Awnghen, vận dụng triết học của hai ông vào thực tế phải | Tùy thuộc vào hoàn cảnh lịch sử cụ thể
QN=300 Nhân tố nào là cơ bản thúc đẩy CNTB ra đời nhanh chóng: | Tích luỹ nguyên thuỷ
QN=289 Khi đồng thời tăng năng suất lao động và cường độ lao động lên 2 lần thì ý nào dưới đây là đúng? | Giá trị 1 hàng hoá giảm 2 lần, tổng số giá trị hàng hoá tăng 2 lần
QN=456 Nguyên tắc cơ bản trong xây dựng khối liên minh giai cấp trong cách mạng xã hội chủ nghĩa? | Tất cả các phương án trả lời đều đúng
QN=473 CNXH ở Liên Xô và Đông Âu sụp đổ là do những nguyên nhân nào? | Chủ quan
QN=103 Thực tại khách quan là | Những gì tồn tại không lệ phụ thuộc vào ý thức của con người
QN=34 Mối liên hệ nhân quả có các tính chất cơ bản nào sau đây | Tính khách quan, tính phổ biến, tính đa dạng.
QN=277 Xét về giá trị của hàng hóa, hàng hóa càng khan hiếm thì | Giá cả của nó càng cao
QN=193 Hàng hóa sức lao động có mấy thuộc tính | Hai thuộc tính
QN=410 Các yếu tố dưới đây, yếu tố nào không thuộc tư bản bất biến? | Máy móc, thiết bị, nhà xưởng
QN=71 Thuộc tính cơ bản được Lênin rút ra trong định nghĩa phạm trù vật chất là | Thực tại khách quan
QN=56 Hình thức cơ bản nhất của thực tiễn là | Hoạt động sản xuất ra của cải vật chất
QN=124 Biện chứng là phương pháp xem xét thế giới trong trạng thái | Luôn vận động, biến đổi và phát triển không ngừng
QN=332 Sự hình thành các tổ chức độc quyền dựa trên cơ sở: | Tích tụ tập trung sản xuất và sự ra đời của các xí nghiệp quy mô lớn
QN=283 Học thuyết kinh tế nào của C.Mác được coi là hòn đá tảng | Học thuyết giá trị thặng dư
QN=371 Xét về thời gian, kinh tế hàng hóa ra đời sau | Nền kinh tế tự nhiên
QN=97 Vấn đề cơ bản của triết học gồm hai mặt đó là | Bản thể luận và nhận thức luận
QN=225 Chủ nghĩa Mác_lênin quan điểm tôn giáo là | Nhu cầu của một bộ phận nhân dân
QN=366 Theo quan điểm của Lênin, giai cấp là những tập đoàn người có | Lợi ích căn bản đối lập nhau
QN=12 Phạm trù triết học nào dùng để chỉ tính quy định khách quan vốn có của sự vật và hiện tượng, sự thống nhất hữu cơ của các thuộc tính làm cho nó là nó mà không phải là cái khác | Chất
QN=377 Sản xuất và lưu thông hàng hoá chịu sự chi phối của những quy luật kinh tế nào? | Các phương án trả lời đều đúng
QN=195 Theo quan điểm của KTCT Mác-Lênin, Loại tiền nào sau đây có chức năng cất trữ | Tiền vàng
QN=337 Trong CNTB ngày nay, các trùm tài chính thống trị nền kinh tế thông qua: | Kết hợp "chế độ tham dự" với "chế độ uỷ nhiệm"
QN=387 Cái chung chỉ tồn tại trong | Cái riêng
QN=177 Sản xuất hàng hóa là khái niệm dùng để chỉ | Kiểu tổ chức kinh tế mà sản phẩm làm ra được mang ra trao đổi, mua bán trên thị trường để thỏa mãn nhu cầu của xã hội.
QN=338 Dựa vào căn cứ nào để chia tư bản thành tư bản bất biến và tư bản khả biến. | Vai trò các bộ phận tư bản trong quá trình sản xuất giá trị thặng dư
QN=22 Theo Ăng-ghen, có thể chia vận động thành: | Năm hình thức vận động cơ bản
QN=304 Địa tô chênh lệch II thu được trên: | Ruộng đất đã thâm canh
QN=310 Nếu nhà tư bản trả công theo đúng giá trị sức lao động thì có còn bóc lột giá trị thặng dư không? | Vẫn còn
QN=90 Theo quan điểm của chủ nghĩa duy vật biện chứng, cái riêng chỉ tồn tại trong | Mối quan hệ đi đến cái chung
QN=235 Tăng trưởng kinh tế là: | Tăng GDP và GNP trong một thời kỳ nhất định
QN=47 Cơ sở, động lực, mục đích của nhận thức là | Thực tiễn
QN=411 Lao động cụ thể là khái niệm dùng để chỉ | Tạo ra giá trị sử dụng của hàng hóa
QN=148 Toàn bộ đời sống tinh thần của xã hội gọi là | Ý thức xã hội
QN=284 Định nghĩa giai cấp của Lênin dựa vào cơ sở nào sau đây | Kinh tế
QN=45 Phủ định biện chứng là | Sự phủ định tự thân, gắn liền với quá trình vận động đi lên, tạo tiền đề, điều kiện cho sự ra đời của cái mới tiến bộ thay thế cái cũ
QN=66 Tính chất phong phú, đa dạng trong quan hệ nhân quả thể hiện ở chỗ một kết quả có thể do | Nhiều nguyên nhân khác nhau sinh ra
QN=173 Mục đích của sản xuất hàng hóa là thỏa mãn nhu cầu của | Thị trường
QN=88 Trong thực tế chúng ta phải dựa vào khả năng hay hiện thực | Hiện thực
QN=261 Giá trị của hàng hoá được quyết định bởi: | Lao động trừu tượng của người sản xuất kết tinh trong hàng hoá
QN=427 Xây dựng xã hội chủ nghĩa tất yếu vì: | Do thực tiễn của thời kì quá độ nên chủ nghĩa xã hội yêu cầu
QN=373 Ngẫu nhiên là phạm trù triết học dùng để chỉ | Những gì sẽ xuất hiện do nguyên nhân bên ngoài quyết định
QN=3 Xét đến cùng, nhân tố quan trọng nhất quyết định sự thắng lợi của một trật tự xã hội mới là | Năng suất lao động
QN=293 Xác định đúng trình tự các khâu của quá trình tái sản xuất | Sản xuất - phân phối - trao đổi - tiêu dùng
QN=131 Ở xã hội Việt Nam hiện nay | Còn đấu tranh giai cấp
QN=353 Trong cùng một thời gian lao động khi số lượng sản phẩm tăng lên còn giá trị một đơn vị hàng hoá và các điều khác không thay đổi thì đó là kết quả của: | Tăng cường độ lao động
QN=61 Tính thống nhất vật chất của thế giới là cơ sở của mối liên hệ giữa các sự vật, hiện tượng. Đây là quan điểm của | Chủ nghĩa duy vật biện chứng
QN=334 Chọn các ý không đúng về sản phẩm và hàng hoá: | Mọi sản phẩm đều là hàng hoá
QN=79 Triết học duy tâm khách quan và triết học duy tâm chủ quan đều có điểm chung là | Đề cao lĩnh vực tinh thần của con người
QN=219 Kinh tế- chính trị Mác - Lênin đã kế thừa và phát triển trực tiếp những thành tựu của | Kinh tế chính trị cổ điển Anh
QN=214 Theo quan điểm của KTCT, trong tư liệu lao động bộ phận nào quyết định đến năng suất lao động? | Công cụ lao động
QN=35 Theo quan điểm của Triết học Mác-Lênin, có thể định nghĩa về vật chất như sau: | Vật chất là thực tại khách quan
QN=53 Quan điểm nào cho rằng các sự vật, hiện tượng, các quá trình khác nhau vừa tồn tại độc lập, vừa quy định, tác động qua lại, chuyển hóa lẫn nhau | Quan điểm biện chứng
QN=179 Sản xuất hàng hóa có vai trò gì trong phân công lao động xã hội | Các phương án trả lời đều sai
QN=408 Mối liên hệ nhân quả có các tính chất cơ bản nào sau đây | Tính khách quan, tính phổ biến, tính đa dạng.
QN=276 Sức lao động là | Các phương án trả lời đều đúng
QN=418 Lực lượng cơ bản và chủ yếu của cuộc cách mạng xã hội chủ nghĩa là: | Giai cấp công nhân, tầng lớp trí thức, giai cấp nông dân, tiểu tư sản
QN=74 Nguyên lý triết học là | Hệ thống quan điểm chung nhất, khái quát nhất của một học thuyết
QN=466 CNXH hiện thực lần đầu tiên xuất hiện vào năm nào? | 1871
QN=228 Muốn tăng giá trị của một đơn vị hàng hóa cần phải | Tăng cường độ lao động
QN=269 Ai là người đầu tiên đưa ra khái niệm "kinh tế- chính trị"? | Antoine Montchretiên
QN=440 Giai cấp vô sản là do cuộc cách mạng nào sinh ra? | Cuộc cách mạng công nghiệp
QN=429 Nguồn gốc của sự hình thành và phân chia giai cấp trong xã hội là do? | Kinh tế
QN=413 "Kết quả" là phạm trù triết học dùng để chỉ | Những thay đổi do nguyên nhân gây ra
QN=143 Các quan điểm nào sau đây phản ánh đúng nhất nội dung khái niệm cơ sở hạ tầng. | Cơ sở hạ tầng là toàn bộ các quan hệ sản xuất hợp thành cơ cấu kinh tế của một hình thái kinh tế xã hội nhất định trong lịch sử
QN=171 Lợi nhuận được KTCT quan điểm là | Hình thức biến tướng của giá trị thặng dư
QN=417 Về bản chất Đảng Cộng sản là chính đảng của: | Giai cấp công nhân và nhân dân lao động
QN=259 Thế nào là lao động giản đơn? | Là lao động không cần trải qua đào tạo cũng có thể làm được
QN=452 Quan điểm của Đảng và nhà nước ta về vấn đề tôn giáo được quán triệt như thế nào? | Tất cả các phương án trả lời đều đúng
QN=455 Chủ nghĩa xã hội phát triển trở thành một hệ thống trên thế giới ở giai đoạn nào? | Từ 1945 đến đầu những năm 80
QN=249 Mọi hình thức lạm phát đều làm tăng | Giá cả của hàng hóa
QN=46 Khả năng được hình thành do quy luật vận động nội tại của sự vật quy định được gọi là | Khả năng tất nhiên
QN=441 Vấn đề cơ bản của mọi cuộc cách mạng xã hội là gì? | Giành chính quyền
QN=160 Quan điểm nào dưới đây phản ánh đầy đủ vai trò của đấu tranh giai cấp trong xã hội phân chia giai cấp | Đấu tranh giai cấp là nguồn gốc và động lực vận động và phát triển xã hội
QN=331 Quan hệ giữa giá cả và giá trị. Chọn các ý đúng: | Các phương án trả lời đều đúng.
QN=72 Các nhà triết học duy vật cổ đại đã đồng nhất vật chất với | Các sự vật cụ thể
QN=458 Nguồn gốc cơ bản nào cho sự ra đời của tôn giáo? | Nguyên nhân nhận thức, kinh tế, tâm lý
QN=112 "Kết quả" là phạm trù triết học dùng để chỉ | Những thay đổi do nguyên nhân gây ra
QN=113 Quan điểm lịch sử cụ thể đòi hỏi chúng phải quán triệt nguyên tắc nào sau đây | Xem xét sự vật gắn với quá trình hình thành, tồn tại, phát triển và tiêu vong của chúng
QN=215 Sản xuất hàng hoá xuất hiện dựa trên: | Phân công lao động xã hội và chế độ tư hữu hoặc những hình thức sở hữu khác nhau về TLSX.
QN=24 Quan điểm nào góp phần khắc phục tư tưởng bảo thủ, trì trệ, định kiến trong hoạt động nhận thức và hoạt động thực tiễn | Quan điểm toàn diện
QN=412 Tiền tệ ra đời là do nhu cầu nào sau đây | Lưu thông hàng hóa
QN=346 Tư bản bất biến (c) và tư bản khả biến (v) thuộc phạm trù tư bản nào? | Tư bản tiền tệ.
QN=149 Trong quan hệ biện chứng giữa lực lượng sản xuất với quan hệ sản xuất, chủ nghĩa duy vật lịch sử khẳng định | Lực lượng sản xuất quyết định quan hệ sản xuất
QN=89 Cơ sở hạ tầng của một hình thái kinh tế - xã hội là | Toàn bộ những quan hệ sản xuất tạo thành cơ sở kinh tế của xã hội.
QN=262 Đối tượng nghiên cứu của kinh tế- chính trị Mác-Lênin là | Quan hệ sản xuất trong mối quan hệ tác động qua lại với lực lượng sản xuất và kiến trúc thượng tầng.
QN=330 Chế độ tham dự của tư bản tài chính được thiết lập do: | Số cổ phiếu khống chế
QN=428 Cách mạng Xã hội chủ nghĩa là: | Tất cả các phương án trên
QN=174 Lượng giá trị của hàng hóa là yếu tố | Cố định
QN=436 Một trong những đặc điểm của sứ mệnh lịch sử của giai cấp công nhân là: | Lãnh đạo nhân dân lao động đấu tranh xóa bỏ chế độ tư bản chủ nghĩa, xóa bỏ chế độ người bóc lột người
QN=27 Vật chất là tất cả những gì | Tồn tại ở bên ngoài ý thức, được ý thức con người phản ánh
QN=184 Chỉ có sản phẩm của những lao động tư nhân độc lập và không phụ thuộc vào nhau mới đối diện với nhau như | Những hàng hóa
QN=37 Định nghĩa vật chất của Lênin được viết trong tác phẩm: | Chủ nghĩa duy vật và chủ nghĩa kinh nghiệm phê phán
QN=246 Chọn ý đúng trong các ý dưới đây: | Các phương án trả lời đều đúng
QN=349 Giá trị cá biệt của hàng hoá do: | Hao phí lao động cá biệt của người sản xuất quyết định
QN=426 Hệ thống các nước xã hội chủ nghĩa ra đời từ: | Sau chiến tranh thế giới lần thứ hai
QN=220 Nguyên nhân của cách mạng xã hội là | Mâu thuẫn giai cấp
QN=274 Tiêu chí nào là quan trọng nhất để phân biệt các hình thái kinh tế - xã hội? | Quan hệ sản xuất
QN=260 Căn cứ vào đâu để chia ra thành tái sản xuất giản đơn và tái sản xuất mở rộng? | Căn cứ vào quy mô
QN=13 Quan điểm nào sau đây đúng nhất | Phạm trù là kết quả của quá trình nhận thức, là hình ảnh chủ quan của thế giới khách quan.
QN=43 Quy luật được coi là hạt nhân của phép biện chứng duy vật là | Quy luật từ những thay đổi về lượng dẫn đến những thay đổi về chất và ngược lại
QN=396 Phương pháp luận là lý luận chung về | Phương pháp
QN=7 Triết học Mác là thế giới quan khoa học của | Giai cấp công nhân
QN=23 Tổng hợp tất cả những mặt, những mối liên hệ tất nhiên, tương đối ổn định bên trong sự vật, quy định sự vận động và phát triển của sự vật được gọi là | Bản chất
QN=271 Các tổ chức độc quyền hình thành trên cơ sở | Liên kết dọc và liên kết ngang
QN=423 Giai cấp công nhân là gì? | Tất cả các phương án trên đều đúng
QN=316 Tính chất của tư bản bất biến (c) là: | Giá trị của nó không thay đổi về lượng và được chuyển nguyên vẹn sang sản phẩm
QN=288 Lượng giá trị của đơn vị hàng hoá thay đổi | Tỷ lệ nghịch với năng suất lao động, không phụ thuộc vào cường độ lao động.
QN=144 Đấu tranh giai cấp nhằm | Bảo vệ lợi ích chung cho tất cả các thành viên trong xã hội
QN=207 Chọn các ý đúng về tăng NSLĐ và tăng cường độ lao động: | Tăng NSLĐ làm cho số sản phẩm làm ra trong một đơn vị thời gian tăng lên, còn giá trị 1 đơn vị hàng hoá thay đổi.
QN=20 Tác phẩm nào được xem là đánh dấu cho sự chín muồi về tư tưởng xã hội chủ nghĩa của C.Mác và Ăng-ghen | Tuyên ngôn của Đảng cộng sản (1848)
QN=254 Tăng NSLĐ và tăng cường độ lao động giống nhau ở: | Đều làm tăng số sản phẩm sản xuất ra trong một thời gian
QN=286 Quan hệ nào giữ vai trò quyết định trong quan hệ sản xuất: | Quan hệ sở hữu
QN=142 Nhà nước có | Ba đặc trưng
QN=117 Bản chất của triết học duy tâm như thế nào | Không hoàn toàn phản khoa học
QN=26 Mối liên hệ có những tính chất gì cơ bản | Khách quan, phổ biến, đa dạng
QN=178 Theo quan điểm của KTCT Mác- Lênin, khủng hoảng kinh tế của chủ nghĩa tư bản mang tính | Khách quan
QN=403 Giá cả ruộng đất phụ thuộc các nhân tố nào? | Mức địa tô của đất
QN=355 Khi nào sức lao động trở thành hàng hoá một cách phổ biến? | Trong nền sản xuất hàng hoá TBCN.
QN=321 Tư bản cố định và tư bản lưu động thuộc phạm trù tư bản nào? | Tư bản sản xuất.
QN=291 Khi nào QHSX được xem là phù hợp với tính chất và trình độ phát triển của lực lượng sản xuất? | Thúc đẩy lực lượng sản xuất phát triển
QN=213 Trong kinh tế hàng hóa, cạnh tranh có tác dụng | Nó buộc người sản xuất phải thường xuyên năng động, nhạy bén.
QN=301 Những nhận xét dưới đây về phương pháp sản xuất giá trị thặng dư tuyệt đối, nhận xét nào là không đúng? | Ngày lao động không thay đổi.
QN=266 Loại tái sản xuất nào làm tăng sản phẩm chủ yếu do tăng năng suất lao động và hiệu quả sử dụng các nguồn lực? | Tái sản xuất mở rộng theo chiều sâu
QN=324 Mức độ giàu có của xã hội phụ thuộc chủ yếu vào: | Trình độ khoa học công nghệ
QN=381 Quá trình lưu thông tư bản bao gồm | Tuần hoàn và chu chuyển tư bản
QN=240 Cách mạng xã hội chủ nghĩa là cách mạng triệt để nhất bởi vì | Giải phóng người lao động ra khỏi áp bức, bóc lột và bất công
QN=318 Chọn ý đúng về quan hệ cung - cầu đối với giá trị, giá cả: | Có ảnh hưởng tới giá cả thị trường
QN=450 Đặc điểm về kinh tế của thời kỳ quá độ lên chủ nghĩa xã hội? | Tồn tại nền kinh tế nhiều thành phần
QN=73 Những ý thức lạc hậu tiêu cực không mất đi một cách dễ dàng, là do | Các phương án trả lời đều đúng
QN=14 Tư tưởng nôn nóng, đốt cháy giai đoạn phản ánh trực tiếp việc | Không vận dụng đúng quy luật từ những thay đổi về lượng dẫn đến những thay đổi về chất và ngược lại
QN=78 Cặp phạm trù nguyên nhân, kết quả chỉ ra | Một kết quả có thể được tạo ra bởi nhiều nguyên nhân khác nhau
QN=392 Kiến trúc thượng tầng là phạm trù dùng để chỉ | Toàn bộ quan điểm, tư tưởng hình thành trên cơ sở phản ánh cơ sở hạ tầng
QN=110 Phương pháp luận là lý luận chung về | Phương pháp
QN=469 Sự sụp đổ của chế độ XHCN ở Liên Xô và Đông Âu làm cho: | Tính chất và nội dung của thời đại ngày nay không thay đổi
QN=474 Liên Xô và Đông Âu đã có thời gian từng được gọi là: | Thành trì Xã hội chủ nghĩa
QN=50 Cái tất nhiên là cái do | Những nguyên nhân bên trong sự vật quy định.
QN=87 Khả năng là phạm trù triết học dung để chỉ những gì | Sẽ tồn tại khi có đủ điều kiện
QN=448 Khái niệm Văn hóa là gì? | Toàn bộ những sáng tạo vật chất và tinh thần của con người
QN=159 Lực lượng sản xuất là phạm trù dùng để chỉ | Năng lực sản xuất của con người
QN=290 Đối tượng lao động trong KTCT được quan điểm là | Các phương án trả lời đều đúng
QN=134 Vấn đề cơ bản của triết học là | Quan hệ giữa vật chất và ý thức
QN=264 Trên phương diện KTCT, tái sản xuất là: | Là quá trình sản xuất được lặp đi lặp lại và phục hồi không ngừng.
QN=329 Sở hữu độc quyền nhà nước là sự kết hợp của | Sở hữu nhà nước và sở hữu độc quyền tư nhân
QN=272 Quá trình sản xuất là sự kết hợp của các yếu tố: | Sức lao động với đối tượng lao động và tư liệu lao động
QN=432 Nguyên nhân sâu xa của cách mạng xã hội chủ nghĩa do đâu? | Mâu thuẫn giữa giai cấp tư sản và giai cấp vô sản
QN=218 Quan hệ sản xuất được hình thành do yếu tố nào sau đây quyết định: | Do tính chất và trình độ phát triển của lực lượng sản xuất
QN=197 Tính chu kỳ của tuần hoàn tư bản gọi là | Chu chuyển tư bản
QN=386 Theo quan điểm của Triết học Mác-Lênin, có thể định nghĩa về vật chất như sau | Vật chất là thực tại khách quan
QN=52 Vận động là | Mọi sự thay đổi nói chung của các sự vật hiện tượng trong không gian và thời gian
QN=132 Các định nghĩa sau đây, định nghĩa nào phù hợp nhất theo quan điểm của chủ nghĩa duy vật biện chứng | Nguyên nhân là phạm trù triết học dùng đề chỉ sự tác động qua lại giữa các mặt, các yếu tố bên trong sự vật hay giữa sự vật này với sự vật khia tạo ra những biến đổi nhất định
QN=165 Giá trị sử dụng của hàng hóa phản ánh tính chất nào sau đây | Tính chất tư nhân của hàng hóa
QN=119 Điểm chủ yếu nhất để phân biệt con người với con vật | Các phương án trả lời đều đúng
QN=164 Sản xuất hàng hóa ra đời dựa trên mấy điều kiện sau đây | Hai điều kiện
QN=419 Giai cấp công nhân là giai cấp duy nhất có sứ mệnh lịch sử lãnh đạo quần chúng nhân dân lật đổ CNTB xây dựng CNXH vì: | Là giai cấp nghèo khổ nhất
QN=212 Cạnh tranh trong chủ nghĩa tư bản dẫn đến | Độc quyền
QN=339 Lợi nhuận có nguồn gốc từ: | Lao động không được trả công
QN=49 Thống nhất của hai mặt đối lập là | Sự nương tựa lẫn nhau, tồn tại không tách rời nhau, mặt này lấy mặt kia làm tiền đề cho sự tồn tại của mình và ngược lại.
QN=348 Ai là người đầu tiên chia tư bản sản xuất thành tư bản bất biến (c) và tư bản khả biến (v)? | Mác
QN=147 Ý thức xã hội là phạm trù triết học dùng để chỉ | Toàn bộ đời sống tinh thần của xã hội
QN=9 Quan điểm nào cho rằng sự phát triển chỉ là sự tăng, giảm đơn thuần về mặt lượng, không có sự thay đổi về chất | Quan điểm siêu hình
QN=305 Dựa vào căn cứ nào để chia tư bản ra thành tư bản cố định và tư bản lưu động. | Phương thức chuyển giá trị của các bộ phận tư bản sang sản phẩm
QN=200 Phát hành tiền tệ phải tuân theo quy luật nào sau đây | Quy luật lưu thông tiền tệ
QN=241 Yếu tố chủ thể của lực lượng sản xuất là: | Con người với kỹ năng, kỹ xảo và tri thức được tích luỹ lại
QN=206 Chi phí sản xuất tư bản xét về lượng luôn luôn | Nhỏ hơn chi phí sản xuất thực tế
QN=252 Hoạt động nào của con người được coi là cơ bản nhất và là cơ sở của đời sống xã hội? | Hoạt động sản xuất của cải vật chất
QN=306 Các cặp phạm trù nào thuộc về lý luận tái sản xuất xã hội bao gồm | Các phương án trả lời đều đúng
QN=60 Mặt đối lập là | Những mặt, yếu tố, thuộc tính, khuynh hướng phát triển trái ngược nhau, cấu tạo nên sự vật
QN=351 Giá trị xã hội của hàng hoá công nghiệp và nông nghiệp giống nhau ở chỗ dựa trên: | Hao phí lao động xã hội cần thiết
QN=190 Giá trị thặng dư siêu ngạch là hình thức | Biến tướng của giá trị thặng dư tương đối
QN=58 Động lực chủ yếu của sự tiến bộ xã hội là | Sự phát triển của lực lượng sản xuất.
QN=30 Phát triển là quá trình | Tiến lên theo đường quanh co khúc khuỷu, thăng trầm, phức tạp
QN=166 Quá trình sản xuất tư bản là quá trình sản xuất | Giá trị thặng dư
QN=465 Dân tộc được hiểu là gì? | Tất cả các phương án trên
QN=189 Trong sản xuất hành hóa tư bản, cạnh tranh giữa các nghành dẫn đến hình thành | Giá cả sản xuất
QN=431 Đặc trưng cơ bản của nhà nước xã hội chủ nghĩa là gì? | Tất cả các phương án trả lời đều đúng
QN=404 Theo Mác và Ăng Ghen, vận dụng triết học của hai ông vào thực tế phải | Tùy thuộc vào hoàn cảnh lịch sử cụ thể
QN=15 Chân lý có những tính chất gì | Tính khách quan, tính tuyệt đối, tính tương đối, tính cụ thể
QN=55 Hình thức cao nhất của nhận thức lý tính là | Suy luận
QN=265 Trên giác độ KTCT, cầu được hiểu là | Nhu cầu có khả năng thanh toán của xã hội
QN=472 Có mấy hình thức quá độ lên chủ nghĩa xã hội? | Hai
QN=8 Trong chỉ đạo thực tiễn cần căn cứ vào đâu để đề ra chủ trương, phương hướng hành động | Cái tất nhiên, bản chất, nội dung.
QN=186 Sản xuất giá trị thặng dư là quy luật kinh tế | Tuyệt đối của chủ nghĩa tư bản
QN=336 Tư bản cố định có vai trò gì? | Là điều kiện để tăng năng suất lao động.
QN=395 Triết học Mác-Lênin ra đời một phần là kết quả kế thừa trực tiếp từ | Thế giới quan duy vật của Phơ bách và phép biện chứng của Hê Ghen
QN=224 Hai hàng hoá trao đổi được với nhau vì: | Chúng cùng là sản phẩm của lao động.
QN=328 Lưu thông hàng hoá dựa trên nguyên tắc ngang giá. Điều này được hiểu như thế nào là đúng? | Giá cả có thể tách rời giá trị và xoay quanh giá trị của nó
QN=453 Đặc điểm về chính trị, văn hóa- xã hội trong thời kỳ quá độ lên chủ nghĩa xã hội? | Còn tồn tại nhiều giai cấp và tầng lớp khác nhau
QN=242 Trong kinh tế chính trị Mác-Lênin, cung là phạm trù kinh tế dùng để chỉ | Mọi hàng hoá có khả năng đáp ứng nhu cầu thị trường
QN=462 Hiện nay Đảng và nhân dân Việt Nam đang xây dựng nhà nước theo kiểu nào? | Pháp quyền XHCN
QN=287 Khẳng định nào đúng trong những khẳng định sau: | Sản xuất hàng hóa có ở mọi phương thức sản xuất trong lịch sử
QN=384 Định nghĩa vật chất của Lênin đã giải quyết đúng đắn vấn đề nào sau đây | Vấn đề cơ bản của triết học
QN=141 "Cái riêng" là phạm trù triết học dùng để chỉ | Những sự vật hiện tượng cụ thể
QN=201 Tiền tệ có mấy chức năng cơ bản | Năm chức năng
QN=59 Nội dung của mối quan hệ biện chứng giữa vật chất và ý thức là | Vật chất có trước, ý thức có sau, vật chất quyết định ý thức
QN=280 Thuật ngữ giai cấp công nhân và giai cấp vô sản | Đồng nghĩa
QN=221 Lực lượng sản xuất biểu hiện: | Quan hệ con người với tự nhiên
QN=158 Tồn tại xã hội gồm ba yếu tố cấu thành đó là | Phương thức sản xuất, điều kiện dân số, điều kiện tự nhiên địa lý
QN=6 Có phải vật chất quyết định ý thức một cách tuyệt đối hay không | Không
QN=439 Mục tiêu giai đoạn thứ nhất của cách mạng XHCN là gì? | Giành chính quyền về tay giai cấp công nhân và nhân dân lao động.
QN=192 Lượng giá trị của hàng hóa được đo bằng đơn vị nào sau đây | Thời gian lao động
QN=295 Nền kinh tế tri thức được xem là: | Một nấc thang phát triển của lực lượng sản xuất.
QN=222 "Những thời đại kinh tế khác nhau không phải ở chỗ chúng sản xuất ra cái gì, mà là ở chỗ chúng sản xuất bằng cách nào, với những tư liệu lao động nào". Câu nói trên là của ai? | Mác
QN=357 Mục đích trực tiếp của nền sản xuất TBCN là: | Tạo ra ngày càng nhiều giá trị thặng dư.
QN=467 CNXH bắt đầu rơi vào tình trạng trì trệ, khủng hoảng trong giai đoạn nào? | Từ những năm 70 đến cuối những năm 80
QN=114 Theo quan điểm của triết học Mác- Lênin, đứng im là | Vận động trong thăng bằng
QN=363 Sự phân chia tư bản thành tư bản bất biến và tư bản khả biến là để biết: | Nguồn gốc của giá trị thặng dư.
QN=209 Để xem xét, giải thích nguồn gốc sâu xa của các hiện tượng kinh tế- xã hội phải xuất phát từ: | Ý thức xã hội
QN=4 Phạm trù triết học nào sau đây dùng để chỉ tổng hợp tất cả những mặt, những yếu tố, những quá trình tạo nên sự vật | Nội dung
QN=109 Nền tảng lý luận của chủ nghĩa Mác-Lênin là | Triết học
QN=81 Theo sự phát triển của xã hội, thứ tự phát triển của các hình thức cộng đồng trong lịch sử là | Thị tộc - Bộ lạc - Bộ tộc - Dân tộc
QN=361 Trong phương pháp sản xuất giá trị thặng dư tuyệt đối, người lao động muốn giảm thời gian lao động trong ngày còn nhà tư bản lại muốn kéo dài thời gian lao động trong ngày. Giới hạn tối thiểu của ngày lao động là bao nhiêu? | Lớn hơn thời gian lao động cần thiết.
QN=435 Đảng cộng sản Việt Nam được thành lập là do: | Tất cả các phương án trên
QN=75 Sự phản ánh của ý thức mang tính | Chủ động, tích cực và sáng tạo
QN=130 Cái chung là phạm trù triết học dùng để chỉ | Những thuộc tính tồn tại trong nhiều sự vật hiện tượng
QN=446 Nền văn hóa xã hội chủ nghĩa mang tính chất gì? | Tất cả các phương án trả lời đều đúng
QN=275 Chủ nghĩa tư bản độc quyền nhà nước là sự liên minh giữa nhà nước tư bản với | Các tổ chức độc quyền
QN=438 Cách mạng XHCN là: | Cuộc cách mạng cuối cùng trong xã hội có sự phân chia giai cấp
QN=80 Bản chất của con người được quyết định bởi | Các quan hệ xã hội
QN=161 Mức độ bóc lột của nhà tư bản được tính bằng | Tỷ suất giá trị thặng dư
QN=397 Chủ nghĩa duy vật biện chứng xác định tính chất quan hệ giữa hai phạm trù nguyên và kết quả là tính | Sản sinh
QN=216 Ai là người được coi là nhà kinh tế thời kỳ công trường thủ công? | Smith
QN=379 Quan điểm nào sau đây phản ánh đầy đủ nội dung khái niệm tồn tại xã hội | Tồn tại xã hội là phạm trù dùng chỉ toàn bộ điều kiện vật chất của xã hội
QN=40 Triết học Mác-Lênin ra đời một phần là kết quả kế thừa trực tiếp từ | Thế giới quan duy vật của Phơ bách và phép biện chứng của Hêghen
QN=62 Hình thức cao nhất của nhận thức cảm tính là | Biểu tượng
QN=229 Quan hệ sản xuất bao gồm: | Quan hệ về sở hữu tư liệu sản xuất, quan hệ về tổ chức quản lý sản xuất xã hội và quan hệ về phân phối sản phẩm xã hội.
QN=463 Dân tộc được hiểu là gì? | Tất cả các phương án trên
QN=325 Giá cả ruộng đất phụ thuộc các nhân tố nào? | Mức địa tô của đất
QN=459 Nền văn hóa Việt Nam có tính chất gì? | Tất cả các phương án trên
QN=475 Cuộc cải tổ của Liên Xô bắt đầu từ năm nào? | Không có phương án trả lời nào đúng
QN=98 Quan điểm nào dưới đây phù hợp lý nhất | Đấu tranh giai cấp là một trong những động lực phát triển của xã hội của giai cấp
QN=376 Ý thức xã hội phản ánh tồn tại xã hội dưới hai trình độ khác nhau đó là | Tâm lý xã hội và hệ tư tưởng
QN=100 Đặc trưng chủ yếu của cách mạng xã hội | Sự thay đổi chính quyền nhà nước từ tay giai cấp thống trị đã lỗi thời sang tay giai cấp cách mạng.
QN=127 Quan điểm lịch sử cụ thể được rút ra từ nghiên cứu nguyên lý triết học nào sau đây | Nguyên lý phát triển
QN=317 Về kinh tế, xuất khẩu tư bản nhà nước nhằm mục đích: | Tạo môi trường thuận lợi cho xuất khẩu tư bản tư nhân.
QN=111 Khuynh hướng chung của phát triển là | Vận động theo đường xoáy ốc
QN=296 Vai trò của máy móc trong quá trình tạo ra giá trị thặng dư, chọn ý đúng: | Máy móc là tiền đề vật chất cho việc tạo ra giá trị thặng dư.
QN=299 Cơ chế kinh tế của CNTB độc quyền nhà nước gồm: | Cơ chế thị trường, độc quyền tư nhân và sự can thiệp của nhà nước
QN=153 Sản xuất vật chất có vai trò gì đối với xã hội | Quyết định sự tồn tại và phát triển xã hội
QN=183 Trong sản xuất hàng hóa tư bản, cạnh tranh trong nội bộ nghành dẫn đến sự hình thành | Giá cả sản phẩm thị trường
QN=120 Trong xã hội có giai cấp, tính chất kế thừa của ý thức xã hội có gắn với tính chất giai cấp của nó không | Có kế thừa
QN=157 Theo quan điểm của chủ nghĩa duy vật biện chứng lịch sử xã hội loài người đã trải qua bao nhiêu hình thái kinh tế xã hội | Bốn hình thái kinh tế xã hội
QN=105 Theo quan điểm của chủ nghĩa duy vật biện chứng, quan điểm phát triển trong xem xét và đánh giá sự vật đòi hỏi | Bảo vệ cái mới, ủng hộ cái mới, đấu tranh cho cái mới nhưng không phủ định sạch trơn cái cũ
QN=121 Các quan điểm nào sau đây phản ánh đúng nhất nội dung khái niệm phương thức sản xuất. | Phương thức sản xuất là cách thức sản xuất ra của cải vật chất trong từng giai đoạn lịch sử xã hội nhất định
QN=247 Trong thời đại ngày nay, lực lượng sản xuất bao gồm các yếu tố nào? | Khoa học công nghệ
QN=248 Trên giác độ KTCT, lao động trừu tượng là | Là phạm trù của mọi nền kinh tế hàng hoá
QN=29 Triết học do C.Mác và Ph.Ăng-ghen thực hiện là bước ngoặt cách mạng trong sự phát triển của triết họBiểu hiện vĩ đại nhất của bước ngoặt cách mạng đó là | Việc sáng tạo ra chủ nghĩa duy vật lịch sử làm thay đổi hẳn quan niệm của con người về xã hội.
QN=101 Quan điểm toàn diện được rút ra từ việc nghiên cứu nguyên lý triết học nào sau đây | Nguyên lý về mối liên hệ phổ biến
QN=320 Mâu thuẫn cơ bản về lao động của sản xuất hàng hoá giản đơn là | Giữa lao động tư nhân với lao động xã hội
QN=176 Vai trò của các bộ phận tư bản trong chu chuyển tư bản được xác định trong phạm trù nào sau đây | Tư bản cố định và tư bản lưu động
QN=82 Cái chung chỉ tồn tại trong | Cái riêng
QN=11 Quan hệ sản xuất là quan hệ giữa người với người trong quá trình sản xuất, nó là quan hệ | Tồn tại chủ quan bởi những người lãnh đạo các cơ sở sản xuất.
QN=185 Khối lượng giá trị thặng dư được tính bằng công thức nào sau đây | M = m' x v
QN=154 Quan điểm nào sau đây phản ánh đầy đủ nội dung khái niệm tồn tại xã hội | Tồn tại xã hội là phạm trù dùng chỉ toàn bộ điều kiện vật chất của xã hội
QN=407 Khẳng định mối liên hệ giữa các sự vật, hiện tượng do sự quy định của các lực lượng siêu nhiên là quan điểm của | Chủ nghĩa duy tâm khách quan
QN=32 Không có hình thức nào tồn tại thuần túy không chứa nội dung, và cũng không có nội dung nào lại không tồn tại trong những hình thức xác định. Quan điểm này thể hiện | Sự thống nhất giữa nội dung và hình thức
QN=406 Sản xuất vật chất có vai trò gì đối với xã hội | Quyết định sự tồn tại và phát triển xã hội
QN=203 Tiền tệ ra đời là do nhu cầu nào sau đây | Lưu thông hàng hóa
QN=104 Hạt nhân cơ bản trong quần chúng nhân dân | Những người lao động sản xuất ra của cải vật chất.
QN=335 Trên giác độ KTCT, mục tiêu cuối cùng của xuất khẩu tư bản là: | Chiếm đoạt giá trị thặng dư và các nguồn lợi khác ở nước nhập khẩu tư bản
QN=421 Thời đại quá độ từ chủ nghĩa tư bản lên chủ nghĩa xã hội được bắt đầu từ sau: | Cách mạng tháng hai năm 1917
QN=85 Cách mạng xã hội được khái quát bởi | Thay đổi thể chế chính trị xã hội này bằng thể chế chính trị khác
QN=251 Chủ nghĩa tư bản độc quyền nhà nước hình thành dựa trên mấy nguyên nhân | Bốn nguyên nhân
QN=99 Trong xã hội có giai cấp , ý thức xã hội của các giai cấp có nội dung và hình thức phát triển khác nhau là do | Những điều kiện sinh hoạt vật chất, lợi ích và địa vị của các giai cấp khác nhau
QN=323 Phương pháp sản xuất giá trị thặng dư tuyệt đối và phương pháp sản xuất giá trị thặng dư tương đối có điểm nào giống nhau? | Đều làm tăng tỷ suất giá trị thặng dư.
QN=340 Trong cơ chế của CNTB độc quyền nhà nước thì: | Nhà nước phụ thuộc vào tổ chức độc quyền
QN=359 Quy luật chung của tích luỹ tư bản là gì? ý nào sau đây không đúng: | Giai cấp tư sản ngày càng giàu có, mâu thuẫn trong CNTB tăng lên.
QN=399 Tính chất phong phú, đa dạng trong quan hệ nhân quả thể hiện ở chỗ một kết quả có thể do | Nhiều nguyên nhân khác nhau sinh ra
QN=162 Giá trị sử dụng của hàng hóa là khái niệm dùng để chỉ | Công dụng của hàng hóa
QN=182 Trên quan điểm kinh tế chính trị Mác- Lênin, nguyên nhân làm cho khoa học kỹ thuật càng phát triển là do | Nhu cầu vật chất của con người ngàu càng phong phú và đa dạng
QN=369 Trên giác độ KTCT, chi phí sản xuất tư bản được quan điểm là: | Chi phí tư bản (c) và (v).
QN=302 Chi phí thực tế của xã hội để sản xuất hàng hoá là: | Chi phí lao động sống và lao động quá khứ
QN=389 Lượng giá trị của hàng hóa được đo bằng đơn vị nào sau đây | Thời gian lao động
QN=298 Sản xuất và lưu thông hàng hoá chịu sự chi phối của những quy luật kinh tế nào? | Các phương án trả lời đều đúng
QN=468 Về bản chất của nhà nước CHXHCN Việt Nam được ghi trong điều nào của Hiến Pháp 1992? | Điều 4
QN=95 Sự phát triển của các hình thái kinh tế - xã hội là | Quá trình phát triển của lịch sự tự nhiên.
QN=86 Quan hệ sản xuất là phạm trù dùng để chỉ | Quan hệ giữa người với người trong quá trình sản xuất
QN=393 Chi phí thực tế của xã hội để sản xuất hàng hoá là | Chi phí lao động sống và lao động quá khứ
QN=232 Quan hệ sản xuất biểu hiện: | Quan hệ kinh tế giữa người với người trong quá trình sản xuất
QN=172 Trong sản xuất hàng hóa tồn tại song song bao nhiêu mặt | Hai mặt
QN=2 Các mối liên hệ mang tính khách quan, bản chất, tất nhiên và được lặp đi lặp lại được khái quát bằng phạm trù gì | Quy luật
QN=76 Sự ra đời và tồn tại của nhà nước | Là hiện tượng mang tính khách quan, bị quyết định bởi quá trình phát triển của xã hội.
QN=205 Lao động trừu tượng tạo ra yếu tố nào sau đây | Giá trị của hàng hóa
QN=433 Trong tuyên ngôn của những người cộng sản Mác viết: | Vô sản các nước và các dân tộc bị áp bức đoàn kết lại
QN=68 Triết học duy vật biện chứng cho rằng | Vật chất quyết định ý thức, ý thức tác động trở lại vật chất
QN=415 Không có hình thức nào tồn tại thuần túy không chứa nội dung, và cũng không có nội dung nào lại không tồn tại trong những hình thức xác định. Quan điểm này thể hiện | Sự thống nhất giữa nội dung và hình thức
QN=315 Bản chất của khủng hoảng kinh tế là: | Khủng hoảng sản xuất "thừa" so với sức mua có hạn của quần chúng
QN=390 Lao động trừu tượng tạo ra yếu tố nào sau đây | Giá trị của hàng hóa
QN=116 "Nguyên nhân" là phạm trù triết học dùng để chỉ | Những tác động giữa các mặt các yếu tố bên trong sự vật hay giữa sự vật này với sự vật kia gây ra những biến đổi nhất định.
QN=38 Quan điểm nào cho rằng các sự vật, hiện tượng tồn tại biệt lập, tách rời nhau | Quan điểm siêu hình
QN=365 Cạnh tranh giữa các ngành xảy ra khi có sự khác nhau về | Tỷ suất lợi nhuận
QN=152 Quan điểm nào dưới đây phù hợp nhất trên quan điểm của chủ nghĩa duy vật lịch sử trong nghiên cứu phương thức sản xuất | Lực lượng sản xuất là năng lực sản xuất của con người
QN=258 Chủ nghĩa tư bản được xem là | Không phải là tương lai của xã hội loài người
QN=343 Khi lạm phát phi mã xảy ra, hình thức sử dụng tiền nào có lợi nhất? | Mua hàng hoá hoặc vàng cất giữ
QN=409 Lực lượng sản xuất là khái niệm dùng để chỉ | Quan hệ giữa con người với tự nhiên trong quá trình sản xuất
QN=422 Cách mạng xã hội chủ nghĩa theo nghĩa hẹp là gì? | Cuộc cách mạng về kinh tế
QN=257 Thuật ngữ "kinh tế- chính trị" được sử dụng lần đầu tiên vào năm nào? | 1615
QN=394 Giá trị của hàng hoá được quyết định bởi | Sự hao phí sức lao động của con người
QN=342 Bản chất của CNTB độc quyền nhà nước là: | Sự kết hợp tổ chức độc quyền tư nhân và nhà nước tư sản
QN=460 Dân chủ được xem xét dưới góc độ nào? | Phạm trù chính trị.
QN=471 Hình thức đầu tiên của chuyên chính vô sản là gì? | Công xã Pari.
QN=256 Ai là người phát hiện ra tính chất hai mặt của lao động sản xuất hàng hoá? | Mác
QN=457 Trong lịch sử xã hội loài người đã từng xuất hiện các chế độ dân chủ nào sau đây? | Chủ nô, tư sản, vô sản.
QN=449 Con người trong chủ nghĩa xã hội được phát triển như thế nào? | Tất cả các phương án trả lời đều đúng
QN=107 Triết học duy vật biện chứng là sự thống nhất giữa | Thế giới quan duy vật và phương pháp luận biện chứng
QN=391 Căn cứ vào đâu để chia ra thành tái sản xuất giản đơn và tái sản xuất mở rộng? | Căn cứ vào phạm vi
QN=16 Quy luật bao giờ cũng mang tính | Khách quan
QN=115 Theo quan điểm của chủ nghĩa duy vật biện chứng, trong thực tế chúng ta phải | Dựa vào tất nhiên, đề phòng ngẫu nhiên
QN=118 Ngẫu nhiên là phạm trù triết học dùng để chỉ | Những gì sẽ xuất hiện do nguyên nhân bên ngoài quyết định
QN=420 Sự sụp đổ của Liên Xô và Đông Âu là sự sụp đổ của: | Một mô hình của CNXH không phù hợp
QN=239 Chọn ý đúng về tăng cường độ lao động: khi cường độ lao động tăng lên thì: | Số lượng hàng hoá làm ra trong một đơn vị thời gian tăng lên
QN=84 Nguồn gốc tự nhiên của ý thức là | Thế giới vật chất và bộ não con người
QN=33 Giữa phạm trù triết học và phạm trù của các khoa học khác có mối quan hệ biện chứng với nhau. Mối quan hệ đó là | Quan hệ giữa cái chung và cái riêng
QN=227 Ai là người được Mác coi là sáng lập ra kinh tế chính trị tư sản cổ điển? | W.Petty
QN=17 Ý nghĩa định nghĩa vật chất của Lênin được thể hiện: | Các phương án trả lời đều đúng
QN=322 Các luận điểm dưới đây, luận điểm nào sai? | Bóc lột sản phẩm thặng dư chỉ có ở CNTB.
QN=123 Khi xác định tính chất của phạm trù "Cái chung", triết học Mác- Lênin khẳng định cái chung là cái | Bản chất
QN=199 Phân công lao động xã hội được xác định là | Một trong những nguyên nhân hình thành chủ nghĩa tư bản độc quyền
QN=137 Đặc điểm của tâm lý xã hội là phản ánh điều kiện sinh sống hàng ngày của con người | Các phương án trả lời đều đúng
QN=19 Đấu tranh của hai mặt đối lập là | Sự tác động qua lại theo xu hướng bài trừ và phủ định lẫn nhau.
QN=70 Nền tạng quan hệ giữa các nhân và xã hội là | Lợi ích
QN=350 Trên giác độ KTCT, chi phí sản xuất tư bản được quan điểm là: | Chi phí tư bản (c) và (v).
QN=145 "Cái đơn nhất" là phạm trù triết học dùng để chỉ | Thuộc tính tồn tại duy nhất ở một sự vật
QN=63 Chân lý là | Sự phù hợp giữa tri thức với hiện thực khách quan và được thực tiễn kiểm nghiệm
QN=140 Triết học nhị nguyên cho rằng | Vật chất và ý thức đều là nguồn gốc và bản chất của thế giới
QN=126 Biện chứng là phương pháp của khoa học nào sau đây | Triết học
QN=196 Trong sản xuất giá trị thặng dư, có hai phương pháp sản xuất giá trị thặng dư chủ yếu đó là | Phương pháp sản xuất giá trị thặng dư tuyệt đối và phương pháp sản xuất giá trị thặng dư tương đối
QN=319 Các tổ chức độc quyền sử dụng giá cả độc quyền để: | Củng cố vai trò tổ chức độc quyền
QN=345 Chọn định nghĩa chính xác về tư bản: | Tư bản là giá trị đem lại giá trị thặng dư bằng cách bóc lột lao động làm thuê.
QN=437 Nguyên tắc phân phối cơ bản nhất của chủ nghĩa cộng sản là gì? | Phân phối theo lao động
QN=136 Định nghĩa vật chất của Lênin đã giải quyết đúng đắn vấn đề nào sau đây | Vấn đề cơ bản của triết học
QN=281 Tích lũy tư bản dẫn đến | Hình thành chủ nghĩa tư bản độc quyền
QN=451 Giữa chủ nghĩa Mác - Lênin và hệ tư tưởng tôn giáo khác nhau ở điểm nào? | Các phương án trả lời đều đúng
QN=54 Khẳng định mối liên hệ giữa các sự vật, hiện tượng do sự quy định của các lực lượng siêu nhiên là quan điểm của | Chủ nghĩa duy tâm khách quan
QN=180 Xét về thời gian, kinh tế hàng hóa ra đời sau | Nền kinh tế tự nhiên
QN=375 Nguyên lý triết học là | Hệ thống quan điểm chung nhất, khái quát nhất của một học thuyết
QN=430 Giai cấp tư sản không thể ngờ được rằng, việc tạo ra giai cấp công nhân là: | Tạo ra vũ khí giết chính mình
QN=139 Cơ sở để phân chia triết học thành các trường phái khác nhau là | Vấn đề cơ bản của triết học
QN=347 Cặp phạm trù nào là phát hiện riêng của C.Mác? | Lao động cụ thể và lao động trừu tượng
QN=279 Trong tư liệu lao động, bộ phận nào cần được phát triển đi trước một bước so với đầu tư sản xuất trực tiếp? | Kết cấu hạ tầng sản xuất
QN=400 Lượng giá trị của hàng hóa là yếu tố | Cố định
QN=102 Ý thức là hình ảnh chủ quan của thế giới | Khách quan
QN=94 Trong lịch sử triết học, phép biện chứng có hai hình thức cơ bản đó là | Phép biện chứng duy tâm và phép biện chứng duy vật
QN=237 Trong nền sản xuất hàng hóa, lạm phát là hiện tượng kinh tế tác động trực tiếp đến | Sản xuất và tiêu dùng
QN=358 Khi tăng cường độ lao động sẽ xảy ra các trường hợp dưới đây. Trường hợp nào dưới đây là đúng? | Số lượng hàng hoá làm ra trong một đơn vị thời gian tăng
QN=374 Quan điểm nào dưới đây phản ánh đầy đủ vai trò của đấu tranh giai cấp trong xã hội phân chia giai cấp | Đấu tranh giai cấp là nguồn gốc và động lực vận động và phát triển xã hội
QN=356 Nguyên nhân của bản chất khủng hoảng kinh tế TBCN là | Bắt nguồn từ mâu thuẫn của bản chất của CNTB
QN=285 Giá trị cá biệt của hàng hoá do: | Hao phí lao động cá biệt của người sản xuất quyết định
QN=470 Sự sụp đô của Liên Xô và Đông Âu được đánh dấu từ mốc lịch sử nào? | 1991
QN=255 Quy luật kinh tế cơ bản của chủ nghĩa tư bản là | Quy luật giá trị
QN=146 Theo quan điểm của chủ nghĩa duy vật biện chứng, sự vật khi mới ra đời chúng tồn tại dưới dạng | Cái đơn nhất
QN=230 Hai hàng hoá trao đổi được với nhau vì: | Chúng cùng là sản phẩm của lao động.
QN=454 Trong ngôn ngữ Hi Lạp cổ đại, khái niệm dân chủ được hiểu là: | Quyền lực của nhân dân
QN=370 Theo quan điểm của chủ nghĩa duy vật biện chứng lịch sử xã hội loài người đã trải qua bao nhiêu hình thái kinh tế xã hội | Bốn hình thái kinh tế xã hội
QN=401 Chân lý có những tính chất gì | Tính khách quan, tính tuyệt đối, tính tương đối, tính cụ thể
QN=326 Chủ nghĩa tư bản ra đời khi: | Tư liệu sản xuất tập trung vào một số ít người còn đa số người bị mất hết TLSX.
QN=278 Cách mạng xã hội kết thúc dẫn đến | Thay thế xã hội cũ bằng xã hội mới tiến bộ hơn
QN=416 Sự thay đổi căn bản, toàn diện và triệt để một hình thái kinh tế - xã hội bằng một hình thái kinh tế - xã hội khác được gọi là: | Cách mạng xã hội.
QN=93 Nguyên nhân chủ yếu dẫn đến việc Mác và Ănghen chưa đưa ra định nghĩa hoàn chỉnh về phạm trù vật chất là do | Trình độ phát triển của khoa học chưa ngang tầm
QN=106 Quan điểm toàn diện đồi hỏi phải xem xét và đánh giá sự vật | Trong nhiều mối liên hệ khác nhau
QN=424 Mục tiêu trực tiếp của cách mạng xã hội chủ nghĩa là: | Giành chính quyền về tay giai cấp công nhân
QN=425 Nhà nước xã hội chủ nghĩa quản lý mọi mặt của đời sống xã hội bằng cách nào? | Tất cả các phương án đều đúng
QN=273 Lao động sản xuất có đặc trưng cơ bản là: | Các phương án trả lời đều đúng
QN=382 Cạnh tranh trong chủ nghĩa tư bản dẫn đến | Độc quyền
QN=263 Quy luật giá trị có tác dụng: | Các phương án trả lời đều đúng
QN=125 Chủ nghĩa duy vật biện chứng khẳng định rằng, nguyên nhân sinh ra kết quả phải có | Điều kiện
QN=170 Tích lũy tư bản là xét về bản chất là | Tư bản hóa giá trị thặng dư
QN=244 Tư liệu lao động gồm có: | Các phương án trả lới đều đúng
QN=405 Trong kinh tế chính trị Mác-Lênin, cung là phạm trù kinh tế dùng để chỉ | Mọi hàng hoá có khả năng đáp ứng nhu cầu thị trường
QN=447 Nội dung cơ bản về liên minh giai cấp trong cách mạng xã hội chủ nghĩa? | Tất cả các phương án trả lời đều đúng
QN=344 Hình thức tổ chức và cơ chế thống trị của tư bản tài chính trong CNTB ngày nay thay đổi là do: | Lực lượng sản xuất phát triển, nhiều ngành mới xuất hiện
QN=268 Hàng hóa sức lao động khác hàng hóa thông thường ở chỗ | Khi sử dụng nó sẽ có khả năng tạo ra một lượng giá trị mới lớn hơn giá trị của bản thân nó
QN=292 Trong thời đại ngày nay sở hữu nhà nước có vai trò như thế nào trong nền kinh tế tư bản | Quan trọng đối với sự vận động và phát triển của chủ nghĩa tư bản
QN=312 Việc mua bán sức lao động và mua bán nô lệ khác nhau ở đặc điểm nào? | Các phương án trả lời đều đúng.
QN=163 Tái sản xuất tư bản gồm có hai hình thức cơ bản đó là | Tái sản xuất theo chiều rộng và tái sản xuất theo chiều sâu
QN=169 Chi phí sản xuất tư bản tính bằng công thức nào sau đây | K = c + v + m
QN=65 Hiện thực là phạm trù triết học dùng để chỉ những gì | Đang tồn tại trong thực tế
QN=155 Lực lượng sản xuất là khái niệm dùng để chỉ | Quan hệ giữa con người với tự nhiên trong quá trình sản xuất
QN=168 Trong kinh tế hàng hóa, lạm phát là hiện tượng kinh tế | Bình thường
QN=69 Đặc điểm của quy luật triết học mang tính | Chung nhất, khái quát nhất về thế giới
QN=211 Phương thức sản xuất là sự thống nhất của: | Lực lượng sản xuất và quan hệ sản xuất
QN=402 Quan hệ giữ vai trò quyết định đối với những quan hệ khác trong quan hệ giữa nguời với người của quá trình sản xuất là | Quan hệ sở hữu tư liệu sản xuất.
QN=311 Vì sao trong CNTB độc quyền cạnh tranh không bị thủ tiêu? | Vì cạnh tranh là quy luật khách quan của kinh tế hàng hoá
QN=253 Thế nào là lao động phức tạp? | Là lao động phải trải qua đào tạo, huấn luyện mới làm được
QN=303 Sự hoạt động của quy luật giá trị được biểu hiện: | Các phương án trả lời đều đúng.
QN=48 Mác đã kế thừa "hạt nhân hợp lý" trong triết học của ông để xây dựng phép biện chứng duy vật. Ông là ai | Hê ghen
QN=367 Quy luật được coi là hạt nhân của phép biện chứng duy vật là | Quy luật từ những thay đổi về lượng dẫn đến những thay đổi về chất và ngược lại
QN=77 Tất nhiên là phạm trù triết học dùng để chỉ | Những gì sẽ xuất hiện do nguyên nhân bên trong quyết định
QN=202 Tiền công tư bản có hai hình thức đó là | Tiền công thực tế và tiền công danh nghĩa
QN=388 Trong quan hệ biện chứng giữa lực lượng sản xuất với quan hệ sản xuất, chủ nghĩa duy vật lịch sử khẳng định | Lực lượng sản xuất quyết định quan hệ sản xuất
QN=31 Chủ nghĩa Mác-Lênin ra đời dựa trên bao nhiêu tiền đề | Ba tiền đề
QN=151 Kiến trúc thượng tầng là phạm trù dùng để chỉ | Toàn bộ quan điểm, tư tưởng hình thành trên cơ sở phản ánh cơ sở hạ tầng
QN=438 Nguồn gốc hình thành tỷ suất lợi nhuận bình quân: | Do cạnh tranh giữa các ngành

QN=194 Trả lời theo quan điểm duy vật lịch sử, ý kiến sau đây đúng hay sai? Vì sao? "nhà nước là hiện tượng vĩnh viễn của lịch sử" | Sai. Vì: nguồn gốc ra đời của nhà nước là do mâu thuẫn giai cấp
QN=303 Nguồn gốc chủ yếu của tích lũy tư bản là: | Giá trị lao động
QN=435 Đến cuối thế kỷ XIX đầu thế kỷ XX, các nước đế quốc có thuộc địa nhiều nhất sắp xếp theo thứ tự sau: | Anh - Pháp - Nga - Mỹ
QN=179 Chọn câu trả lời đúng theo quan điểm của chủ nghĩa duy vật lịch sử: | Mối quan hệ giữa lực lượng sản xuất và quan hệ sản xuất là mối quan hệ:
QN=168 Chọn câu trả lời đúng theo quan điểm duy vật lịch sử:Xã hội có các loại hình cơ bản là: | Sản xuất ra của cải vật chất, tinh thần và con người
Ý nghĩa định nghĩa vật chất của Lênin được thể hiện: | C.Các phương án trả lời đều đúng
Nguyên nhân chủ yếu dẫn đến việc Mác và Ănghen chưa đưa ra định nghĩa hoàn chỉnh về phạm trù vật chất là do | Trình độ phát triển của khoa học chưa ngang tầm
Trong tác phẩm kinh điển nào sau đây, tác phẩm nào thể hiện sự tập trung đầy đủ nhất nội dung lý luận kinh tế chính trị học của chủ nghĩa Mác? Tác phẩm đó của ai? | Bộ Tư bản/ Mác
Chủ nghĩa Mác - Lênin là học thuyết khoa học: | D.Không ngừng phát triển trên cơ sở tổng kết những thành tựu mới của sự phát triển các khoa học và thực tiễn
Hệ thống triết học nào coi cảm giác là hình ảnh chủ quan của thế giới khách quan? | Chủ nghĩa duy vật biện chứng
Thế giới quan là: | D.Hệ thống quan niêm, quan điểm chung nhất của con người về thế giới
Có những sự vật, hiện tương sảy ra... | C.Có nguyên nhân nhưng chưa nhận thức được
Vật trong chân không luôn chuyển động với gia tốc 9,8 m/s2; nước ở áp suất 1 atmôtphe luôn sôi ở 100oC. Điều này chứng tỏ... | C.Một nguyên nhân nhất định, trong những hoàn cảnh giống nhau, sẽ tạo nên những kết quả giống nhau
Hiện thực là phạm trù triết học dùng để chỉ những gì | Đang tồn tại trong thực tế
"Cái đơn nhất" là phạm trù triết học dùng để chỉ | Thuộc tính tồn tại duy nhất ở một sự vật
Phạm trù triết học dùng để chỉ những gì chưa có, nhưng sẽ có, sẽ tới khi có điều kiện tương ứng thích hợp gọi là gì? | C.Khả năng
C.Mác và Ph.Ăngghen cho rằng: cái mà người ta quả quyết cho là...thì lại hoàn toàn do những cái...cấu thành; và cái được coi là...lại là hình thức trong đó ẩn nấp... | Tất yếu/ ngẫu nhiên; ngẫu nhiên/ tất yếu
"Kết quả" là phạm trù triết học dùng để chỉ | Những thay đổi do nguyên nhân gây ra
Chọn câu trả lời đúng theo quan điểm duy vật lịch sử: Xã hội có các loại hình cơ bản là: | D.Sản xuất ra của cải vật chất, tinh thần và con người
Chọn câu trả lời đúng:  Theo quan điểm duy vật lịch sử: | C.Quan hệ sản xuất phải phù hợp với trình độ phát triển của lực lượng sản xuất
Bộ phận nào của tư liệu lao động được coi là tiêu chí phản ánh đặc trưng phát triển của một thời đại kinh tế | Công cụ lao động
Ý thức xã hội có tính chất nào sau đây | Tính độc lập tương đối
Chọn câu trả lời đúng: Quan điểm cho rằng: "tồn tại xã hội quyết định ý thức xã hội nhưng đồng thời ý thức xã hội lại có tính độc lập tương đối của nó" là quan điểm của: | D.Chủ nghĩa duy vật lịch sử
Những cuộc cách mạng nổ ra ở Hà Lan, Anh, Pháp...thời kỳ cận đại gọi là cách mạng nào | C.Cách mạng tư sản
Trong thời kỳ phục hưng giai cấp tư sản có vị trí như thế nào đối với sự phát triển của xã hội | Là giai cấp tiến bộ, cách mạng
Thêm cụm từ vào câu sau cho thích hợp: Mâu thuẫn giữa...(1).. phép biện chứng với...(2)...của hệ thống triết học của Hêghen | C) 1- tính cách mạng; 2 - tính bảo thủ
Triết học coi vật chất và tinh thần như nhau gọi là | C Triết học nhị nguyên
Điền tập hợp từ vào chỗ trống của câu sau để được định nghĩa khái niệm nội dung: nội dung là .... những mặt, những yếu tố, những quá trình tạo nên sự vật | C Tổng hợp tất cả
Thêm cụm từ thích hợp vào chỗ trống của câu sau để được định nghĩa khái niệm kết quả: "Kết quả là ...(1).. do ...(2).. lẫn nhau giữa các mặt trong một sự vật hoặc giữa các sự vật với nhau gây ra" | C) 1- những biến đổi xuất hiện, 2- sự tác động.
QN=1 Trong chủ nghĩa Mác-Lênin, bộ phận lý luận nào có chức năng làm sáng tỏ bản chất và những quy luật chung nhất của mọi sự vận động, phát triển của thế giới là : | Triết học Mác-Lênin
QN=2 Khái niệm: "những nguyên lý cơ bản của chủ nghĩa Mác-Lênin" là chỉ: | Những quan điểm cơ bản, nền tảng và có tính chất chân lý bền vững của chủ nghĩa Mác-Lênin
QN=7 Chủ nghĩa Mác-Lênin là học thuyết khoa học: | Không ngừng phát triển trên cơ sở tổng kết những thành tựu mới của sự phát triển các khoa học và thực tiễn
QN=32 Theo quan điểm của triết học Mác-Lênin thuộc tính phản ánh là thuộc tính? | Phổ biến ở mọi tổ chức vật chất
QN=35 Xác định nội dung cơ bản trong định nghĩa của V.I.Lênin về vật chất: | Thực tại khách quan-tồn tại độc lập với ý thức và khi tác động đến giác quan con người thì có thể sinh ra cảm giác
QN=38 Vận động của tự nhiên và lịch sử chỉ là sự tha hóa sự tự vận động của ý niệm tuyệt đối. Quan niệm trên thuộc lập trường triết học nào? | Chủ nghĩa duy tâm khách quan
QN=58 Phép biện chứng nào được coi là khoa học về những quy luật phổ biến của sự vận động và sự phát triển của tự nhiên, xã hội và tư duy con người | Phép biện chứng của chủ nghĩa Mác-Lênin
QN=60 Quan niệm nào khẳng định giữa các sự vật, hiện tượng của thế giới khách quan luôn tồn tại trong tính quy định và tương tác, làm biến đổi lẫn nhau? | Quan niệm biện chứng của chủ nghĩa Mác- Lênin
QN=66 "cái riêng- cái chung" , "nguyên nhân- kết quả", "tất nhiên- ngẫu nhiên", "nội dung- hình thức", "bản chất- hiện tượng", "khả năng- hiện thực" đó là các...của triết học Mác- Lênin. | Cặp phạm trù cơ bản
QN=79 Trong các cặp khái niệm dưới đây, cặp nào có quan hệ nhân quả? | Nghèo- Dốt
QN=82 Vật trong chân không luôn chuyển động với gia tốc 9,8 m/s2; nước ở áp suất 1 atmôtphe luôn sôi ở 100oC. Điều này chứng tỏ... | Một nguyên nhân nhất định, trong những hoàn cảnh giống nhau, sẽ tạo nên những kết quả giống nhau
QN=91 Trong các cụm từ dưới đây, cụm từ nào được xem là "hình thức" trong cặp phạm trù "nội dung- hình thức" mà phép biện chứng duy vật nghiên cứu: " truyện kiều là..." | Tác phẩm thơ lục bát
QN=168 Chọn câu trả lời đúng theo quan điểm duy vật lịch sử: | Sản xuất ra của cải vật chất, tinh thần và con người
QN=179 Chọn câu trả lời đúng theo quan điểm của chủ nghĩa duy vật lịch sử: | Thống nhất và đấu tranh của các mặt đối lập
QN=186 Chọn câu trả lời đúng: | Toàn bộ hệ thống kết cấu các hình thái ý thức xã hội cùng với các thiết chế chính trị- xã hội tương ứng.
QN=194 Trả lời theo quan điểm duy vật lịch sử, ý kiến sau đây đúng hay sai? Vì sao? | Sai. Vì: nguồn gốc ra đời của nhà nước là do mâu thuẫn giai cấp không thể điều hòa được mà giai cấp không phải là hiện tượng vĩnh viễn của lịch sử
QN=104 Hạt thóc khi gieo xuống đất có thể nảy mầm thành cây lúa. Vậy hạt thóc là... | Vừa là khả năng vừa là hiện thực
QN=107 Thế nào là độ của sự vật: | Trong một giới hạn, lượng- chất thống nhất nói lên sự vật là nó
QN=142 Trong tác phẩm bút ký triết học, V.I.Lênin có ví mối quan hệ giữa "...và..." với sự vận động của một con sông- bọt ở bên trên và luồng nước sâu ở dưới. | Hiện tượng và bản chất
QN=143 Trong mối quan hệ giữa "lực lượng sản xất và quan hệ sản xuất", yếu tố nào là nội dung, yếu tố nào là hình thức? | Lực lượng sản xuất là nội dung- quan hệ sản xuất là hình thức
QN=144 Trong tác phẩm "biện chứng của tự nhiên", Ph.Ăngghen viết: toàn bộ giới tự nhiên hữu cơ là bằng chứng liên tục nói lên rằng...là đồng nhất và không thể tách rời được. | Nội dung và hình thức
QN=146 Phương pháp siêu hình thống trị triết học vào thời kỳ nào? | Thế kỷ XVII- XVIII
QN=147 V.I.Lênin nói hai quan niệm cơ bản về sự phát triển: Câu nói này của V.I.Lênin nói trong tác phẩm nào? | Những người bạn dân là thế nào và họ đấu tranh chống những người dân chủ ra sao?
QN=202 Chọn câu trả lời đúng: Quan điểm cho rằng: "tồn tại xã hội quyết định ý thức xã hội nhưng đồng thời ý thức xã hội lại có tính độc lập tương đối của nó" là quan điểm của: | Chủ nghĩa duy vật lịch sử
QN=204 Chọn câu trả lời đúng:Quan niệm cho rằng: "suy nghĩ của những người sống trong túp lều tranh luôn luôn khác với suy nghĩ của những kẻ sống trong cung điện" là quan điểm của: | Chủ nghĩa duy vật siêu hình
QN=206 Chọn câu trả lời đúng: C.Mác đã xuất phát từ quan hệ nào, coi đó là quan hệ cơ bản nhất để phân tích kết cấu của xã hội: | Quan hệ sản xuất
QN=247 Chọn câu trả lời đúng: Theo Mác, về đại thể quá trình phát triển tuần tự của xã hội loài người đã lần lượt trải qua các phương thức sản xuất: | Á châu, cổ đại, phong kiến, tư sản hiện đại
QN=464 Điền vào chỗ trống: dân tộc dùng để chỉ một cộng đồng người ổn định, bền vững hợp thành nhân dân một quốc gia...trong quá trình dựng nước và giữ nước. | Có lãnh thổ chung, có nền kinh tế thống nhất, quốc ngữ chung, có truyền thống văn hóa, truyền thống đấu tranh chung
QN=29 Triết học do C.Mác và Ph.Ăng-ghen thực hiện là bước ngoặt cách mạng trong sự phát triển của triết học. Biểu hiện vĩ đại nhất của bước ngoặt cách mạng đó là | Việc sáng tạo ra chủ nghĩa duy vật lịch sử làm thay đổi hẳn quan niệm của con người về xã hội.
QN=43 Quy luật được coi là hạt nhân của phép biện chứng duy vật là | Quy luật thống nhất và đấu tranh của các mặt đối lập
QN=163 Tái sản xuất tư bản gồm có hai hình thức cơ bản đó là | Tái sản xuất giản đơn và tái sản xuất mở rộng
Ngày làm việc 8 giờ, m’ = 300%. Sau đó nhà tư bản kéo dài ngày lao động lên 10 giờ. Trình độ bóc lột sức lao động trong xí nghiệp thay đổi như thế nào nếu giá trị sức lao động không đổi. | m’ tăng đến 400%
QN=149 Tại sao  Mác nói phép biện chứng của G.W.Ph. Hêghen là phép biện chứng lộn đầu xuống đất? | Thừa nhận tự nhiên, xã hội là sản phẩm của quá trình phát triển của tinh thần, ý niệm
QN=163 Theo  Mác: vấn đề tìm hiểu xem tư duy của con người có thể đạt được chân lý khách quan hay không hoàn toàn không phải là vấn đề lý luận mà là vấn đề... | Thực tiễn
QN=89  Mác cho rằng: nếu như...không có tác dụng gì cả, thì lịch sử sẽ có một tính chất rất thần bí. | Ngẫu nhiên
QN=3 Trong tác phẩm kinh điển sau đây, tác phẩm nào được đánh giá là văn kiện đầu tiên có tính cương lĩnh của chủ nghĩa Mác, thể hiện sự chín muồi về mặt thế giới quan mới của  Mác và Ăngghen: | Tuyên ngôn của đảng cộng sản (1848)
QN=136 Theo  Mác con người phải chứng minh chân lý trong: | Hoạt động thực tiễn
QN=207 Điền thêm vào câu sau đây và xác định đó là luận điểm của ai? | Lịch sử - tự nhiên/  Mác
QN=5 Trong tác phẩm kinh điển nào sau đây, tác phẩm nào thể hiện sự tập trung đầy đủ nhất nội dung lý luận kinh tế chính trị học của chủ nghĩa Mác? Tác phẩm đó của ai? | Bộ Tư bản/  Mác
QN=433 Trong tuyên ngôn của những người cộng sản  Mác viết: | Vô sản các nước và các dân tộc bị áp bức đoàn kết lại
Nguyên nhân chủ yếu dẫn đến việc Mác và Ănghen chưa đưa ra định nghĩa hoàn chỉnh về phạm trù vật chất là do | A.Trình độ phát triển của khoa học chưa ngang tầm
Trong tác phẩm kinh điển nào sau đây, tác phẩm nào thể hiện sự tập trung đầy đủ nhất nội dung lý luận kinh tế chính trị học của chủ nghĩa Mác? Tác phẩm đó của ai? | B.Bộ Tư bản/  Mác
Hệ thống triết học nào coi cảm giác là hình ảnh chủ quan của thế giới khách quan? | A.Chủ nghĩa duy vật biện chứng
Khi xác định tính chất của phạm trù "Cái chung", triết học Mác- Lênin khẳng định cái chung là cái | A.Bản chất
Hiện thực là phạm trù triết học dùng để chỉ những gì | B.Đang tồn tại trong thực tế
"Cái đơn nhất" là phạm trù triết học dùng để chỉ | A.Thuộc tính tồn tại duy nhất ở một sự vật
C.Mác và Ph.Ăngghen cho rằng: cái mà người ta quả quyết cho là...thì lại hoàn toàn do những cái...cấu thành; và cái được coi là...lại là hình thức trong đó ẩn nấp... | A.Tất yếu/ ngẫu nhiên; ngẫu nhiên/ tất yếu
"Kết quả" là phạm trù triết học dùng để chỉ | A.Những thay đổi do nguyên nhân gây ra
Bộ phận nào của tư liệu lao động được coi là tiêu chí phản ánh đặc trưng phát triển của một thời đại kinh tế | A.Công cụ lao động
Ý thức xã hội có tính chất nào sau đây | A.Tính độc lập tương đối
Trong thời kỳ phục hưng giai cấp tư sản có vị trí như thế nào đối với sự phát triển của xã hội | A.Là giai cấp tiến bộ, cách mạng
Chọn câu trả lời đúng: Theo  Mác, về đại thể quá trình phát triển tuần tự của xã hội loài người đã lần lượt trải qua các phương thức sản xuất: | Á châu, cổ đại, phong kiến, tư sản hiện đại
Mối liên hệ nhân quả có các tính chất cơ bản nào sau đây | Tính khách quan, tính phổ biến, tính tất yếu.
Nguyên nhân là phạm trù triết học chỉ | Tác động qua lại giữa các mặt, các yếu tố bên trong sự vật hay giữa sự vật này với sự vật khia tạo ra những biến đổi nhất định
Nền tảng quan hệ giữa các nhân và xã hội là | Đạo đức
Trong định nghĩa về vật chất của mình, V.I.Lênin cho thuộc tính chung nhất của vật chất là | Tồn tại khách quan bên ngoài ý thức không lệ thuộc vào cảm giác
Sự phát triển các hình thái giá trị bao gồm | Hình thái giá trị ngẫu nhiên; hình thái giá trị mở rộng (đầy đủ); hình thái giá trị chung; hình thái tiền tệ.
Theo quan điểm của chủ nghĩa duy vật lịch sử, nguồn gốc, động lực cơ bản nhất của mọi quá trình phát triển xã hội là | Sự vận động của mâu thuẫn giữa lực lượng sản xuất và quan hệ sản xuất
Theo quan điểm của chủ nghĩa duy tâm khách quan, mối quan hệ giữa các sự vật do cái gì quyết đinh | Do bản chất của thế giới tự nhiên
Tiền tệ ra đời sau | Quá trình phát triển lâu dài trong lưu thông hàng hóa
Trong tác phẩm “biện chứng của tự nhiên”, Ph.Ăngghen viết: toàn bộ giới tự nhiên hữu cơ là bằng chứng liên tục nói lên rằng…là đồng nhất và không thể tách rời được. | Nội dung và hình thức
Lợi nhuận là | Hình thức biến tướng của giá trị thặng dư
Sản xuất hàng hóa tồn tại tính chất | Hai mặt
Quy luật triết học mang tính | Tất yếu, khách quan
Ý thức được gọi là hình ảnh chủ quan của… | Thế giới khách quan
Khoa học tự nhiên bắt đầu có sự phát triển mạnh mẽ vào thời kỳ nào | Thời kỳ Phục Hưng
Chế độ sở hữu của  nhà nước tư bản về kinh tế hình thành trong thời kỳ | Chủ nghĩa tư bản độc quyền nhà nước
Chọn câu trả lời đúng theo quan điểm của chủ nghĩa duy vật lịch sử: Trong mối quan hệ giữa tồn tại xã hội và ý thức xã hội | Tồn tại xã hội quyết định ý thức xã hội
@Generated by KingWisdom`.toLowerCase().split("\n")
const MAS_BANKS = ``.toLowerCase().split("\n")
const DBW_BANKS = ``.toLowerCase().split("\n")

let bankName = document.querySelector('input[name="bankName"]:checked').value;
let currentBank = PRX_BANKS
switch (bankName) {
    case "prx":
        currentBank = PRX_BANKS
        break;
    case "mln":
        currentBank = MLN_BANKS    
    break;
    case "mas":
        currentBank = MAS_BANKS    
    break;
    case "dbw":
        currentBank = DBW_BANKS    
    break;
}

const inputHandler = function (e) {
    let keywords = e.target.value;

    let searchResult = currentBank.filter((item) => item.includes(keywords.toLowerCase()))

    let result = document.querySelector("#result") 
    result.innerHTML = ""
    searchResult.forEach((item) => {
        const node = document.createElement("p");
        const textnode = document.createTextNode(item);
        node.appendChild(textnode);

        result.appendChild(node)
    })
}

document.querySelector("#keywords").addEventListener("input", inputHandler)

