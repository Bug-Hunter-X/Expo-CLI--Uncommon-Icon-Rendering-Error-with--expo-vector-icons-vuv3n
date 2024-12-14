The solution involves ensuring that you're importing and using the `@expo/vector-icons` components correctly.

Instead of using:
```javascript
import Icon from 'react-native-vector-icons/FontAwesome';
// ...then trying to use it like...
<Icon name="user" size={30} color="#900" />
```

Use the correct import from @expo/vector-icons:
```javascript
import { FontAwesomeIcon } from '@expo/vector-icons/FontAwesome'; // Correct Import

// ...then in your render function:
<FontAwesomeIcon name="user" size={30} color="#900" />
```

Ensure you have installed the package:
```bash
expo install @expo/vector-icons
```

Also verify that the font family name in the `name` prop matches a valid icon from that family.  Reference the documentation for each icon family to confirm the available icons.

If the issue persists, double-check that you have correctly configured the icon families in your application's setup.