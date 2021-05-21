package temp;

import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.*;
import java.io.IOException;

public class AverageReducer extends Reducer <Text, IntWritable, Text, IntWritable>{
	
	public void reduce(Text key, Iterable<IntWritable> values, Context context) throws IOException, InterruptedException {
		int tot_temp = 0;
		int count = 0;
		for(IntWritable value: values) {
			tot_temp +=value.get();
			count+=1;
		}
		context.write(key, new IntWritable(tot_temp/count));
	}

}
