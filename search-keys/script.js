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

const inputHandler = function (e) {
    let keywords = e.target.value;

    let searchResult = PRX_BANKS.filter((item) => item.includes(keywords.toLowerCase()))

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

