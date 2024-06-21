# no-touchy
recursively disable your components with ease

### usage
```
import { noTouchy } from 'no-touchy';
<NoTouchy>
    {/* long and complicated component tree */}
    <TouchableOpacity onPress={handlePress}>
        <Text>Press me, and watch as nothing happens!</Text>
    </TouchableOpacity>
</NoTouchy>
```
