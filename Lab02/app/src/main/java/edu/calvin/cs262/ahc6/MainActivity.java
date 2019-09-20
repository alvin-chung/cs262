package edu.calvin.cs262.ahc6;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.TextView;
import android.widget.Toast;

/**
 * version  3.5
 */
public class MainActivity extends AppCompatActivity {
/**
 * Start of the count set to 0.
 */
    private int mCount = 0;
    private TextView mShowCount;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        mShowCount = (TextView) findViewById(R.id.show_count);
    }
/**
 * Displays a message saying "Hello Toast!" once clicked.
 *
 * @param view
 * @return no returned variable
 */
    public void showToast(View view) {
        Toast toast = Toast.makeText(this, R.string.toast_message,
                                                    Toast.LENGTH_SHORT);
        toast.show();
    }

    /**
     * Allows a count starting from 0 to go up when clicked.
     *
     * @param view
     * @return no returned variable
     */
    public void countUp(View view) {
        mCount++;
        if (mShowCount != null)
            mShowCount.setText(Integer.toString(mCount));
    }
}
