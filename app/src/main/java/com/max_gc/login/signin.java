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
import com.google.firebase.auth.AuthResult;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseUser;

public class signin extends AppCompatActivity
{
    EditText email,password;
    Button signin;
    TextView tvsignup;
    FirebaseAuth firebaseAuth;
    private  FirebaseAuth.AuthStateListener authStateListener;
    @Override
    protected void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_signin);
        FirebaseAuth.getInstance();
        email=(EditText)findViewById(R.id.email);
        password=(EditText)findViewById(R.id.password);
        signin=(Button) findViewById(R.id.signin);
        tvsignup=(TextView)findViewById(R.id.tvsignup);
        authStateListener = new FirebaseAuth.AuthStateListener()
        {
            @Override
            public void onAuthStateChanged(@NonNull FirebaseAuth firebaseAuth)
            {
                FirebaseUser user= firebaseAuth.getCurrentUser();
                if(user!=null)
                {
                    Toast.makeText(signin.this,"USER LOGGED IN",Toast.LENGTH_SHORT).show();
                    Intent i=new Intent(signin.this,user.class);
                    startActivity(i);
                }
                else
                {
                    Toast.makeText(signin.this,"LOGIN TO CONTINUE",Toast.LENGTH_SHORT).show();
                }
            }
        };
        tvsignup.setOnClickListener(new View.OnClickListener()
        {
            @Override
            public void onClick(View view)
            {
                Intent I=new Intent(signin.this,MainActivity.class);
                startActivity(I);
            }
        });
        signin.setOnClickListener(new View.OnClickListener()
        {
            @Override
            public void onClick(View view)
            {
                 String email1=email.getText().toString();
                 String password1=password.getText().toString();
                 if(email1.isEmpty())
                 {
                     email.setError("Provide email address first");
                     email.requestFocus();
                 }
                 else if(password1.isEmpty())
                 {
                     password.setError("Enter Password");
                     password.requestFocus();
                 }
                 else if(email1.isEmpty()&&password1.isEmpty())
                 {
                     Toast.makeText(signin.this,"FIELDS EMPTY",Toast.LENGTH_SHORT).show();
                 }
                 else if(!(email1.isEmpty()&&password1.isEmpty()))
                 {
                     firebaseAuth.signInWithEmailAndPassword(email1,password1).addOnCompleteListener(signin.this, new OnCompleteListener<AuthResult>()
                     {
                         @Override
                         public void onComplete(@NonNull Task<AuthResult> task)
                         {
                             if(!task.isSuccessful())
                             {
                                 Toast.makeText(signin.this,"NOT SUCCESSFUL",Toast.LENGTH_SHORT).show();
                             }
                             else
                             {
                                 Toast.makeText(signin.this,"SIGNIN SUCCESSFUL",Toast.LENGTH_SHORT).show();
                                 startActivity(new Intent(signin.this,user.class));
                             }
                         }
                     });
                 }
                 else
                 {
                     Toast.makeText(signin.this,"ERROR",Toast.LENGTH_SHORT).show();

                 }
            }
        });
    }

    @Override
    protected void onStart()
    {
        super.onStart();
    }
}
