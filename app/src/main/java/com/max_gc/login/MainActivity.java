package com.max_gc.login;
import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.FirebaseApp;
import com.google.firebase.auth.AuthResult;
import com.google.firebase.auth.FirebaseAuth;

public class MainActivity extends AppCompatActivity
{
    EditText email,password;
    Button signup;
    TextView tvsignin;
    FirebaseAuth firebaseAuth;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        firebaseAuth = FirebaseAuth.getInstance();
        email=(EditText)findViewById(R.id.email);
        password=(EditText)findViewById(R.id.password);
        signup=(Button)findViewById(R.id.signup);
        tvsignin=(TextView)findViewById(R.id.tvsignin);
        signup.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view)
            {
                String email1 = email.getText().toString();
                String password1 = password.getText().toString();
                if (email1.isEmpty())
                {
                    email.setError("Please Enter Email Address");
                    email.requestFocus();
                }
                else if (password1.isEmpty())
                {
                    password.setError("Please Enter Password");
                    password.requestFocus();
                }
                else if (email1.isEmpty() && password1.isEmpty())
                {
                    Toast.makeText(MainActivity.this,"FIELDS EMPTY",Toast.LENGTH_SHORT).show();
                }
                else if (!(email1.isEmpty() && password1.isEmpty()))
                {
                    firebaseAuth.createUserWithEmailAndPassword(email1, password1).addOnCompleteListener(MainActivity.this, new OnCompleteListener<AuthResult>()
                    {
                        @Override
                        public void onComplete(@NonNull Task<AuthResult> task)
                        {
                            if (!task.isSuccessful())
                                {
                                    Toast.makeText(getApplicationContext(), "SIGN UP UNSUCCESSFUL  " + task.getException().getMessage(), Toast.LENGTH_SHORT).show();
                                }
                            else
                                {
                                    startActivity(new Intent(MainActivity.this, user.class));
                                }
                        }
                    });
                }
                else
                {
                    Toast.makeText(getApplicationContext(),"ERROR",Toast.LENGTH_SHORT).show();;
                }
            }
          });
            tvsignin.setOnClickListener(new View.OnClickListener()
            {
                @Override
                public void onClick(View view)
                {
                    Intent login = new Intent(MainActivity.this, signin.class);
                    startActivity(login);
                }
            });
    }
}
