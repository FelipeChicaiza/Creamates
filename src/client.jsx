import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fxizzovdoiojbsalhibr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ4aXp6b3Zkb2lvamJzYWxoaWJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA2ODU1ODEsImV4cCI6MjA0NjI2MTU4MX0.a3bwhFnB2bjLCN4y_iJVLPChBeFvmevvUaf_oMHeiTM'

export const supabase = createClient(supabaseUrl, supabaseKey);