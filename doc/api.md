<a name="PolyApp"></a>
## PolyApp
**Kind**: global class  

* [PolyApp](#PolyApp)
    * [new PolyApp([opts])](#new_PolyApp_new)
    * [.start([port], [callback])](#PolyApp+start)
    * [.stop(callback)](#PolyApp+stop)
    * [.include(Module, moduleOptions)](#PolyApp+include)

<a name="new_PolyApp_new"></a>
### new PolyApp([opts])
Initializes a new PolyApp


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [opts] | <code>Object</code> | <code>{}</code> |  |
| [opts.routesPrefix] | <code>string</code> | <code>&quot;/api&quot;</code> | A string (beginning with slash) to be prepended to all modules routes |
| [opts.port] | <code>number</code> | <code>3000</code> | Port number to listen to |

<a name="PolyApp+start"></a>
### polyApp.start([port], [callback])
Open a web server

**Kind**: instance method of <code>[PolyApp](#PolyApp)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [port] | <code>number</code> | Optional port to listen to. If it is undefined the port property is used. |
| [callback] | <code>function</code> | Called after web server starts listening |

<a name="PolyApp+stop"></a>
### polyApp.stop(callback)
Close the web server

**Kind**: instance method of <code>[PolyApp](#PolyApp)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | Called after web server is stopped |

<a name="PolyApp+include"></a>
### polyApp.include(Module, moduleOptions)
Add a new module to the stack

**Kind**: instance method of <code>[PolyApp](#PolyApp)</code>  

| Param | Type | Description |
| --- | --- | --- |
| Module | <code>function</code> | Module constructor |
| moduleOptions | <code>Object</code> | Module options |

