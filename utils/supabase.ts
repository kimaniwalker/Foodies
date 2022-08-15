import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js'


const supabaseUrl = 'https://qpwvdraqvozhvestaili.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFwd3ZkcmFxdm96aHZlc3RhaWxpIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY1ODQyOTg3NCwiZXhwIjoxOTc0MDA1ODc0fQ.M4eC2mHeD5zo_mhQPnl2Phm1gmwVhksl2iwsT0INiQU'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    localStorage: AsyncStorage as any,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
});