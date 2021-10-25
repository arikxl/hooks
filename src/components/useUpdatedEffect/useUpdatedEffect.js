// עושה שיקרה משהו למשהו כשהוא משתנה בקומפוננטה.
// בניגוד ליוז אפקט הרגיל שקורה ישר כשהקומפוננטה מתרנדרת.
// זה בודק שזאת לא הפעם הראשונה ואז מופעל.

import  { useEffect, useRef } from 'react';

export default function useUpdatedEffect(callback, dependencies) {
    const firstRenderRef = useRef(true);

    useEffect(() => {
        if(firstRenderRef.current) {
            firstRenderRef.current = false;
            return
        }
        return callback()
    }, dependencies)

}
