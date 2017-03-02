module Main exposing (..)

import Html exposing (..)


type alias Model =
    {}


type Msg
    = Noop


update : Msg -> Model -> ( Model, Cmd msg )
update msg model =
    case msg of
        Noop ->
            ( model, Cmd.none )


view : Model -> Html Msg
view model =
    div [] [ text "WH" ]


subscriptions : Model -> Sub msg
subscriptions model =
    Sub.none


main : Program Never Model Msg
main =
    program
        { init = ( {}, Cmd.none )
        , update = update
        , view = view
        , subscriptions = subscriptions
        }
