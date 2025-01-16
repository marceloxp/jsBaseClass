# JsBaseClass

**JsBaseClass** is a versatile JavaScript base class designed to simplify common tasks such as logging, event handling, and browser detection. It provides a foundation for building modular and reusable components in your JavaScript applications. The class is lightweight, extensible, and easy to integrate into any project.

## Features

1. **Custom Console Logging**:
   - Built-in support for color-coded console logs.
   - Includes `log`, `info`, `warn`, `error`, and `trace` methods.
   - Customizable colors for better readability.

2. **Event Handling**:
   - Simple API for triggering and listening to custom events.
   - Built on top of the native `CustomEvent` API.

3. **Browser Detection**:
   - Detect the browser name, version, and other details using `ua-parser-js`.
   - Helper methods to check if the current browser is Chrome, Firefox, Safari, IE, or Edge.

4. **Lightweight and Extensible**:
   - Minimal dependencies.
   - Easy to extend with custom functionality.

## Installation

Include the library in your project using a script tag:

```html
<!-- Development (with logging enabled) -->
<script src="path/to/jsBaseClass.min.js" data-silent="false"></script>

<!-- Production (with logging disabled) -->
<script src="path/to/jsBaseClass.min.js" data-silent="true"></script>
```

## Usage

### 1. Extending JsBaseClass

To use `JsBaseClass`, extend it in your own class and implement the `handle` method:

```javascript
class MyApp extends JsBaseClass {
    async handle() {
        // Your initialization code here
        this.console.log('MyApp is running!');
    }
}

const app = new MyApp();
app.init();
```

### 2. Custom Console Logging

The `JsBaseClass` provides a built-in `console` object for logging. You can customize the log colors and styles:

```javascript
class MyApp extends JsBaseClass {
    async handle() {
        // Set a custom color for logs
        this.console.setColor('#3498db'); // Blue

        // Log messages
        this.console.log('This is a standard log message.');
        this.console.info('This is an informational message.');
        this.console.warn('This is a warning!');
        this.console.error('This is an error!');
        this.console.trace('This is a trace message.');

        // Log with a random color
        const randomColor = new JsBaseClassColors().get();
        this.console.setColor(randomColor);
        this.console.log(`This log has a random color: ${randomColor}`);
    }
}

const app = new MyApp();
app.init();
```

### 3. Event Handling

Use the `trigger` and `on` methods to handle custom events. In this example, one class listens to an event, and another class triggers it:

```javascript
// Class that listens to the event
class EventListener extends JsBaseClass {
    async handle() {
        // Listen to a custom event
        this.on('my-event', (event) => {
            this.console.log('Event received:', event.detail);
        });
    }
}

// Class that triggers the event
class EventTrigger extends JsBaseClass {
    async handle() {
        // Trigger the event
        this.trigger('my-event', { message: 'Hello, World!' });
    }
}

// Initialize both classes
const listener = new EventListener();
listener.init();

const trigger = new EventTrigger();
trigger.init();
```

### 4. Browser Detection

The `JsBaseClass` provides browser detection capabilities:

```javascript
class MyApp extends JsBaseClass {
    async handle() {
        this.console.log('Browser:', this.browser.name);
        this.console.log('Browser Version:', this.browser.version);
        this.console.log('Is Chrome?', this.is.chrome);
        this.console.log('Is Firefox?', this.is.firefox);
    }
}

const app = new MyApp();
app.init();
```

## Boilerplate for Practical Use

Here’s a basic boilerplate to get started with **JsBaseClass**:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JsBaseClass Example</title>
    <script src="path/to/jsBaseClass.min.js" data-silent="false"></script>
</head>
<body>
    <h1>JsBaseClass Example</h1>
    <p>Open the browser console to see the logs.</p>

    <script>
        class MyApp extends JsBaseClass {
            async handle() {
                // Custom console logging
                this.console.setColor('#3498db'); // Blue
                this.console.log('This is a log message.');
                this.console.info('This is an info message.');
                this.console.warn('This is a warning!');
                this.console.error('This is an error!');

                // Event handling
                this.on('my-event', (event) => {
                    this.console.log('Event triggered:', event.detail);
                });

                this.trigger('my-event', { message: 'Hello, World!' });

                // Browser detection
                this.console.log('Browser:', this.browser.name);
                this.console.log('Browser Version:', this.browser.version);
            }
        }

        const app = new MyApp();
        app.init();
    </script>
</body>
</html>
```

## License

**JsBaseClass** is licensed under the MIT License.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on the [GitHub repository](https://github.com/marceloxp/jsBaseClass).

Enjoy using **JsBaseClass**! 🚀