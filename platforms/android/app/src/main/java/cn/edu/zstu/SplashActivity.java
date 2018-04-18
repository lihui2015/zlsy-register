package cn.edu.zstu;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.view.animation.Animation;
import android.view.animation.AnimationSet;
import android.view.animation.ScaleAnimation;
import android.view.animation.AlphaAnimation;


public class SplashActivity extends AppCompatActivity {

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_splash);

    View imageView = findViewById(R.id.bitmapImageView);
    //ScaleAnimation scaleAnimation = new ScaleAnimation(0.0f, 1.0f, 0.0f, 1.0f, Animation.RELATIVE_TO_SELF, 0.5f, Animation.RELATIVE_TO_SELF, 0.5f);
    AlphaAnimation alphaAnimation = new AlphaAnimation(1, 1);

    AnimationSet animationSet = new AnimationSet(false);
    //animationSet.addAnimation(scaleAnimation);
    animationSet.addAnimation(alphaAnimation);
    animationSet.setDuration(1000);

    animationSet.setAnimationListener(new Animation.AnimationListener() {
      @Override
      public void onAnimationStart(Animation animation) {
      }

      @Override
      public void onAnimationEnd(Animation animation) {
        Intent intent = new Intent(SplashActivity.this, WXPageActivity.class);
        Uri data = getIntent().getData();
        if (data != null) {
          intent.setData(data);
        }
        intent.putExtra("from", "splash");
        startActivity(intent);
        finish();
      }

      @Override
      public void onAnimationRepeat(Animation animation) {
      }
    });
    imageView.startAnimation(animationSet);
  }
}
